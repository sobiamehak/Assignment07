"use client"
import { useState, useEffect } from "react";
import ServiceCard from "./clientCard";
// import { Progress } from "@radix-ui/react-progress";
import { BiLoaderAlt } from "react-icons/bi"; // Importing Spinner Icon



interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

function Page() {

  const [Loading, setLoading] = useState<boolean>(true);
  const [data, setdata] = useState<product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("unvalid data")
        }

        const result: product[] = await res.json();
        setdata(result)

      } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error loading products.</div>;
      }

      finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (Loading) {
   return <div className="flex justify-center items-center h-[100vh]">
    <div >
      <h1 className="text-xl font-sans font-bold text-blue-400 "> </h1>
      <BiLoaderAlt className="animate-spin text-4xl flex justify-center items-center" /> {/* Spinner Icon */}
    </div>
   </div> 
  } 
  return (
    <div className="grid grid-cols-1 shadow-lg  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {data.map((product) => (
        <div key={product.id} className="bg-white shadow-xl  rounded-lg overflow-hidden transform transition-transform hover:scale-100  duration-300">
          <ServiceCard data={product} key={product.id} />
        </div>
      ))}
    </div>
   
  );
   


}

export default Page;
