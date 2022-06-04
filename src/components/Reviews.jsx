import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <section className="  dark:bg-gray-900">
      <div className="container  px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-300 capitalize lg:text-4xl dark:text-white">
          Reviews
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 ">
          {reviews.map((review) => {
            return (
              <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500${review.author_details["avatar_path"]}` &&
                      `${review.author_details["avatar_path"]}`
                    }
                    alt="reviewer "
                  />
                  {console.log(
                    `https://image.tmdb.org/t/p/w500${
                      review.author_details["avatar_path"] ||
                      review.author_details["avatar_path"]
                    }`
                  )}
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  {review.author}
                </h1>

                <p
                  className="text-gray-500 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                ></p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
