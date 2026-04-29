const STORAGE_KEY = "simulator-map-state";
export const MOON_STORAGE_KEY = "moon-map-state";

export interface MapState {
  lat: number;
  lng: number;
  zoom: number;
}

export const DEFAULT_MAP_STATE: MapState = {
  lat: 35.6895,
  lng: 139.6917,
  zoom: 16,
};

export function saveMapState(state: MapState, key: string = STORAGE_KEY): void {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch {
    // localStorage unavailable
  }
}

export function loadMapState(key: string = STORAGE_KEY): MapState {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return DEFAULT_MAP_STATE;
    const parsed = JSON.parse(raw);
    if (
      typeof parsed.lat === "number" &&
      typeof parsed.lng === "number" &&
      typeof parsed.zoom === "number"
    ) {
      return parsed;
    }
    return DEFAULT_MAP_STATE;
  } catch {
    return DEFAULT_MAP_STATE;
  }
}
