import React from 'react';
import style from '../../styles/index.module.scss'
import avatar from '../../../../../src/assets/images/avatar.jpg'
const Home = () => {
    return (
        <section className={style.section}>
            <div className={style.container_home}>
                <div className={style.container_title}>
                    <div className={style.home_image_text}>
                        <div>
                            <img className={style.home_image} src={avatar} alt="avatar" />
                        </div>
                        <div className={style.home_text}>
                            <p>Hi, I'm a</p>
                            <h1>Creative</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={style.home_text_designer}>UI/UX DESIGNer</h1>
                </div>
            </div>
        </section>
    );
};

export default Home;