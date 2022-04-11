import { collection, getDocs } from "firebase/firestore"

import { Product } from "@products/types"
import { database } from "@config/firebase"

const productsRef = collection(database, "products")

export default {
  search: async (): Promise<Product[]> => {
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
}
