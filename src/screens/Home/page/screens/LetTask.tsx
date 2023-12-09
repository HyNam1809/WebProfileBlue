import React from 'react';
import style from '../../styles/index.module.scss'
import { dataContent } from '../../../../assets/data/data';
const LetTask = () => {

    return (
        <section className={style.section}>
            <div className={style.container_let_task}>
                <div className={style.content_container}></div>
                <div className={style.content_container}>
                    {dataContent.map((item, index) => {
                        const isNotLastItem = index !== dataContent.length - 1;
                        return (
                            <div className={`${style.content_item} ${isNotLastItem ? style.border_bottom : ''}`} key={index}>
                                <p className={style.content_number}>({item.number})</p>
                                <div className={style.content_text_container}>
                                    <h3 className={style.content_text_title}>{item.title}</h3>
                                    <p className={style.content_text}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>
    );
};

export default LetTask;