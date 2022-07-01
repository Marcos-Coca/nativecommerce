export interface ListProduct {
  id: string
  createdAt: number
  updatedAt: number
  title: string
  description?: string
  category?: string
  image?: string | undefined
  price: number
  originalPrice?: number
  type: "available" | "unavailable" | "hidden" | "promotional"
  featured?: boolean
  shop: string
}

export interface Product extends ListProduct {
  options: Record<string, any>
}
