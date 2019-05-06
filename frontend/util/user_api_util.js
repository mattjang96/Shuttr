export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const fetchUser = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/photos/${id}`
    })
};

export const fetchUsers = () => {
    return $.ajax({
        method: "GET",
        url: `/api/photos`
    })
};
