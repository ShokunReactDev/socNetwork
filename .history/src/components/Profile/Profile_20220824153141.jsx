import React from 'react';
import Profile_body from './Profile_body/Profile_body';
import Profile_header from './Profile_header/Profile_header';
import styles from './Profile.module.css'

const Profile = (props) => {

    return (
        <div>
            <Profile_header 
            userProfile={props.userProfile}/>
            <div className='container'>
                <Profile_body  
                userProfile={props.userProfile} />
            </div>
        </div>

    )
}

export default Profile;