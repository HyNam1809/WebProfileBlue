import React from 'react';
import { dataHomePage } from '../../../assets/data/data';

const HomePage = () => {
    return (
        <>
            {dataHomePage.map((item, index) => {
                return (
                    <div key={index}>
                        {item.page}
                    </div>
                )
            })}
        </>
    );
};

export default HomePage;