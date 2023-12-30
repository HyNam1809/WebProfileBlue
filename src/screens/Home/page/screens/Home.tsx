import React from 'react';
import style from '../../styles/index.module.scss'
import avatar_home from '../../../../../src/assets/images/avatar_home.jpg'
import styled from 'styled-components';
const Home = () => {
    return (
        <HomeStyled>
            <section className={style.section}>
                <div className={'container_home'}>
                    <div className={'container_title'}>
                        <div className={'home_image_text'}>
                            <div>
                                <img className={'home_image'} src={avatar_home} alt="avatar" />
                            </div>
                            <div className={'home_text'}>
                                <p>Hi, I'm a</p>
                                <h1>Creative</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={'home_text_designer'}>UI/UX DESIGNer</h1>
                    </div>
                </div>
            </section>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
.container_home {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 100px 100px;
    gap: 18px;
    margin-bottom: 120px;
    width: 100%;

    @media only screen and (min-width: 768px) and (max-width: 1180.98px) {
        padding: 100px 50px;
    }

    @media only screen and (max-width: 767.98px) {
        padding: 50px 0;
    }

    .home_image_text {
        display: flex;
        gap: 45px;
        align-items: end;
        justify-content: center;

        .home_image {
            border-radius: 500px 500px 0px 500px;
            width: 280px;
            height: 270px;
            @media only screen and (max-width: 767.98px) {
                width: 100px;
                height: 90px;
            }
        }

        .home_text {
            display: grid;
            gap: 28px;

            @media only screen and (max-width: 767.98px) {
                gap: 8px;
            }

            p {
                color: #000957;
                font-family: 'Helvetica';
                font-size: 16px;
                font-weight: 300;
                line-height: 140%;
            }

            h1 {
                color: #000957;
                text-align: center;
                font-family: "SVN-Minerva Modern";
                font-size: 165px;
                font-weight: 400;
                line-height: 169.793px;
                text-transform: uppercase;
                @media only screen and (max-width: 767.98px) {
                    font-size: 56px;
                    line-height: 1;
                }
                @media only screen and (min-width: 768px) and (max-width: 1180.98px) {
                    font-size: 140px;
                }
            }
        }
    }

    .home_text_designer {
        color: #000957;
        font-family: 'SVN-Minerva Modern';
        font-size: 165px;
        font-weight: 400;
        line-height: 169.165px;
        text-transform: uppercase;
        @media only screen and (min-width: 768px) and (max-width: 1180.98px) {
            font-size: 140px;
        }
        @media only screen and (max-width: 767.98px) {
            font-size: 56px;
            line-height: 0;
        }
    }
}
`;