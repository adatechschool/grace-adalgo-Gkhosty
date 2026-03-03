export const passwd_validator = (password) => {
    if (password.length < 6) {
        return true;
    }
    return false;
};