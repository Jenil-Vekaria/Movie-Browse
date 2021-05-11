import decode from 'jwt-decode';

export const TokenValidation = (user) => {

    const token = user?.token;

    if (token) {
        const decodeToken = decode(token);

        if (decodeToken.expr * 1000 < new Date().getTime())
            return false;
        else
            return true;
    }

    return false;
};
