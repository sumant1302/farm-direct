import React from "react";
import ImageSlider from "react-simple-image-slider";
import SimpleImageSlider from "react-simple-image-slider";
const Home = () => {
    const images = [
        {
                url: "https://www.shutterstock.com/image-vector/farmer-man-hold-tablet-online-260nw-461049904.jpg"
        },
        {
            url: "https://appinventiv.com/wp-content/uploads/sites/1/2021/09/Build-An-Organic-E-commerce-Platform.png"
    },
    ];


    return (
        <div className="div-home">
                {/* <div className="slider-image">
                    <img src={process.env.PUBLIC_URL + "/images/sliderImg1.png"} alt="slider-image-1" />
                </div> */}
                <SimpleImageSlider
                    width={'100%'}
                    height={400}
                    images={images}
                    showNavs={true}
                    showBullets={true}
                    autoPlay={true} 
                    autoPlayDelay={5}
            />  

        </div>

    )

}

export default Home;