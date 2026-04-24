export function isVercelPreviewBuild(): boolean {
  return process.env.VERCEL_ENV === "preview";
}

export function shouldSkipStaticGenerationForPreview(): boolean {
  return isVercelPreviewBuild();
}
