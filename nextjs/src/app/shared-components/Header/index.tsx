import Link from "next/link";

const Header = () => {
 return (
  <body className="antialiased flex flex-col min-h-screen">

   <header>
     <div className="relative bg-black text-white text-center py-2 text-sm">
       <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
         <Link href="/" className="underline">ShopNow</Link>
       </p>

       <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
         <select className="bg-black text-white border-none">
           <option>English</option>
         </select>
       </div>
     </div>

     <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-black">Exclusive</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-800 hover:text-red-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-red-600">Contact</a>
            <a href="#" className="text-gray-800 hover:text-red-600">About</a>
            <a href="#" className="text-gray-800 hover:text-red-600">Sign Up</a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border border-gray-300 rounded px-4 py-2 w-64 focus:outline-none focus:border-red-600"
              />
            </div>
            <button className="text-gray-800 hover:text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button className="text-gray-800 hover:text-red-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
   </header>
   </body>
 );

};

export default Header;

