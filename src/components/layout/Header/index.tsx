import React from 'react';
import style from './index.module.scss'

const Header = () => {
    return (
        <div className={style.container_header}>
            <div className={style.title}>BLuo nguyen</div>
            <div className={style.button_contact}>
                <button className={style.button}>Contact</button>
            </div>
        </div>
    );
};

export default Header;