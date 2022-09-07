import React from 'react';
import styles from './Login.module.css'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
    return (
        <form>
            <div className={styles.username}>
                <label>Username or Email Address</label>
                <Field component={"input"} name={'login'} type="text" />
            </div>
            <div className={styles.password}>
                <label>Password</label>
                <Field component={"input"} name={'password'} type="password" />
            </div>
            <div className={styles.buttonLogin}>
                <span>Log in</span>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default LoginReduxForm;