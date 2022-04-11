import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

import env from "@config/env"

const firebaseConfig = env.firebase

const app = initializeApp(firebaseConfig)
const database = getFirestore(app)

export { database }
