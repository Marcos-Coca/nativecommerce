import useSWR from "swr"

import product from "@products/services/product"

export default function useProducts() {
  const { data, error } = useSWR(" ", product.search)

  return {
    error,
    products: data,
    isLoading: !error && !data,
  }
}
