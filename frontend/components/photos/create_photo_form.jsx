import React from 'react';

class CreatePhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            photoFile: null,
            photoUrl: null,
            showForm: false,
            buttonForm: true,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result, buttonForm: false, showForm: true });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    // handleSubmit(e){
    //   e.preventDefault();
    //   const photo = Object.assign({}, this.state);
    //   this.props.createPhoto(photo)
    //     .then( () => this.props.history.push("/photos"))
    // }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[title]', this.state.title)
        formData.append('photo[description]', this.state.description)
        if (this.state.photoFile) {
            formData.append('photo[image]', this.state.photoFile)
        }
        this.props.createPhoto(formData)
            .then(() => this.props.history.push("/photos"))
    }

    renderErrors() {
        return (
            <ul className="login-errors">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {

        const menuForm = this.state.showForm ? (
            <div className="upload-photo-field">
                {this.renderErrors()}
                <input type="text"
                    className="create-photo-title"
                    value={this.state.title}
                    onChange={this.handleInput('title')}
                    placeholder="Add a title"
                />

                {/* <input type="text"
          className="create-photo-description"
          value={this.state.description}
          onChange={this.handleInput('description')}
          placeholder="Add a description"
        /> */}

                <textarea
                    className="create-photo-description"
                    value={this.state.description}
                    onChange={this.handleInput('description')}
                    placeholder="Add a description"
                ></textarea>

                <button className="upload-buttons" onClick={this.handleSubmit}>Upload photo</button>
            </div>) : null;

        const buttonButton = this.state.buttonForm ? (
            <div className="upload-photo-photo">
                <div className="fake-button">
                    Choose photos to upload
        <input type="file"
                        className="choose-file"
                        onChange={this.handleFile}
                    />
                </div>

            </div>) : (
                <div className="upload-photo-photo">
                    <div className="preview-image-div">
                        <img className="preview-image" src={this.state.photoUrl} />
                    </div>
                </div>
            );

        // const preview = this.state.photoUrl ? <img className="preview-image" src={this.state.photoUrl} /> : null;
        return (
            <div className="upload-photo-div">
                <form className="upload-photo-form">

                    {menuForm}

                    {buttonButton}

                    {/* <div className="upload-photo-photo">
            {preview}
          </div> */}

                    {/* <button onClick={this.handleSubmit}>Upload photo</button> */}
                </form>
            </div>
        )
    }

};

export default CreatePhotoForm;
