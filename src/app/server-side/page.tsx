
import React from "react";

// Define the interface for Book
interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

// Fetch books from the API
 const GetBooks = async ()=> {
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const data:Book[] = await res.json();
  console.log(data)



  return (
    <div className="min-h-screen bg-slate-300  p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Book List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((book,index) => (
          <div
            key={index}
            className="  bg-slate-100 rounded-xl p-6 border border-gray-200 shadow-lg shadow-gray-400"
          >
            <h2 className="text-xl font-semibold mb-2">{book.name}</h2>
            <p className="text-gray-600">Type: {book.type}</p>
            <p
              className={`mt-2 font-medium ${
                book.available ? "text-green-800" : "text-red-600"
              }`}
            >
              {book.available ? "Available" : "Not Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  )

}


export default GetBooks

