import Image from 'next/image';
import React from 'react';

interface Ibook {
  id: number,
  title: string,
  price: number,
  description: string 
  category: string,
  image: string,
  rating: { rate:number, count:number },
}

interface cardProp {
  data:Ibook
}

const ServiceCard = ({data}:cardProp) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">

      <Image
       className="w-full h-48 object-cover"
        src={data.image}
        alt={data.title}
        width={448}
        height={192}
        />

      <div className="px-6 py-5">

        <div className="font-bold text-xl mb-2">{data.title.slice(0,10)}</div>

        <p className="text-gray-700 text-base">{data.description.slice(0,25)}</p>

      </div>

      <div className="px-6 py-4 flex items-center gap-3 justify-between">
        <span className="text-xl font-bold text-green-600">Rs:{data.price}</span>
        

        <div className="flex items-center text-pink-500">
             {data.rating.rate} ({data.rating.count} reviews)
          </div>

      </div>
     <div className='flex justify-end p-5'>
     <button className="bg-green-800  hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
          Book Now
        </button>
     </div>

    </div>
  );
};

export default ServiceCard;
