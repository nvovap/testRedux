import React from "react";

import {connect} from 'react-redux'

import {createPost, showAlert, hideAlert} from '../redux/actions'

import { Alert } from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        const {title} = this.state

        if (title.trim() === '') {
            this.props.showAlert('Text Post is empty !!! its uncorrect')
            return 
        }

        const newPost = {
            title, id: Date.now().toString()
        }

        console.log(newPost)

        this.props.createPost(newPost)

        this.setState({title: ''})

    }


    changeInputHandler = event => {
        event.persist()
        
        this.setState( prev => ({...prev, ...{
            [event.target.name] : event.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                {this.props.alert && <Alert text={this.props.alert}/>}
               <div className="mb-3">
                    <label htmlFor="title" className="form-label">Заголовок поста:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="title" 
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button type="submit" className="btn btn-success">Создать</button>
            </form>
            
        )
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert, hideAlert
}

const mapStateToProps = (state) => {
    return {
        alert: state.app.alert,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)