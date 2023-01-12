import React from "react";
import './Profile.css'

const Profile = () => {

    return (
    <div className='content'>
        <div>
            <img src="https://www.theirm.org/media/7515/rl-website-header-banner-1200x270-blank.jpg"
                 alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile