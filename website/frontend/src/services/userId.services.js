const getUserId = () => {
    const userIdString = localStorage.getItem("userId");
    const userId = JSON.parse(userIdString);
    return userId;
};

const deleteUserId = () => {
    localStorage.removeItem("userId");
};

export { getUserId, deleteUserId };
