import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./config/firebase";

const auth = getAuth(app);

const App = () => {

  const signUpUser = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, "varmakaushal33@gmail.com", "password")
      console.log(res);
      
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div>
      <button onClick={signUpUser}>submit</button>
    </div>
  )
}

export default App