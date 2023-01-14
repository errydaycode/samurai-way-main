import React from "react";
import s from './Post.module.css'
import {infoType} from "../MyPosts";


type PostPropsType = {
    message: infoType

}



const Post = (props: PostPropsType ) => {
    return (
        <div className={s.item}>
            <img src="https://virtus-img.cdnvideo.ru/images/as-is/plain/c9/c9b286f36b951b37710608c16c6f0381.jpg@jpg"
                 alt=""/>
            {props.message.message}
            <div>
                <span>like</span>
                {props.message.likesCount}
            </div>

        </div>
    )
}

export default Post