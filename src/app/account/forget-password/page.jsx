
import Link from 'next/link'
import React from 'react'

export default function ForgetPassword() {
  return (
    <section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full p-10 bg-white rounded-lg shadow-md  md:mt-0 sm:max-w-md sm:p-8">
          <h1 class="mb-1 text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl">
              Forget your password?
          </h1>
          <p class="font-normal text-gray-500 text-center">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
          <form class="mt-4 space-y-6 lg:mt-5 md:space-y-5" action="#">
              <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
              </div>
              <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required=""/>
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-500">I accept the <a class="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                  </div>
              </div>
              <div>
              <Link href="/account/otp-verification">
              <button className='border-2 w-full py-2 px-5 bg-black hover:bg-white text-white duration-500 hover:text-black hover:shadow-[5px_5px_0px_0px_#666] border-black font-medium rounded-md'>Forget password</button>
              </Link>
              </div>
          </form>
      </div>
  </div>
</section>
  )
}
