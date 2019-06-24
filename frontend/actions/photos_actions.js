import * as PhotoAPIUtil from '../util/photos_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_PHOTO_ERRORS = "RECEIVE_PHOTO_ERRORS";

const receiveAllPhotos = (photos) => {
    return ({
        type: RECEIVE_ALL_PHOTOS,
        photos: photos
    })
}

const receivePhoto = (photo) => {2
    return ({
        type: RECEIVE_PHOTO,
        photo: photo
    })
}

const removePhoto = (photo) => {
    return ({
        type: REMOVE_PHOTO,
        photoId: photo.id
    })
}

const receiveErrors = (errors) => {
    return ({
        type: RECEIVE_PHOTO_ERRORS,
        errors: errors
    })
}

export const fetchPhotos = () => dispatch => {
    return (
        PhotoAPIUtil.fetchPhotos()
            .then((photos) => dispatch(receiveAllPhotos(photos)))
    )
}

export const fetchPhoto = (id) => dispatch => {
    return (
        PhotoAPIUtil.fetchPhoto(id)
            .then((photo) => dispatch(receivePhoto(photo)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const createPhoto = (photo) => dispatch => {
    return (
        PhotoAPIUtil.createPhoto(photo)
            .then((photo) => dispatch(receivePhoto(photo)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const updatePhoto = (photo) => dispatch => {
    return (
        PhotoAPIUtil.updatePhoto(photo)
            .then((photo) => dispatch(receivePhoto(photo)))
            .fail(error => dispatch(receiveErrors(error.responseJSON)))
    )
}

export const deletePhoto = (id) => dispatch => {
    return (
        PhotoAPIUtil.deletePhoto(id)
            .then((photo) => dispatch(removePhoto(photo)))
    )
}