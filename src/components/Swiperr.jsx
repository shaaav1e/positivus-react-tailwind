import React, { useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Icons
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlinePentagon } from "react-icons/md";
// Array of testimonials data
const testimonialsData = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "Michael Chen",
    position: "Marketing Director, InnovateLab",
  },
  {
    id: 3,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "David Thompson",
    position: "Product Manager, DigitalFlow",
  },
  {
    id: 4,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "Robert Kim",
    position: "Operations Manager, ScaleUp Inc",
  },
];

const Swiperr = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="mt-20 bg-secondary rounded-3xl">
      {" "}
      <Swiper
        ref={swiperRef}
        centeredSlides={false}
        navigation={false}
        pagination={false}
        mousewheel={false}
        keyboard={false}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,
            centeredSlides: true,
          },
        }}
      >
        {" "}
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="px-4 lg:px-0 py-18">
              {" "}
              <div
                className=" border-1 border-primary rounded-4xl relative mb-8 
               flex items-center px-10 py-8 h-fit overflow-x-hidden"
              >
                <p className="text-white text-left font-light text-sm lg:text-base leading-relaxed  overflow-hidden">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <h4 className="text-primary text-lg font-semibold">
                  {testimonial.author}
                </h4>
                <p className="text-white font-medium">{testimonial.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>{" "}
      {/* Custom Navigation and Pagination at Bottom */}
      <div className="custom-nav-container">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="text-white hover:text-primary transition-colors duration-300 p-2"
          aria-label="Previous slide"
        >
          <FaArrowLeft size={32} />
        </button>

        {/* Pentagon Pagination */}
        <div className="flex items-center gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? "text-primary scale-110"
                  : "text-white opacity-50 hover:opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <MdOutlinePentagon size={16} />
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="text-white hover:text-primary transition-colors duration-300 p-2"
          aria-label="Next slide"
        >
          <FaArrowRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Swiperr;
