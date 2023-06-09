import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import pics1 from '../../../../public/assets/Banner_slider/banner1.jpg'
import pics2 from '../../../../public/assets/Banner_slider/banner2.jpg'
import pics3 from '../../../../public/assets/Banner_slider/banner3.jpg'
import pics4 from '../../../../public/assets/Banner_slider/banner4.jpg'





const Slider = () => {
    return (
        <Carousel>
                <div>
                    <img src={pics1} />
                </div>
                <div>
                    <img src={pics2} />
                </div>
                <div>
                    <img src={pics3} />
                </div>
                <div>
                    <img src={pics4} />
                </div>
            </Carousel>
    );
};

export default Slider;