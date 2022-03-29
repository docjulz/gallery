import React, { useState } from 'react';
import './gallery.css';

import Img1 from './img/img-1.jpg'
import Img2 from './img/img-2.jpg';
import Img3 from './img/img-3.jpg';
import Img4 from './img/img-4.jpg';
import Img5 from './img/img-5.jpg';


const Gallery = () => {

    let data = [
        {
            id: 1,
            imgSrc: Img1,
            alt: "photo-1",
        },
        {
            id: 2,
            imgSrc: Img2,
            alt: "photo-2",
        },
        {
            id: 3,
            imgSrc: Img3,
            alt: "photo-3",
        },
        {
            id: 4,
            imgSrc: Img4,
            alt: "photo-4",
        },
        {
            id: 5,
            imgSrc: Img5,
            alt: "photo-5",
        }
    ]
    
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] =useState('');
    const getImg = (imgSrc) => {
        console.warn(imgSrc);
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
        <div className={model ? 'model open' : 'model'}>
            <img src={tempImgSrc} />

        </div>
        <div className="gallery">
            {data.map((item, index) => {
                return (
                    <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                        <img src={item.imgSrc} alt={item.alt} style={{width: '100%'}} />
                    </div>
                )
            })}
        </div>

        </>
    );
}

export default Gallery;
