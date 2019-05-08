import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPhotos();
        // this.props.fetchUsers();
    }
    
    render() {
        let photos = this.props.photos.map(photo => {
            return (
                <PhotoIndexItem
                    key={photo.id}
                    photo={photo}
                />
            )
        });

        return (
            <div className="photos-index-container">
                {photos}
            </div>
        );
    }
}

export default PhotoIndex;