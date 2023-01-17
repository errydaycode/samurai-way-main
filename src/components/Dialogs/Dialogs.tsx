import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props: any) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={'Georgy'} id={'1'}/>
                <DialogItem name={'Anna'} id={'2'}/>
                <DialogItem name={'Marina'} id={'3'}/>
                <DialogItem name={'Elizabeth'} id={'4'}/>
                <DialogItem name={'Work'} id={'5'}/>
                <DialogItem name={'Vlad'} id={'6'}/>
            </div>

            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How's it going?</div>
                <div className={s.message}>Yo</div>

            </div>
        </div>
    )
}

export default Dialogs