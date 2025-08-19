import Footer from "@/app/shared-components/footer";
import Header from "@/app/shared-components/Header";
import Link from "next/link";

export default function Signup() {
    return (
        <>
        <Header/>
        <div className="grid grid-cols-2">
                <img src="/images/iphoimage-removebg-preview.png" className="w-full bg-blue-200"/>
            <div className="mt-40 w-90 ml-50">
                <h1 className="text-4xl font-bold mb-2 p-2">Create an account</h1>
                <p className="text-sm mb-8 p-2">Enter your details below</p>

                <form className="space-y-4">
                    <input type="text" placeholder="Name" className="w-full border-b border-gray-300 p-2 focus:outline-none" />
                    <input type="text" placeholder="Email or Phone Number" className="w-full border-b border-gray-300 p-2 focus:outline-none" />
                    <input type="text" placeholder="Password" className="w-full border-b border-gray-300 p-2 focus:outline-none" />
                    <div className="grid grid-rows-2 gap-6">
                        <button className="bg-red-500 rounded-sm cursor-pointer mt-6 p-3 text-white font-bold">Create Acount</button>
                        <button className="rounded-sm border-1 border-gray-500 cursor-pointer">Sign up with Google</button>
                    </div>
                    <p className="">Already have accont? <Link href= "/login" className="font-bold">Log in </Link></p>
                </form >
            </div>
        </div>
        <Footer/>
        </>
    )
}