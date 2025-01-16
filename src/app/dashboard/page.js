import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "@/lib/firebaseConfig";

const db = getFirestore(app);

export default async function fetchProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const projects = querySnapshot.docs.map((doc) => doc.data());
  console.log("Projetos:", projects);
}