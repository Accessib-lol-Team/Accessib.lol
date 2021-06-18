const apiURL = "https://accessiblol-server-1.herokuapp.com";

const postLogin = async (data) =>
    fetch(`${apiURL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });

const postSignUp = async (data) =>
    fetch(`${apiURL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });

const getUserById = async (token, userId) =>
    fetch(`${apiURL}/user/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });

const patchUser = async (token, userId, data) =>
    fetch(`${apiURL}/user/${userId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });

export { postLogin, postSignUp, getUserById, patchUser };
