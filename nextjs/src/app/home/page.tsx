
import Image from 'next/image';
import Header from '../shared-components/Header';
import Footer from '../shared-components/footer';

export default function Home() {
    return (
        <div className="bg-white text-black font-sans">
            <Header />
            <div className="mt-8">
                <div className='flex'>
                    <aside className="w-1/4 pr-8">
                        <ul className="space-y-2 text-sm text-black ml-40">
                            <li className="flex justify-between items-center">Woman's Fashion <span className="text-gray-500">&gt;</span></li>
                            <li className="flex justify-between items-center">Men's Fashion <span className="text-gray-500">&gt;</span>
                            </li>
                            <li>Electronics</li>
                            <li>Home & Lifestyle</li>
                            <li>Medicine</li>
                            <li>Sports & Outdoor</li>
                            <li>Baby's & Toys</li>
                            <li>Groceries & Pets</li>
                            <li>Health & Beauty</li>
                        </ul>
                    </aside>

                    <section className="w-4/6 bg-black text-white p-20 relative h-110">
                        <div className="max-w-md">
                            <Image src="/images/ipho_-removebg-preview.png" alt="iPhone 14 Series" className="absolute right-20 top-0 object-cover h-full" width={400} height={200} />
                            <div className="relative z-10">
                                <p className="text-sm">iPhone 14 Series</p>
                                <h1 className="text-5xl font-bold my-4">Up to 10% off Voucher</h1>
                                <button className="underline flex items-center">Shop Now →</button>
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        </div>
                    </section>
                </div>

                <section className="py-10">
                    <div className="container mx-auto px-4">
                        <div className="items-center justify-between mb-6">
                            <span className="text-red-600 font-bold">Today's</span>
                            <h2 className="text-2xl font-bold text-black">Flash Sales</h2>
                            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">View All</button>
                        </div>
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex space-x-4 bg-gray-100 p-2 rounded">
                                <span>03</span>:<span>23</span>:<span>19</span>:<span>56</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="p-4 rounded shadow">
                                <Image src="/images/game.jpeg" alt="HAVIT HV-G92 Gamepad" width={200} height={200} />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">LTD Edition PS5 Comod</p>
                                <p className="text-red-500 text-lg">$99.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (12)</p>
                                <div className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
                                    10%
                                </div>

                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/keyboard.jpeg" alt="AK-900 Wired Keyboard" width={200} height={200} />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">AK-900 Wired Keyboard</p>
                                <p className="text-red-500 text-lg">$99.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (15)</p>
                                <div className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
                                    15%
                                </div>

                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/screen.jpeg" alt="IPS LCD Gaming Monitor" width={200} height={200} />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">IPS LED Gaming Monitor</p>
                                <p className="text-red-500 text-lg">$99.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (10)</p>
                                <div className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
                                    20%
                                </div>

                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/chair.jpeg" alt="S-Series Comfort Chair" width={200} height={200} />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">S-Series Comfort Chair</p>
                                <p className="text-red-500 text-lg">$99.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (15)</p>
                                <div className="absolute top-2 left-2 bg-red-100 text-red-500 text-xs px-2 py-1 rounded">
                                    10%
                                </div>

                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">View All Products</button>
                        </div>
                    </div>
                </section>


                <section className="py-10 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="items-center justify-between mb-6">
                            <span className="text-red-600 font-bold">Categories</span>
                            <h2 className="text-2xl font-bold text-black">Browse By Category</h2>
                            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">View All</button>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                            <div className="border border-gray-300 p-10 text-center rounded shadow">
                                <Image src="/images/twophone.jpg" alt="Phones" width={100} height={50} className="mx-auto" />
                                <p>Phones</p>
                            </div>
                            <div className="border border-gray-300 p-10 text-center rounded shadow">
                                <Image src="/images/lightcom.jpg" alt="Computers" width={100} height={50} className="mx-auto" />
                                <p>Computers</p>
                            </div>
                            <div className="border border-gray-300 p-6 text-center rounded shadow">
                                <Image src="/images/watchlight.png" alt="Smartwatch" width={100} height={50} className="mx-auto" />
                                <p>Smartwatch</p>
                            </div>
                            <div className="border border-gray-300 p-4 text-center rounded shadow bg-red-600 text-white">
                                <Image src="/images/camlight-removebg-preview.png" alt="Camera" width={100} height={50} className="mx-auto" />
                                <p>Camera</p>
                            </div>
                            <div className="border border-gray-300 p-12 text-center rounded shadow">
                                <Image src="/images/headlight.jpg" alt="Headphones" width={70} height={50} className="mx-auto" />
                                <p>Headphones</p>
                            </div>
                            <div className="border border-gray-300 p-15 text-center rounded shadow">
                                <Image src="/images/callight.png" alt="Gaming" width={50} height={50} className="mx-auto" />
                                <p>Gaming</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-10">
                    <div className="container mx-auto px-4">
                        <div className="items-center justify-between mb-6">
                            <span className="text-red-600 font-bold">This month</span>
                            <h2 className="text-2xl font-bold text-black">Best Selling Products</h2>
                            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">View All</button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="p-4 rounded shadow">
                                <Image src="/images/jack.jpeg" alt="The north coat" width={200} height={200} />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">The north coat</p>
                                <p className="text-red-500 text-lg">$260.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (50)</p>
                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/bag.jpeg" alt="Gucci duffle bag" width={200} height={200} />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">Gucci duffle bag</p>
                                <p className="text-red-500 text-lg">$960.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (25)</p>

                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/speaker.jpeg" alt="RGB liquid CPU Cooler" width={200} height={200} />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">RGB liquid CPU</p>
                                <p className="text-red-500 text-lg">$160.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (35)</p>

                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/chainchair.jpeg" alt="Small BookShelf" width={200} height={200} />
                                <p>Small BookShelf</p>
                                 <p className="text-red-500 text-lg">$160.00</p>
                                 <p className="text-yellow-500 text-xs">★★★★☆ (35)</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="bg-black text-white py-10 w-4/5 m-auto px-20">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-6 md:mb-0">
                            <h3 className='text-green-500'>Category</h3>
                            <h2 className="text-5xl font-bold">Enhance Your</h2>
                            <h2 className="text-5xl font-bold">Music Experience</h2>
                            <div className="flex space-x-4 mt-4">
                                <div className="bg-white text-black p-2 rounded-full">23 <span className="text-xs">Hours</span></div>
                                <div className="bg-white text-black p-2 rounded-full">05 <span className="text-xs">Days</span></div>
                                <div className="bg-white text-black p-2 rounded-full">59 <span className="text-xs">Minutes</span></div>
                                <div className="bg-white text-black p-2 rounded-full">35 <span className="text-xs">Seconds</span></div>
                            </div>
                            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Buy Now!</button>
                        </div>
                        <div className="relative w-full md:w-1/2">
                            <Image src="/images/rad.webp" alt="JBL Speaker" width={600} height={200} className="object-contain" />
                        </div>
                    </div>
                </section>


                <section className="py-10">
                    <div className="container mx-auto px-4">
                        <div className="items-center justify-between mb-6">
                            <span className="text-red-600 font-bold">Our Products</span>
                            <h2 className="text-2xl font-bold text-black">Explore Our Products</h2>
                            <div className="flex space-x-2">
                                <button className="bg-gray-200 p-2 rounded">&lt;</button>
                                <button className="bg-gray-200 p-2 rounded">&gt;</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 m-auto">
                            <div className="p-4 rounded shadow">
                                <Image src="/images/catbag.avif" alt="Breed Dry Dog Food" width={300} height={200} />
                                <p>Breed Dry Dog Food</p>
                                <p className="text-red-600">$100</p>
                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/came.webp" alt="CANON EOS DSLR Camera" width={200} height={200} />
                                <p>CANON EOS DSLR Camera</p>
                                <p className="text-red-600">$360</p>
                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/com.jpg" alt="ASUS FHD Gaming Laptop" width={200} height={200} />
                                <p>ASUS FHD Gaming Laptop</p>
                                <p className="text-red-600">$700</p>
                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/jelly.png" alt="Curology Product Set" width={200} height={200} />
                                <p>Curology Product Set</p>
                                <p className="text-red-600">$500</p>
                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/mpaka.png" alt="Kids Electric Car" width={200} height={200} />
                                <p>Kids Electric Car</p>
                                <p className="text-red-600">$960</p>
                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/baller.jpeg" alt="Jr. Zoom Soccer Cleats" width={200} height={200} />
                                <p>Jr. Zoom Soccer Cleats</p>
                                <p className="text-red-600">$1160</p>
                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/play.jpg" alt="GP11 Shooter USB Gamepad" width={200} height={200} />
                                <p>GP11 Shooter USB Gamepad</p>
                                <p className="text-red-600">$660</p>
                            </div>
                            <div className="p-4 rounded shadow">
                                <Image src="/images/jacket.jpeg" alt="Quilted Satin Jacket" width={200} height={200} />
                                <p>Quilted Satin Jacket</p>
                                <p className="text-red-600">$660</p>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700">View All Products</button>
                        </div>
                    </div>
                </section>


                <section className="py-10">
                    <div className="container mx-auto px-4">
                        <div className="items-center justify-between mb-6">
                            <span className="text-red-600 font-bold">Featured</span>
                            <h2 className="text-2xl font-bold text-black">New Arrival</h2>
                            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm">View All</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-black text-white p-6 rounded relative">
                                <Image src="/images/mizindalo-removebg-preview.png" alt="PlayStation 5" width={700} height={400} className="object-contain" />
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-xl font-bold">PlayStation 5</h3>
                                    <p>Black and White version of the PS5 coming out on sale.</p>
                                    <button className="mt-2 underline">Shop Now</button>
                                </div>
                            </div>
                            <div className="grid grid-rows-2 gap-6">
                                <div className="bg-black text-white p-6 rounded relative">
                                    <Image src="/images/wotwo.jpeg" alt="Women’s Collections" width={350} height={200} className="object-cover m-auto" />
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-xl font-bold">Women’s Collections</h3>
                                        <p>Featured woman collections that give you another vibe.</p>
                                        <button className="mt-2 underline">Shop Now</button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-black text-white p-6 rounded relative">
                                        <Image src="/images/sp-removebg-preview.png" alt="Speakers" width={300} height={150} className="object-contain" />
                                        <div className="absolute bottom-4 left-4">
                                            <h3 className="text-xl font-bold">Speakers</h3>
                                            <p>Amazon wireless speakers</p>
                                            <button className="mt-2 underline">Shop Now</button>
                                        </div>
                                    </div>
                                    <div className="bg-black text-white p-6 rounded relative">
                                        <Image src="/images/fume-removebg-preview.png" alt="Perfume" width={300} height={150} className="object-contain" />
                                        <div className="absolute bottom-4 left-4">
                                            <h3 className="text-xl font-bold">Perfume</h3>
                                            <p>GUCCI INTENSE OUD EDP</p>
                                            <button className="mt-2 underline">Shop Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="py-10 bg-white">
                    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="mx-auto w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">🚚</div>
                            <h3 className="font-bold">FREE AND FAST DELIVERY</h3>
                            <p>Free delivery for all orders over $140</p>
                        </div>
                        <div>
                            <div className="mx-auto w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">🕒</div>
                            <h3 className="font-bold">24/7 CUSTOMER SERVICE</h3>
                            <p>Friendly 24/7 customer support</p>
                        </div>
                        <div>
                            <div className="mx-auto w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-4">💰</div>
                            <h3 className="font-bold">MONEY BACK GUARANTEE</h3>
                            <p>We return money within 30 days</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
}