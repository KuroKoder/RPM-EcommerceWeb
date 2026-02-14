//lib/api.client.ts
export async function apiGet<T>(url: string, init?: RequestInit) {
  const res = await fetch(url, init)
  if (!res.ok) throw new Error("API Error")
  return res.json() as Promise<T>
}
