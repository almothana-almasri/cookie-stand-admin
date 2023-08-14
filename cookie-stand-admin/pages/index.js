import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <header className="bg-green-400 p-4">
        <h1 className="text-3xl text-black font-bold">Cookie Stand Admin</h1>
      </header>
      <main className="container mx-auto p-4 flex-grow">
          <div className="bg-green-300 rounded-lg p-8 flex flex-col items-center">
            <h2 className="text-2xl text-black font-semibold mb-4">Create Cookie Stand</h2>
          <div className="flex items-center mb-4">
            <p className="text-black mr-4">Location</p>
            <input className="w-100 h-8 border rounded" type="text" />
          </div>
          <div className="grid grid-cols-6 gap-4 mb-4">
            <div>
              <p className="text-black mb-2">Minimum Customers</p>
              <p className="text-black mb-2">per Hour</p>
              <input className="w-20 h-8 border rounded" type="text" />
            </div>
            <div>
              <p className="text-black mb-2">Maximum Customers</p>
              <p className="text-black mb-2">per Hour</p>
              <input className="w-20 h-8 border rounded" type="text" />
            </div>
            <div>
              <p className="text-black mb-2">Average Cookies per</p>
              <p className="text-black mb-2">Sale</p>
              <input className="w-20 h-8 border rounded" type="text" />
            </div>
            <div className="col-span-2">
              <button className="bg-green-700 text-white w-full h-20 rounded">Create</button>
            </div>
          </div>
        </div>
        <p className="text-center mt-8">Report Table Coming Soon...</p>
      </main>
      <footer className="bg-green-400 p-4">
        <p className="text-black">&copy; 2023 </p>
      </footer>
    </div>
  );
}
