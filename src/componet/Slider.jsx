import React, { useState, useEffect } from 'react';

export const Slider = () => {
  const images = [
    
    "https://www.adorama.com/images/cms/43698NPA-Canon-EOS-R1-R5II-Hero-Desktop-PO_(1)_85453.jpg",
    "https://www.adorama.com/images/cms/43698Back-To-School-2024-Hero-Desktop_02949.jpg",
    "https://www.adorama.com/images/cms/43698OM-1-MKII-83179-Hero-Desktop@1.25x_87905.jpg",
    "https://www.adorama.com/images/cms/43698NPA-DJI-SDR-Transmission-Hero-Desktop@2x_17640.jpg",
    "https://www.adorama.com/images/cms/43698Sony-Titu-Trade-MKT-82846-Hero-Desktop@1.25x_75610.jpg",
    "https://www.adorama.com/images/cms/43698Panasonic-BundleSale-Hero-Desktop_61944.jpg",
    "https://www.adorama.com/images/cms/43698Canon_Savings-MKT-82569-Hero-Desktop@1.25x@1.25x_08529.jpg",
    "https://www.adorama.com/images/cms/43698Expanding-EDU-MKT-81253-Hero-Desktop@1.25x_53980.jpg",
    "https://www.adorama.com/images/cms/43698ITA-Financing-MKT-82380-Hero-Desktop@1.25x_30451.jpg",
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <div id="image">
        <div>
        
          <img src={images[currentIndex]} alt=""  style={{height:"600px"}}/>
      
        </div>
      </div>

      <style jsx>{`
        #image {
          display: flex;
          justify-content: center;
          align-items: center;
          height:px;
        }
        img {
          max-height: 100%;
          max-width: 100%;
          
        }
        .arr {
          display: flex;
          justify-content: space-between;
          width: 200px;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

