'use client';

import { useRef, useEffect } from 'react';
import Swiper from 'swiper/bundle';
import Image from './Image';

const Slider = ({
  blobs,
  id,
  actualSwiperRef,
  callback = () => {},
  endpoint,
}) => {
  const swiperContainerRef = useRef(null);
  const swiperPaginationRef = useRef(null);
  const swiperNextRef = useRef(null);
  const swiperPrevRef = useRef(null);

  useEffect(() => {
    if (
      swiperContainerRef.current &&
      swiperNextRef.current &&
      swiperPrevRef.current &&
      swiperPaginationRef.current
    ) {
      actualSwiperRef.current = new Swiper(swiperContainerRef.current, {
        spaceBetween: 30,
        slidesPerView: 1,
        autoplay: false,
        grabCursor: true,
        navigation: {
          nextEl: swiperNextRef.current,
          prevEl: swiperPrevRef.current,
        },
        pagination: {
          el: swiperPaginationRef.current,
          clickable: true,
        },
        effect: 'coverflow',
        autoplay: true,

        on: {
          slideChange: function () {
            callback(this.realIndex);
          },
        },
      });

      return () => {
        if (actualSwiperRef.current) {
          actualSwiperRef.current.destroy(true, true); // Ensure the Swiper instance is properly destroyed
          actualSwiperRef.current = null;
        }
      };
    }
  }, [blobs]);

  return (
    <div
      ref={swiperContainerRef}
      className="swiper-container"
      style={{ userSelect: 'none', width: '100%' }}
    >
      <div className="swiper-wrapper">
        {blobs.map((blob, i) => (
          <Image
            src={`${endpoint}/${blob?.fileName}`}
            key={i + blob}
            slider={true}
            img={blob}
          />
        ))}
      </div>
      <div ref={swiperNextRef} className="swiper-button-next"></div>
      <div ref={swiperPrevRef} className="swiper-button-prev"></div>
      <div
        ref={swiperPaginationRef}
        style={{ width: `${blobs.length * 20}px` }}
        className="swiper-pagination"
      ></div>
    </div>
  );
};

export default Slider;
