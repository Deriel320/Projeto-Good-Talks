import React from "react";
import {auth,provider} from "../../services/firebase";
import * as C from "./styles";

const Login = () => {
    const handlesSignin = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

return (
        <C.Container>
        <C.Button onClick={handlesSignin}></C.Button>
        </C.Container>
);
};

export default Login;