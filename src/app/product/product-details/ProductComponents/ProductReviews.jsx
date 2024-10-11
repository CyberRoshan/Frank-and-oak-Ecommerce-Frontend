import React from "react";
import { MdOutlineStar, MdStarHalf } from "react-icons/md";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";

export default function ProductReviews() {
  return (
    <section className="bg-[#F9F9F9] md:py-[100px] sm:py-[50px] py-[20px] px-10 md:my-10 my-5">
      <h3 className="md:text-[32px] text-[26px] font-medium md:text-start text-center">Reviews</h3>
      <div>
        <h4 className="flex pt-10 pb-20 items-center gap-5 justify-center md:text-[32px] sm:text-[26px] text-[18px] font-medium">
          4.7{" "}
          <div className="flex">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdStarHalf />
          </div>{" "}
          <span className="text-[18px] font-medium text-[#666]">
            95 reviews
          </span>
        </h4>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </section>
  );
}

function Review() {
  return (
    <div className="py-10 border-t border-customBorder space-y-4">
      <div className="text-sm font-normal">
        Ada L. <sup className="text-[10px] font-medium">Verified Buyer</sup>
      </div>
      <div className="flex">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdStarHalf />
          </div>
      <div>
        <h5 className="text-[18px] font-bold">Great Jacket</h5>
        <article className="text-sm font-medium py-3">
          This is such a great versatile coat. Its perfect for 0-10 degree
          weather. It has a lovely stitched pattern and also reversible. The
          colour is a deep dark forest green. Quite oversized, but great for
          sweaters underneath. Also love the double sided zipper - super
          convenient to have - especially when going from walking to
          driving/siRead more about review stating Great jacket tting
        </article>
      </div>
      <div className="w-full flex justify-end pt-5" >
        <div className="text-sm font-semibold text-[#666] flex items-center gap-5">
          Was this review helpful?{" "}
          <div className="flex items-center gap-2">
            <IoMdThumbsUp size={20} color="black" /> 0 
            <IoMdThumbsDown size={20} color="black" /> 0{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
