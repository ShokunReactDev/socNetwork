import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Authorization.module.css'

const AuthProfile = (props) => {
    return(
        <>
            <NavLink >
                {props.login}
        </NavLink>
        </>
    )
}

export default AuthProfile;