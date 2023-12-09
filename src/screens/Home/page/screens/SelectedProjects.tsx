import React from 'react';
import style from '../../styles/index.module.scss';
import video from '../../../../assets/gif/video.gif';

const SelectedProjects = () => {

    return (
        <section className={style.section}>
            <div className={style.selected_projects_container} >
                <h1 className={style.selected_projects}>SElected</h1>
                <div className={style.selected_projects_item}>
                    <h1 className={style.selected_projects_text}>pr</h1>
                    <div className={style.selected_projects_video_container}>
                        <img className={style.selected_projects_video} src={video} alt="" />
                    </div>
                    <h1 className={style.selected_projects_text}>jects</h1>
                </div>
            </div>
        </section>
    );
};

export default SelectedProjects;