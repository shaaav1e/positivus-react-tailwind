import React from "react";
import notion from "/notion.png";
import zoom from "/zoom.png";
import hubspot from "/hubspot.png";
import amazon from "/amazon.png";
const images = [
  {
    src: notion,
    alt: "Notion",
  },
  {
    src: zoom,
    alt: "Zoom",
  },
  {
    src: hubspot,
    alt: "HubSpot",
  },
  {
    src: amazon,
    alt: "Amazon",
  },
  {
    src: zoom,
    alt: "Zoom",
  },
  {
    src: hubspot,
    alt: "HubSpot",
  },
];
const Sponsors = () => {
  return (
    <div className="container mt-8 lg:mt-4">
      {/* Desktop: Single row with animation */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex animate-scroll-left gap-24 items-center">
          {/* First set of images */}
          {images.map((image, index) => (
            <img
              key={`first-${index}`}
              src={image.src}
              alt={image.alt}
              className="w-auto grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <img
              key={`second-${index}`}
              src={image.src}
              alt={image.alt}
              className="w-auto grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Mobile: Horizontal scrolling animation */}
      <div className="md:hidden overflow-hidden">
        <div className="flex animate-scroll-left gap-8 items-center">
          {/* First set of images */}
          {images.map((image, index) => (
            <img
              key={`mobile-first-${index}`}
              src={image.src}
              alt={image.alt}
              className="h-8 w-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((image, index) => (
            <img
              key={`mobile-second-${index}`}
              src={image.src}
              alt={image.alt}
              className="h-8 w-20 object-contain grayscale hover:grayscale-0 transition-all duration-300 flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
