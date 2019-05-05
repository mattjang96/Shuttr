import React from 'react';
import { connect } from 'react-redux';
import EditPhotoForm from './edit_photo_form';
import { updatePhoto, fetchPhoto, deletePhoto } from '../../actions/photos_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        photo: state.entities.photos[ownProps.match.params.photoId],
        photoId: ownProps.match.params.photoId,
        errors: state.errors.photos
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        updatePhoto: photo => dispatch(updatePhoto(photo)),
        fetchPhoto: id => dispatch(fetchPhoto(id)),
        deletePhoto: id => dispatch(deletePhoto(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPhotoForm);