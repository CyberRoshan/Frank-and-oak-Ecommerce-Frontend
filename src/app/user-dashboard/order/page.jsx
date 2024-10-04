import BreadCrumb from "@/app/common/BreadCrumb";
import Header from "@/app/common/Header";
import React from "react";
import { AccountSideBar } from "../account/page";

export default function Order() {
  return (
    <>
      <section className="pt-[60px] px-[30px]">
        <BreadCrumb
          prop1={"Home"}
          prop2={"My Account"}
          prop3={"Orders & returns"}
        />
        <div className="grid lg:grid-cols-[20%_auto] grid-cols-1 gap-10">
          <AccountSideBar />
          <div>
            <h3 className="md:text-[34px] text-[28px] font-medium">
              Orders & returns
            </h3>
            <div className="pt-5">
              <div className="text-sm font-medium pb-5">History Empty</div>
              <button className="border border-black hover:shadow-Btn-shadow py-2 px-16 text-[13px] font-medium">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
