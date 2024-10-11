import BreadCrumb from "@/app/common/BreadCrumb";
import Header from "@/app/common/Header";
import React from "react";
import { AccountSideBar } from "../account/page";
import { Link } from "lucide-react";

export default function Order() {
  return (
    <>
      <section className="pt-28 px-[30px]">
        <BreadCrumb
          prop1={"Home"}
          prop2={"My Account"}
          prop3={"Orders & returns"}
        />
        <div className="grid lg:grid-cols-[20%_auto] grid-cols-1 gap-10">
          <AccountSideBar />
          <div>
            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h3 className="md:text-[34px] text-[28px] font-medium">
              Orders & returns
            </h3>
            <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
          <div>
            <label for="order-type" className="sr-only mb-2 block text-sm font-medium text-gray-900 ">Select order type</label>
            <select id="order-type" className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
              <option selected>All orders</option>
              <option value="pre-order">Pre-order</option>
              <option value="transit">In transit</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <span className="inline-block text-gray-500"> from </span>

          <div>
            <label for="duration" className="sr-only mb-2 block text-sm font-medium text-gray-900 ">Select duration</label>
            <select id="duration" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500">
              <option selected>this week</option>
              <option value="this month">this month</option>
              <option value="last 3 months">the last 3 months</option>
              <option value="lats 6 months">the last 6 months</option>
              <option value="this year">this year</option>
            </select>
          </div>
        </div>
            </div>
            <div className="bg-white antialiased ">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mx-auto max-w-5xl">
      <div className="mt-6 flow-root sm:mt-8">
        <div className="divide-y divide-gray-200 space-y-5">
          <OrderCard/>
          <OrderCard/>
          <OrderCard/>
          <OrderCard/>
        </div>
      </div>

    
    </div>
  </div>
</div>
            {/* For No Orders (Empty History) */}
            {/* <div className="pt-5">
              <div className="text-sm font-medium pb-5">History Empty</div>
              <button className="border border-black hover:shadow-Btn-shadow py-2 px-16 text-[13px] font-medium">
                Shop Now
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}


function OrderCard() {
  return (
    <div className="flex flex-wrap items-center gap-y-4 py-6 border rounded-xl shadow-md px-5">
            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
              <dt className="text-base font-medium text-gray-500 ">Order ID:</dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 ">
                <a href="#" className="hover:underline">#FWB159873546</a>
              </dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
              <dt className="text-base font-medium text-gray-500 ">Date:</dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 ">04.06.2023</dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
              <dt className="text-base font-medium text-gray-500 ">Price:</dt>
              <dd className="mt-1.5 text-base font-semibold text-gray-900 ">$90</dd>
            </dl>

            <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
              <dt className="text-base font-medium text-gray-500 ">Status:</dt>
              <Confirmed/>
              {/* <Cancelled/> */}
              {/* <InTransit/> */}
            </dl>

            <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
              <button type="button" className="w-full rounded-lg bg-black px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  lg:w-auto">Order again</button>
              <button className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-[#EBECEE] px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100  lg:w-auto">View details</button>
            </div>
          </div>
  )
}

function Confirmed() {
  return (
    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
  <svg
    className="me-1 h-3 w-3"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M5 11.917 9.724 16.5 19 7.5"
    />
  </svg>
  Confirmed
</dd>
  )
}


function Cancelled() {
  return (
    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                </svg>
                Cancelled
              </dd>
  )
}

function InTransit() {
  return (
    <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                <svg className="me-1 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                In transit
              </dd>
  )
}
