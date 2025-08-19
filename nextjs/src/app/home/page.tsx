import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../shared-components/Header";
import Footer from "../shared-components/footer";


export const metadata: Metadata = {
    title: "Exclusive - E-Commerce",
    description: "Exclusive e-commerce website",
};


export default function Home() {
    return (
        <>
            <body className="antialiased flex flex-col min-h-screen">

                <Header />
                <main className="flex min-h-screen flex-col px-8">
                    <div className="flex mt-8">

                        <aside className="w-1/5 pr-8">
                            <ul className="space-y-2 text-sm text-gray-800">
                                <li className="flex justify-between items-center">Woman’s Fashion <span className="text-gray-500">&gt;</span></li>
                                <li className="flex justify-between items-center">Men’s Fashion <span className="text-gray-500">&gt;</span>
                                </li>
                                <li>Electronics</li>
                                <li>Home & Lifestyle</li>
                                <li>Medicine</li>
                                <li>Sports & Outdoor</li>
                                <li>Baby’s & Toys</li>
                                <li>Groceries & Pets</li>
                                <li>Health & Beauty</li>
                            </ul>
                        </aside>



                        <section className="w-4/5 bg-black text-white p-12 relative">
                            <div className="max-w-md">
                                <img src="/images/ipho_-removebg-preview.png" alt="iPhone 14 Series" className="absolute right-0 top-0 h-full object-cover"/>
                                <div className="relative z-10">
                                    <p className="text-sm">iPhone 14 Series</p>
                                    <h1 className="text-5xl font-bold my-4">Up to 10% off Voucher</h1>
                                    <button className="underline flex items-center">
                                        Shop Now →
                                    </button>
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                            </div>
                        </section>
                    </div>



                    <section className="my-12">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-red-500 mr-2"></span>
                                <h2 className="text-2xl font-bold">Today’s Flash Sales</h2>
                            </div>
                            <div className="flex space-x-2">
                                <span>03</span>:<span>23</span>:<span>56</span>
                                <Link href="#" className="ml-4 text-red-500">→</Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image src="/images/game.jpeg" alt="Product 1" width={200} height={200} className="mx-auto"/>
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
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image src="/images/keyboard.jpeg" alt="Product 2" width={200} height={200} className="mx-auto"/>
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
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/screen.jpeg"
                                    alt="Product 3"
                                    width={200}
                                    height={200}
                                    className="mx-auto"
                                />
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
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/chair.jpeg"
                                    alt="Product 4"
                                    width={200}
                                    height={200}
                                    className="mx-auto"
                                />
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
                            <Link href="#" className="bg-red-500 text-white px-6 py-2 rounded">
                                View All Products
                            </Link>
                        </div>
                    </section>



                    <section className="my-12">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-red-500 mr-2"></span>
                                <h2 className="text-2xl font-bold">Categories</h2>
                            </div>
                            <Link href="#" className="text-red-500">→</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            <div className="text-center border border-gray-200 p-4">
                                <Image src="/images/phones.png" alt="Phones" width={50} height={50} className="mx-auto" />
                                <p className="mt-2 text-sm">Phones</p>
                            </div>
                            <div className="text-center border border-gray-200 p-4">
                                <Image src="/images/computers.png" alt="Computers" width={50} height={50} className="mx-auto" />
                                <p className="mt-2 text-sm">Computers</p>
                            </div>
                            <div className="text-center bg-red-500 text-white p-4">
                                <Image src="/images/camera.png" alt="Camera" width={50} height={50} className="mx-auto" />
                                <p className="mt-2 text-sm">Camera</p>
                            </div>
                            <div className="text-center border border-gray-200 p-4">
                                <Image src="/images/headphones.png" alt="Headphones" width={50} height={50} className="mx-auto" />
                                <p className="mt-2 text-sm">Headphones</p>
                            </div>
                            <div className="text-center border border-gray-200 p-4">
                                <Image src="/images/gaming.png" alt="Gaming" width={50} height={50} className="mx-auto" />
                                <p className="mt-2 text-sm">Gaming</p>
                            </div>
                        </div>
                    </section>



                    <section className="my-12">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-red-500 mr-2"></span>
                                <h2 className="text-2xl font-bold">This Month</h2>
                            </div>
                            <Link href="#" className="text-red-500">View All</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/best1.jpg"
                                    alt="Product 1"
                                    width={200}
                                    height={200}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">The north coat</p>
                                <p className="text-red-500 text-lg">$260.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (50)</p>
                            </div>
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/best2.jpg"
                                    alt="Product 2"
                                    width={200}
                                    height={200}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">Gucci duffle bag</p>
                                <p className="text-red-500 text-lg">$960.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (25)</p>
                            </div>
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/best3.jpg"
                                    alt="Product 3"
                                    width={200}
                                    height={200}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">RGB liquid CPU</p>
                                <p className="text-red-500 text-lg">$160.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (35)</p>
                            </div>
                        </div>
                    </section>



                    <section className="my-12 bg-black text-white p-12 relative text-center">
                        <div className="max-w-md mx-auto">
                            <h2 className="text-4xl font-bold mb-4">Enhance Your Music Experience</h2>
                            <p className="mb-4 text-lg">20% 30% 50% Off For First 20 Customers</p>
                            <Link href="#" className="bg-green-500 text-white px-6 py-2 rounded inline-block">
                                Buy Now
                            </Link>
                            <Image
                                src="/images/music-banner.jpg"
                                alt="Music Experience"
                                width={400}
                                height={300}
                                className="absolute right-0 top-0 h-full object-cover"
                            />
                        </div>
                    </section>



                    <section className="my-12">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-red-500 mr-2"></span>
                                <h2 className="text-2xl font-bold">Our Products</h2>
                            </div>
                            <Link href="#" className="text-red-500">→</Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/explore1.jpg"
                                    alt="Product 1"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">Breed Dry Dog</p>
                                <p className="text-red-500 text-lg">$100.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (10)</p>
                            </div>
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/explore2.jpg"
                                    alt="Product 2"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">CANON EOS 5D</p>
                                <p className="text-red-500 text-lg">$360.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (15)</p>
                            </div>
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/explore3.jpg"
                                    alt="Product 3"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">ASUS FHD Gaming</p>
                                <p className="text-red-500 text-lg">$700.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (20)</p>
                            </div>
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/explore4.jpg"
                                    alt="Product 4"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">Currology</p>
                                <p className="text-red-500 text-lg">$500.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (14)</p>
                            </div>
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/explore5.jpg"
                                    alt="Product 5"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">Jr. Zoom Soccer</p>
                                <p className="text-red-500 text-lg">$110.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (10)</p>
                            </div>
                            <div className="relative bg-gray-100 p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/explore6.jpg"
                                    alt="Product 6"
                                    width={150}
                                    height={150}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">Quilted Satin</p>
                                <p className="text-red-500 text-lg">$150.00</p>
                                <p className="text-yellow-500 text-xs">★★★★☆ (12)</p>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <Link href="#" className="bg-red-500 text-white px-6 py-2 rounded">
                                View All Products
                            </Link>
                        </div>
                    </section>



                    <section className="my-12">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-red-500 mr-2"></span>
                                <h2 className="text-2xl font-bold">Featured</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="relative bg-gray-800 text-white p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/new1.jpg"
                                    alt="Product 1"
                                    width={300}
                                    height={200}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">PlayStation 5</p>
                                <p className="mt-2 text-sm">Shop now</p>
                            </div>
                            <div className="relative bg-gray-800 text-white p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/new2.jpg"
                                    alt="Product 2"
                                    width={300}
                                    height={200}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">Women’s Collections</p>
                                <p className="mt-2 text-sm">Shop now</p>
                            </div>
                            <div className="relative bg-gray-800 text-white p-4 text-center border border-gray-200 shadow-sm">
                                <Image
                                    src="/images/new3.jpg"
                                    alt="Product 3"
                                    width={300}
                                    height={200}
                                    className="mx-auto"
                                />
                                <div className="absolute top-2 right-2 flex space-x-2">
                                    <span className="text-red-500 text-sm">♥</span>
                                    <span className="text-red-500 text-sm">👁️</span>
                                </div>
                                <p className="mt-2 text-sm">Perfume</p>
                                <p className="mt-2 text-sm">Shop now</p>
                            </div>
                        </div>
                    </section>



                    <section className="my-12 text-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6">
                                <span className="inline-block w-12 h-12 bg-gray-200 rounded-full text-2xl flex items-center justify-center mb-4">🚚</span>
                                <h3 className="text-xl font-bold">FREE AND FAST DELIVERY</h3>
                                <p className="text-sm">Free delivery for all orders over $140</p>
                            </div>
                            <div className="p-6">
                                <span className="inline-block w-12 h-12 bg-gray-200 rounded-full text-2xl flex items-center justify-center mb-4">⏰</span>
                                <h3 className="text-xl font-bold">24/7 CUSTOMER SERVICE</h3>
                                <p className="text-sm">Friendly 24/7 customer support</p>
                            </div>
                            <div className="p-6">
                                <span className="inline-block w-12 h-12 bg-gray-200 rounded-full text-2xl flex items-center justify-center mb-4">💰</span>
                                <h3 className="text-xl font-bold">MONEY BACK GUARANTEE</h3>
                                <p className="text-sm">We return money within 30 days</p>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </main>
            </body>
        </>
    );
}

