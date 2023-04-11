import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from './img-2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img-11.avif'
import img8 from './img8.jpg'



function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    const images = [
        { id: 1, src: img8 },
        { id: 2, src: img8 },
        { id: 3, src: img8 },
        { id: 4, src: img8 },
        { id: 5, src: img8 },
    ];




    return (



        <Slider  className="  mx-1" {...settings}>
            {images.map((image) => (
                <div key={image.id}>
                    <div className="flex justify-between items-center">
                      
                        <div className="w-full relative">
                           
                                <img src={image.src} alt="" className="w-full h-[450px]" />
                                {/* <button className="absolute bottom-8 left-24 font-bold  px-11 py-2 rounded-2xl bg-orange-700 text-white">Book Now</button> */}
                          
                        </div>
                    </div>
                </div>
            ))}
        </Slider>







    );
}

export default Banner;
