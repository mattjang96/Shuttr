
export const fetchAlbums = () => {
    return $.ajax({
        method: "GET",
        url: "/api/albums"
    })
}

export const fetchAlbum = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/albums/${id}`
    })
}

// high chance of coming back to edit
export const createAlbum = (album) => {
    return $.ajax({
        method: "POST",
        url: "/api/albums",
        data: album,
        contentType: false,
        processData: false
    })
}

export const updateAlbum = (album) => {
    return $.ajax({
        method: "PATCH",
        url: `/api/albums/${album.id}`,
        data: { album }
    })
}

export const deleteAlbum = (albumId) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/albums/${albumId}`
    })
}

// testing
window.createAlbum = createAlbum
window.fetchAlbum = fetchAlbum;
window.fetchAlbums = fetchAlbums;
window.updateAlbum = updateAlbum;
window.deleteAlbum = deleteAlbum;