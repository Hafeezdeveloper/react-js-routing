import app from './FMain'
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { getDatabase ,ref ,set , onValue } from "firebase/database";

const auth = getAuth(app);
const db = getDatabase(app);



// export {}