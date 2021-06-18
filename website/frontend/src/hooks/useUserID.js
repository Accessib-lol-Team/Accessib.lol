import { useState } from "react";
import { getUserId } from "../services/userId.services";

export default function useUserId() {
    const [userId, setUserId] = useState(getUserId());

    const saveUserId = (userId) => {
        localStorage.setItem("userId", JSON.stringify(userId));
        setUserId(userId);
    };

    return {
        userId,
        setUserId: saveUserId,
    };
}
