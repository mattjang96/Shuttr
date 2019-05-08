import React from 'react';

class CreateComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            photo_id: this.props.photoId,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('comment[body]', this.state.body)
        formData.append('comment[photo_id]', this.state.photo_id)
        this.props.createComment(formData)
            .then(() => {
                this.setState({
                    body: ''
                })
            })
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
        )
    }

    render() {
        return (
            <div className="create-comment-div">
                <div className="create-comment-section">
                    {this.renderErrors()}
                    <textarea
                        className="comment-box"
                        value={this.state.body}
                        onChange={this.handleInput('body')}
                        placeholder="Add a comment"
                    ></textarea>
                </div>

                <div className="comment-button-div">
                    <button className="comment-button" onClick={this.handleSubmit}>Comment</button>
                </div>
            </div>

        )
    }

}

export default CreateComment;