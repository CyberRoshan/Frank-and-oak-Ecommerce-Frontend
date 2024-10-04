"use client"
import React from "react";
import Banner from "./HomeComponents/Banner";
import FeaturedCategories from "./HomeComponents/FeaturedCategories";
import ThisJustIn from "./HomeComponents/ThisJustIn";
import ProductReview from "./HomeComponents/ProductReview";
import BetterLiving from "./HomeComponents/BetterLiving";
import TextSlider from "./common/TextSlider";


export default function Home() {
  return (
    <>
    {/* <TextSlider/> */}
    <Banner/>
    <FeaturedCategories/>
    <ThisJustIn/>
    <ProductReview/>
    <BetterLiving/>
    </>
  );
}
