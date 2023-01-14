import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

export type infoType ={
    message: string
    likesCount: number
}


const MyPosts = () => {



    const info: infoType = {
        message: 'Hi, how are you?',
        likesCount: 15
    }

    const info2: infoType = {
        message: 'Not cool really, tired to learn react',
        likesCount: 20
    }

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>

            </div>
            <div className={s.posts}>
                <Post message={info}/>
                <Post message={info2}/>
            </div>
        </div>
    )
}

export default MyPosts