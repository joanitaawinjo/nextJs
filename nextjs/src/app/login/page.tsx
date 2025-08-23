import Footer from "@/app/shared-components/footer";
import Header from "@/app/shared-components/Header";
import Link from "next/link";
import Image from "next/image";

export default function Signup() {
    return (
        <>
            <Header />
            <div className="flex">
                <Image src="/images/iphoimage-removebg-preview.png" width={500} height={500} className="w-4/7 bg-blue-200" alt="iPhone" />
                <div className="mt-40 w-90 ml-50">
                    <h1 className="text-3xl font-bold mb-2 p-2">Login in to Exclusive</h1>
                    <p className="text-sm mb-8 p-2">Enter your details below</p>

                    <form className="space-y-4">
                        <input type="text" placeholder="Email or Phone Number" className="w-full border-b border-gray-300 p-2 focus:outline-none" />
                        <input type="text" placeholder="Password" className="w-full border-b border-gray-300 p-2 focus:outline-none" />
                        <div className="flex gap-25">
                            <button className="bg-red-500 rounded-sm cursor-pointer mt-6 p-3 text-white font-bold w-2/6">Login</button>
                            <button className="cursor-pointer text-red-500 mt-10">Forgot Password?</button>
                        </div>
                    </form >
                </div>
            </div>
            <br />
            <Footer />
        </>
    )
}