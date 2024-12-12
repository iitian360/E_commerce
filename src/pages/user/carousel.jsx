import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import styles

const CarouselComp = () => {
  return (
    <div className='mb-3'>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000} // Change the interval to your desired time (in milliseconds)
        showThumbs={false} // Hides the thumbnail navigation
        showStatus={false} // Hides the status text
      >
        <div>
          <img src="https://via.placeholder.com/600x300?text=Occasion+1" alt="Occasion 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Occasion+2" alt="Occasion 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x300?text=Occasion+3" alt="Occasion 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComp;
