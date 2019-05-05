import React from 'react';
import { connect } from 'react-redux';
import CreatePhotoForm from './create_photo_form';
import { createPhoto } from '../../actions/photos_actions';

const mapStateToProps = state => {
    return ({
        errors: state.errors.photos
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        createPhoto: photo => dispatch(createPhoto(photo))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePhotoForm);