import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Exclusive</h2>
          <h3 className="text-xl mb-2">Subscribe</h3>
          <p className="mb-4">Get 10% off your first order</p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border border-white p-2 pr-10 rounded"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">→</button>
          </div>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl mb-4">Support</h3>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p className="mt-2">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl mb-4">Account</h3>
          <ul className="space-y-2">
            <li><Link href="#">My Account</Link></li>
            <li><Link href="/login">Login / Register</Link></li>
            <li><Link href="#">Cart</Link></li>
            <li><Link href="#">Wishlist</Link></li>
            <li><Link href="#">Shop</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms Of Use</Link></li>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-xl mb-4">Download App</h3>
          <p className="mb-4">Save $3 with App New User Only</p>
          <div className="flex items-start space-x-4">
            <Image src="/images/qr-code.png" alt="QR Code" width={80} height={80} className="bg-white p-1 rounded"/>
            <div className="flex flex-col space-y-2">
              <Image src="/images/google-play.png" alt="Get it on Google Play" width={120} height={40}/>
              <Image src="/images/app-store.png" alt="Download on the App Store" width={120} height={40}/>
            </div>
          </div>
        
          <div className="flex space-x-4 mt-4">
            <Link href="#"><span className="text-xl">f</span></Link> {/* Facebook */}
            <Link href="#"><span className="text-xl">𝕏</span></Link> {/* X/Twitter */}
            <Link href="#"><span className="text-xl">📷</span></Link> {/* Instagram */}
            <Link href="#"><span className="text-xl">in</span></Link> {/* LinkedIn */}
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500 text-sm">
        © Copyright Rimel 2022. All right reserved.
      </div>
    </footer>
  );
};

export default Footer;