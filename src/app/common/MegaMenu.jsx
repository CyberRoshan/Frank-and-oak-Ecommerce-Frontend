import React from "react";

export function ThisJustInMegaMenu({menuHover,setMenuHover}) {
  return (
    <div onMouseOver={()=>setMenuHover(1)} onMouseOut={()=>setMenuHover(0)} className={`${menuHover==1 ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-[28%_auto] gap-24 p-10">
        <div className="flex justify-between">
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
                Women&apos;s New Arrivals
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Jackets & Coats
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Blazers
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Dresses
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Accessories
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
                Men&apos;s New Arrivals
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Overshirts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Jackets & Coats
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Accessories
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_90187318-a3f1-492f-9377-b18381a175a6_600x.jpg?v=1724869721" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Women&apos;s New  Arrivals</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop-1_3ac58a1d-4386-40be-a9bf-9db422c8941d_600x.jpg?v=1724869727" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Men&apos;s New  Arrivals</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}

export function WomenMegaMenu({menuHover,setMenuHover}) {
  return (
    <div onMouseOver={()=>setMenuHover(2)} onMouseOut={()=>setMenuHover(0)} className={`${menuHover==2 ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-[38%_auto] gap-32 p-10">
        <div className="flex justify-between">
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
              Featured
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              New In
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Best Sellers
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Coming Soon
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            The Skyline
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            The Originals
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Workwear
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Gift Cards
            </li>
            <li className="text-[13px] text-[#ED2E00] font-semibold cursor-pointer hover:underline">
            Sale
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
              Clothing
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Overshirts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Jackets & Coats
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Accessories
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Jackets
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Skirts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Denim
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Skirts & Shorts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Matching Sets
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
              Accessories
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Overshirts
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <figure className="w-full relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Menu_tile_1cd466bb-b15c-4e83-9461-c8c32bb3211e_600x.jpg?v=1725974027" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Sweaters</h4>
          </figure>
          <figure className="w-full  relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-1_64579674-60e7-42d4-a59a-a13e6b96e7cd_600x.jpg?v=1725974022" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Jackets</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}

export function MenMegaMenu({menuHover,setMenuHover}) {
  return (
    <div onMouseOver={()=>setMenuHover(3)} onMouseOut={()=>setMenuHover(0)} className={`${menuHover==3 ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-[38%_auto] gap-32 p-10">
        <div className="flex justify-between">
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
              Featured
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              New In
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Best Sellers
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Coming Soon
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            The Skyline
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            The Originals
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Workwear
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Gift Cards
            </li>
            <li className="text-[13px] text-[#ED2E00] font-semibold cursor-pointer hover:underline">
            Sale
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
              Clothing
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Overshirts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Jackets & Coats
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Accessories
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Jackets
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Skirts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Denim
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Skirts & Shorts
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Matching Sets
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <h4 className="text-[15px] font-medium underline underline-offset-8 pb-3">
              Accessories
              </h4>
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
              Shop All
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Tops
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Bottoms
            </li>
            <li className="text-[13px] font-semibold cursor-pointer hover:underline">
            Overshirts
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <figure className="w-full relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-3_a8945a6a-262a-4161-a9a2-b5608646defd_600x.jpg?v=1725974015" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Sweaters</h4>
          </figure>
          <figure className="w-full  relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Menu_tile-2_03931173-c63e-46a0-9ac9-d2d8793a230b_600x.jpg?v=1725974013" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Jackets</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}

export function OurStoryMegaMenu({menuHover,setMenuHover}) {
  return (
    <div onMouseOver={()=>setMenuHover(4)} onMouseOut={()=>setMenuHover(0)} className={`${menuHover==4 ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 w-full bg-[#F9F9F9] absolute left-0 top-[100%]`}>
      <div className="grid grid-cols-1 p-10">
        <div className="grid grid-cols-6 gap-7">
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Who_we_are_-_NAV_600x.jpg?v=1712763767" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Who we are</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Tile_desktop_23_600x.jpg?v=1712763780" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Sustainable Practices</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Design_Philosophy_-_NAV_600x.jpg?v=1712763785" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Design Philosphy</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Fabric_Innovation_-_NAV_600x.jpg?v=1712763794" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Fabrics</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Circular_Process_-_NAV_600x.jpg?v=1712763798" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Circular Denim</h4>
          </figure>
          <figure className="w-full h-[280px] relative">
            <img className="h-full w-full cursor-pointer shadow-md object-cover object-center" src="https://www.frankandoak.com/cdn/shop/files/Partners_Factories_-_NAV_600x.jpg?v=1712763804" alt="" />
            <h4 className="text-[18px] font-medium text-white absolute bottom-5 left-5">Partners and Fabrics</h4>
          </figure>
        </div>
      </div>
    </div>
  );
}