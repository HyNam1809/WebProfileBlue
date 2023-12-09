import React from 'react';
import style from '../../styles/index.module.scss'
import heart from '../../../../assets/images/heart.png';

const Featured = () => {

    return (
        <div style={{ width: '100%' }}>
            <div className={style.container_featured}>
                <div className={style.run}>
                    <p>How do I Work?</p>
                    <img src={heart} alt="" />
                </div>
                <div className={style.run}>
                    <p>How do I Work?</p>
                    <img src={heart} alt="" />
                </div>
                <div className={style.run}>
                    <p>How do I Work?</p>
                    <img src={heart} alt="" />
                </div>
                <div className={style.run}>
                    <p>How do I Work?</p>
                    <img src={heart} alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default Featured;