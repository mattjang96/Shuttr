export const login = user => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    });
};

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/user',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session',
    })
);
