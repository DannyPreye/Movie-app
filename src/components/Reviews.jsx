import React from "react";

const Reviews = ({ content, name, date }) => {
  return (
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <p className="leading-relaxed mb-6">{content}</p>

          <img
            alt="testimonial"
            src="https://dummyimage.com/107x107"
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">{name}</span>
            <span className="text-gray-500 text-sm">{date}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
