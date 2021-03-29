// import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import interp1 from '../../images/interp1.png'
import interp2 from '../../images/interp2.png'
import interp3 from '../../images/interp3.png'
import interp4 from '../../images/interp4.png'
import interp5 from '../../images/interp5.png'
import interp6 from '../../images/interp6.png'
import interp7 from '../../images/interp7.png'

export const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  };

export const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
    nextArrow: (
      <div>
        <div className="next-slick-arrow"><i className="ei ei-icon_arrow_triangle-right icon"/></div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"><i className="ei ei-icon_arrow_triangle-left icon"/></div>
      </div>
    ),
    responsive: [
    {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 1,
         infinite: true
       }
    },
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
        }
    },
    {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1,
         initialSlide: 2
       }
    },
    {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1
       }
    }
  ]
};

export const photos = [
    {
        id: 1,
        image: interp2,
        alt: '',
    },
    {
        id: 2,
        image: interp1,
        alt: '',
    },
    {
        id: 3,
        image: interp3,
        alt: '',
    },
    {
        id: 4,
        image: interp4,
        alt: '',
    },
    {
        id: 5,
        image: interp5,
        alt: '',
    },
    {
        id: 6,
        image: interp6,
        alt: '',
    },
    {
        id: 7,
        image: interp7,
        alt: '',
    },
]