import React from 'react';
import styles from './../MyPosts.module.css'
import { Field, reduxForm } from 'redux-form'

const NewPostForm = (props) => {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <span className={styles.namePost}>New post</span>
            <div className={styles.newPost}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={styles.newPostText} />
                <button className='button' onClick={addPost}>Add post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

export default NewPostReduxForm;