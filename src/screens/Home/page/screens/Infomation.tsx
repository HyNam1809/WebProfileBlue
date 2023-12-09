import React from 'react';
import style from '../../styles/index.module.scss'
const Infomation = () => {
    return (
        <section className={style.section}>
            <div className={style.container_information}>
                <div className={style.content}>
                    <p>I am dedicated to crafting user interfaces that are both practical & visually appealing.
                        <br />
                        I firmly believe that good design must be intuitive, easy to understand,
                        & aesthetically pleasing.</p>
                </div>
                <div className={style.information_img}>
                    <img src="https://png.pngtree.com/png-vector/20200622/ourmid/pngtree-carrot-cute-character-logo-icon-png-image_2260896.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Infomation;