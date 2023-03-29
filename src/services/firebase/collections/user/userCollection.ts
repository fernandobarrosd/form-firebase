import { collection, CollectionReference } from "@firebase/firestore";
import { User } from "src/@types/User.js";
import { firestore } from "../../config";


export const userCollection = collection(firestore, "usuario") as 
CollectionReference<User>;