import React from 'react';
import style from './index.module.scss'
import IconBehance from '../../../assets/svg/IconBehance';
import IconLinkedin from '../../../assets/svg/IconLinkedin';

const Footer = () => {
    return (
        <div className={style.container_footer}>
            <div>
                <div className={style.title_container}>
                    <div>
                        <p className={style.title_item}>
                            To new
                            <br />
                            collaborations
                        </p>
                    </div>
                    <div>
                        <h1 className={style.title_logo}>send me an email</h1>
                    </div>
                </div>
                <div className={style.title_container}>
                    <div>
                        <p className={style.title_item}>
                            or call me at
                        </p>
                    </div>
                    <div>
                        <h1 className={style.title_phone}>+84 789 567 486</h1>
                    </div>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.title_container}>
                    <div>
                        <p className={style.title_item}>
                            @2023 Bluo Nguyen
                        </p>
                    </div>
                    <div className={style.title_icon}>
                        <div className={style.title_icon_item}>
                            <IconBehance/>
                            <p>www.behance.net/bluonguyen</p>
                        </div>
                        <div className={style.title_icon_item}>
                            <IconLinkedin/>
                            <p>@tuyetnhan0107</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;