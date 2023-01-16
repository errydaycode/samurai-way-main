import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={'/1'}>Georgii</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/2'}>Anna</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/3'}>Marina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/4'}>Elizaveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/5'}>Work</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/6'}>Vlad</NavLink>
                </div>

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