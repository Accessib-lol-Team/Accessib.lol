const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
};

const deleteToken = () => {
    localStorage.removeItem("token");
};

export { getToken, deleteToken };
