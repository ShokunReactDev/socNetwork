import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Authorization.module.css'

const AuthProfile = (props) => {
    return(
        <>

        { props.isAuth ? props.login :
            <NavLink to='/profile' className={styles.login}>
                <button className='button'>{props.login}</button>
        </NavLink>}
        </>
    )
}

export default AuthProfile;