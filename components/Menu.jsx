import React from 'react';
import Image from 'next/image';

const Menu = () => {
  return (
    <div className="p-6 bg-gray-900 text-white font-serif py-18">
      <h1 className="text-3xl mb-2 text-center">RESTAURANT MENU</h1>
      <hr className="w-24 h-1.5 mx-auto bg-gray-100 border-0 rounded md:my-1 dark:bg-[#FFF5FF]" />
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl mb-4 text-center">Desserts</h2>
          <div className="mb-4 flex bg-white rounded-xl">
            <Image src="/assets/banofee.jpg" alt="Banoffee trifle" width={160} height={160} className="w-40 h-40 object-cover my-4 mx-4" />
            <div className="flex flex-col justify-center text-black">
              <p className="text-lg">Banoffee trifle</p>
              <p className="text-lg">Banoffee trifle - Amuses bouche</p>
              <p className="text-lg text-end pr-6 mt-12">9.50AED</p>
            </div>
          </div>
          <div className="mb-4 flex bg-white rounded-xl">
            <Image src="/assets/mousse.jpg" alt="Mousse au chocolat" width={160} height={160} className="w-40 h-40 object-cover my-4 mx-4" />
            <div className="flex flex-col justify-center px-2 text-black">
              <p className="text-lg">Mousse au chocolat</p>
              <p className="text-lg">Three delicious scoops of ice cream served with any two of these toppings.</p>
              <p className="text-lg text-end pr-2 mt-1">8.50AED</p>
            </div>
          </div>
          <div className="mb-4 flex bg-white rounded-xl">
            <Image src="/assets/ice.jpg" alt="Ice Cream" width={160} height={160} className="w-40 h-40 object-cover my-4 mx-3" />
            <div className="flex flex-col justify-center text-black">
              <p className="text-lg">Ice Cream</p>
              <p className="text-lg">Ice Cream - 3 scoops</p>
              <p className="text-lg text-end pr-2 mt-20">4.95AED</p>
            </div>
          </div>
          <div className="mb-4 flex bg-white text-black rounded-xl">
            <Image src="/assets/yagourt.jpg" alt="Frozen Yogurt" width={160} height={160} className="w-40 h-40 object-cover my-4 mx-4" />
            <div className="flex flex-col justify-center">
              <p className="text-lg">Frozen Yogurt</p>
              <p className="text-lg">Fresh strawberries soaked in elderflower & lemon juice.</p>
              <p className="text-lg text-end pr-6 mt-6">5.60AED</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl mb-4 text-center">Hot Drinks</h2>
          <div className="mb-4 flex bg-white text-black rounded-xl">
            <Image src="/assets/cafe.jpg" alt="Café crème" width={160} height={160} className="w-40 h-40 object-cover my-4 mx-4" />
            <div className="flex flex-col justify-center">
              <p className="text-lg">Café crème</p>
              <p className="text-lg">Crème café façon liégeois - Amuses bouche</p>
              <p className="text-lg text-end pr-6 mt-12">13.50AED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
