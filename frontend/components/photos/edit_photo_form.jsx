import React from 'react'
import { Link } from 'react-router-dom';

class EditPhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.photo.id,
            title: this.props.photo.title,
            description: this.props.photo.description
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        let photoId = this.props.match.params.photoId
        this.props.fetchPhoto(photoId);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const photo = Object.assign({}, this.state);
        this.props.updatePhoto(photo)
            .then(() => this.props.history.push(`/photos/${photo.id}`))
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deletePhoto(this.props.photoId)
            .then(() => this.props.history.push("/photos"))
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className="upload-photo-div">
                <form className="upload-photo-form">
                    <div className="upload-photo-field">
                        <Link className="back-photo-button" to={`/photos/${this.props.photo.id}`}><i className="fas fa-arrow-left"></i> Back to photo</Link>

                        {this.renderErrors()}
                        <input type="text"
                            className="create-photo-title"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                            placeholder={this.props.photo.title}
                        />

                        {/* <input type="text"
              className="create-photo-description"
              value={this.state.description}
              onChange={this.handleInput('description')}
              placeholder={this.props.photo.description}
            /> */}

                        <textarea
                            className="create-photo-description"
                            value={this.state.description}
                            onChange={this.handleInput('description')}
                            placeholder={this.props.photo.description}
                        ></textarea>

                        <button className="upload-buttons" onClick={this.handleSubmit}>Edit photo</button>

                        <button className="delete-buttons" onClick={this.handleDelete}>Delete</button>

                    </div>

                    <div className="upload-photo-photo">
                        {/* <div className="fake-button">Choose photos to upload</div> */}

                        {/* <input type="file"
              className="choose-file"
              onChange={this.handleFile}
            /> */}
                        <div className="preview-img-div">
                            <img className="preview-image" src={this.props.photo.photoUrl} />
                        </div>
                    </div>

                </form>
            </div>
        )
    }

}

export default EditPhotoForm;