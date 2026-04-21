/**
 * FormData から prefix.index.field 形式のフィールドをパースして配列に変換する
 * 例: "images.0.url", "images.0.alt", "images.1.url" → [{ url, alt }, { url }]
 */
export function parseArrayFields(
  formData: FormData,
  prefix: string,
): Record<string, string>[] {
  const items = new Map<number, Record<string, string>>()
  const prefixDot = `${prefix}.`
  for (const [key, value] of formData.entries()) {
    if (!key.startsWith(prefixDot)) continue
    const rest = key.slice(prefixDot.length)
    const dotIdx = rest.indexOf('.')
    if (dotIdx === -1) continue
    const index = parseInt(rest.slice(0, dotIdx))
    const field = rest.slice(dotIdx + 1)
    if (isNaN(index) || !field) continue
    if (!items.has(index)) items.set(index, {})
    items.get(index)![field] = value as string
  }
  return [...items.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([, v]) => v)
}
