import React from 'react'

export default function OtpVerification() {
  return (
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
  <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
      <div class="flex flex-col items-center justify-center text-center space-y-2">
        <div class="font-semibold text-3xl">
          <p>Email Verification</p>
        </div>
        <div class="flex flex-row text-sm font-medium text-gray-400">
          <p>We have sent a code to your email ba**@dipainhouse.com</p>
        </div>
      </div>

      <div>
        <form action="" method="post">
          <div class="flex flex-col space-y-14">
            <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div class="w-16 h-16">
                <input required class="w-full h-full flex flex-col items-center justify-center bg-[#F1F5F9] text-center px-5 outline-none rounded-lg shadow-sm font-bold border-gray-200 text-lg  focus:bg-gray-50 focus:ring-1 ring-blue-700" max={1} type="tel" name="" id=""/>
              </div>
              <div class="w-16 h-16 ">
                <input required class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg shadow-sm font-bold border-gray-200 text-lg bg-[#F1F5F9] focus:bg-gray-50 focus:ring-1 ring-blue-700" max={1} type="tel" name="" id=""/>
              </div>
              <div class="w-16 h-16 ">
                <input required class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg shadow-sm font-bold border-gray-200 text-lg bg-[#F1F5F9] focus:bg-gray-50 focus:ring-1 ring-blue-700" max={1} type="tel" name="" id=""/>
              </div>
              <div class="w-16 h-16 ">
                <input required class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-lg shadow-sm font-bold border-gray-200 text-lg bg-[#F1F5F9] focus:bg-gray-50 focus:ring-1 ring-blue-700" max={1} type="tel" name="" id=""/>
              </div>
            </div>

            <div class="flex flex-col space-y-5">
              <div>
                <button className='border-2 w-full py-2.5 px-16 bg-black hover:bg-white text-white duration-500 hover:text-black hover:shadow-[5px_5px_0px_0px_#666] border-black font-medium rounded-md'>Verify Account</button>
              </div>

              <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <div class="flex hover:underline flex-row items-center text-blue-600 cursor-pointer">Resend OTP</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}
