import Link from "next/link";

const Header = () => {
 return (

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

     <nav className="bg-white py-4 px-8 flex items-center justify-between">
       <h1 className="text-2xl font-bold ml-30">Exclusive</h1>
       <ul className="flex space-x-6">
         <li><Link href="/home">Home</Link></li>
         <li><Link href="/contact">Contact</Link></li>
         <li><Link href="/about">About</Link></li>
         <li><Link href="/home">Sign Up</Link></li>
       </ul>

       <div className="flex items-center space-x-4 mr-33">
         <input
           type="text"
           placeholder="What are you looking for?"
           className="border border-gray-300 p-2 rounded w-64"
         />

         <span className="text-xl">♡</span> 
         <span className="text-xl">🛒</span> 
       </div>
     </nav>
   </header>
 );

};

export default Header;
