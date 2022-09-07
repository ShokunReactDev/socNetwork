import React from 'react';
import Profile_body from './Profile_body/Profile_body';
import Profile_header from './Profile_header/Profile_header';
import styles from './Profile.module.css'
import { Navigate } from 'react-router-dom';

const Profile = (props) => {

    if(props.isAuth === false) return <Navigate to={'/login/'} />

    return (
        <div>
            <Profile_header 
            userProfile={props.userProfile}/>
            <div className='container'>
                <Profile_body  />
            </div>
        </div>

    )
}

export default Profile;