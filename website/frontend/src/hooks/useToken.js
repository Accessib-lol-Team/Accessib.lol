import { useState } from "react";
import { getToken } from "../services/token.services";

export default function useToken() {
    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
        localStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        token,
        setToken: saveToken,
    };
}
