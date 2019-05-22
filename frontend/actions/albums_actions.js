import * as AlbumAPIUtil from '../util/albums_api_util';

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIVE_ALBUM_ERRORS = "RECEIVE_ALBUM_ERRORS";

const receiveAllAlbums = (albums) => {
    return ({
        type: RECEIVE_ALL_ALBUMS,
        albums: albums
    })
}

const receiveAlbum = (album) => {
    return ({
        type: RECEIVE_ALBUM,
        album: album
    })
}

const removeAlbum = (album) => {
    return ({
        type: REMOVE_ALBUM,
        albumId: album.id
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_ALBUM_ERRORS,
        errors: errors
    })
}

export const fetchAlbums = () => dispatch => {
    return (
        AlbumAPIUtil.fetchAlbums()
            .then((albums) => dispatch(receiveAllAlbums(albums)))
    )
}

export const fetchAlbum = (id) => dispatch => {
    return (
        AlbumAPIUtil.fetchAlbum(id)
            .then((album) => dispatch(receiveAlbum(album)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const createAlbum = (album) => dispatch => {
    return (
        AlbumAPIUtil.createAlbum(album)
            .then((album) => dispatch(receiveAlbum(album)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const updateAlbum = (album) => dispatch => {
    return (
        AlbumAPIUtil.updateAlbum(album)
            .then((album) => dispatch(receiveAlbum(album)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const deleteAlbum = (id) => dispatch => {
    return (
        AlbumAPIUtil.deleteAlbum(id)
            .then((album) => dispatch(removeAlbum(album)))
    )
}