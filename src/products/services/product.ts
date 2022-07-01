import { collection, getDocs } from "firebase/firestore"

import { ListProduct, Product } from "@products/types"
import { database } from "@config/firebase"

const productsRef = collection(database, "products")

export default {
  search: async (): Promise<ListProduct[]> => {
    const querySnapshots = await getDocs(productsRef)
    return querySnapshots.docs.map((doc) => {
      const data = doc.data() as any
      return {
        ...data,
        id: doc.id,
        createdAt: data.createdAt.toDate(),
        updatedAt: data.updatedAt.toDate(),
      }
    })
  },

  getById: async (id: string): Promise<Product> => {
    const query = query(productsRef)
    const querySnapshots = await getDocs(productsRef)
  },
}
