const UNSPLASH_ACCESS_KEY = 'Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ'

export interface UnsplashImage {
  url: string
  alt: string
  credit: string
  creditUrl: string
}

export async function getUnsplashImage(
  query: string,
  orientation: 'landscape' | 'portrait' | 'squarish' = 'landscape'
): Promise<UnsplashImage | null> {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=${orientation}&client_id=${UNSPLASH_ACCESS_KEY}`,
      { next: { revalidate: 86400 } } // cache 24h
    )
    if (!res.ok) return null
    const data = await res.json()
    return {
      url: data.urls.regular,
      alt: data.alt_description || query,
      credit: data.user.name,
      creditUrl: data.user.links.html,
    }
  } catch {
    return null
  }
}

export async function searchUnsplashImages(query: string, count: number = 6): Promise<UnsplashImage[]> {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&client_id=${UNSPLASH_ACCESS_KEY}`,
      { next: { revalidate: 86400 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.results.map((photo: any) => ({
      url: photo.urls.regular,
      alt: photo.alt_description || query,
      credit: photo.user.name,
      creditUrl: photo.user.links.html,
    }))
  } catch {
    return []
  }
}
