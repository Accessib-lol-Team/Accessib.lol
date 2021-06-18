import { useState } from "react";

export default function useUserId() {
    const [userId, setUserId] = useState();

    return {
        userId,
        setUserId,
    };
}
