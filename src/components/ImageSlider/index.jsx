import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'
import {photos, settingsMain, settingsThumbs} from './utils';


const ImageSlider = (props) => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    }, [slider1, slider2]);

    return(
        <div style={{textAlign:"center"}}>
             <div className="slider-wrapper">
                <Slider 
                {...settingsMain}
                asNavFor={nav2}
                ref={slider => (setSlider1(slider))}
                >
                    {photos.map(photo => 
                        <div className="slick-slide-main" key={photo.id}>
                            <img className="slick-slide-image" src={photo.image} />
                        </div>
                    )}
                </Slider>

                <div className="thumbnail-slider-wrap">
                <Slider
                    {...settingsThumbs}
                    asNavFor={nav1}
                    ref={slider => (setSlider2(slider))}
                >
                    {photos.map((photo) =>
                    <div className="slick-slide"  key={photo.id}>
                        <span style={{height: 180, width: 180}}>
                            <img className="slick-slide-image-thumb" src={photo.image} />
                        </span>
                    </div>
                )}
                </Slider>
                </div>
            </div>
        </div>
    )
}

export default ImageSlider