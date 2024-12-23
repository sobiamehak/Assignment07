import Link from 'next/link';


const Home = () => {
  return (
  <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 ">
      <header className="bg-green-800 w-full py-10 text-center ">
        <h1 className="text-4xl font-bold text-white">Data Fetching Assignment</h1>
      </header>

      <main className="flex flex-col items-center justify-center p-8">
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Client-Side Data Fetching</h2>
          <p className="text-gray-700">
            Client-side data fetching occurs in the browser, typically using libraries like Axios or Fetch API.
          </p>
        </section>

        <section className="mb-8 text-center">
<Link href={"/server-side"}><h2 className="text-2xl font-semibold mb-4">Server-Side Data Fetching</h2></Link>
        
      
          <p className="text-gray-700">
            Server-side data fetching happens on the server, allowing you to fetch data before rendering the page.
          </p>
        </section>

        <div className="flex space-x-4">
          <Link href="/client-side">
            <button className="px-4 py-2 bg-green-800 text-white rounded
             hover:bg-green-950 transition duration-300">
              Client Side Data
            </button>
          </Link>
          <Link href="/server-side">
            <button className="px-4 py-2 border-2 border-green-800 rounded
             hover:bg-gray-300 transition duration-300">
              Server Side Data
            </button>
          </Link>
        </div>
      </main>
   
    </div>
  
  </div>
  );
};

export default Home;
