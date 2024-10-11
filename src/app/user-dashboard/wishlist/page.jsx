import BreadCrumb from "@/app/common/BreadCrumb";
import Header from "@/app/common/Header";
import React from "react";
import { AccountSideBar } from "../account/page";
import { Card } from "@/app/common/Card";


export default function Wishlist() {
  return (
    <>
      <section className="pt-28 px-[30px]">
        <BreadCrumb
          prop1={"Home"}
          prop2={"My Account"}
          prop3={"Wishlist"}
        />
        <div className="grid lg:grid-cols-[20%_auto] grid-cols-1 gap-10">
          <AccountSideBar />
          <div>
          <div className="pb-10 border-b border-customBorder">
            <h3 className="md:text-[34px] text-[28px] font-medium">
            Wishlist
            </h3>
            <div className="py-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
          <div className="md:pt-10 pt-5">
            <h3 className="md:text-[32px] text-[20px] font-medium">
            Picked Just For You
            </h3>
            <div className="md:py-10 py-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
