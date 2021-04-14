import { REGISTER_USER } from "../constants";
import { auth } from "../firebase";
import { toast } from "react-toastify";

export const registerUser = (email, password) => {
    console.log(email, password)
    return {
        type: REGISTER_USER,
        email: email
    }   
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(() => {
//       toast.success("Registration was succesessfull");
//     })
//     .catch((err) => {
//       console.log(err);
//       toast.error("Registration wasn't succesessfull");
//     });
};
