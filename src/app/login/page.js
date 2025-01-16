import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "@/lib/firebaseConfig";

const auth = getAuth(app);

export default async function handleLogin(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuário logado:", userCredential.user);
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
}