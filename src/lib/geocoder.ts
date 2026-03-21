let geocoder: google.maps.Geocoder | null = null;
let loadPromise: Promise<void> | null = null;
let lastExecutionTime = 0;
let executionCount = 0;
const MAX_EXECUTIONS = 15;
const COOLDOWN_MS = 10000;

function loadGoogleMapsScript(): Promise<void> {
  if (loadPromise) return loadPromise;
  if (typeof google !== "undefined" && google.maps?.Geocoder) {
    return Promise.resolve();
  }

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Google Maps API"));
    document.head.appendChild(script);
  });

  return loadPromise;
}

async function getGeocoder(): Promise<google.maps.Geocoder> {
  if (geocoder) return geocoder;
  await loadGoogleMapsScript();
  geocoder = new google.maps.Geocoder();
  return geocoder;
}

export interface GeocodeResult {
  lat: number;
  lng: number;
}

export type GeocodeError = "rate_limit" | "session_limit" | "not_found";

export async function geocodeAddress(
  address: string
): Promise<
  | { success: true; result: GeocodeResult }
  | { success: false; error: GeocodeError }
> {
  if (executionCount >= MAX_EXECUTIONS) {
    return { success: false, error: "session_limit" };
  }

  const now = Date.now();
  if (now - lastExecutionTime < COOLDOWN_MS) {
    return { success: false, error: "rate_limit" };
  }

  lastExecutionTime = now;

  try {
    const gc = await getGeocoder();
    const response = await gc.geocode({ address });

    if (response.results.length > 0) {
      executionCount++;
      const location = response.results[0].geometry.location;
      return {
        success: true,
        result: { lat: location.lat(), lng: location.lng() },
      };
    }
    return { success: false, error: "not_found" };
  } catch (e) {
    console.error("Geocoder error:", e);
    return { success: false, error: "not_found" };
  }
}
