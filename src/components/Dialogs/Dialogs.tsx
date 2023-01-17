import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemPropsType = {
    id: number
    name: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Georgy'} id={1}/>
                <DialogItem name={'Anna'} id={2}/>
                <DialogItem name={'Marina'} id={3}/>
                <DialogItem name={'Elizabeth'} id={4}/>
                <DialogItem name={'Work'} id={5}/>
                <DialogItem name={'Vlad'} id={6}/>
            </div>

            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How\'s it going'}/>
                <Message message={'DasWassUp'}/>


            </div>
        </div>
    )
}

export default Dialogs