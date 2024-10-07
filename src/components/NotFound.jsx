import { Link } from "react-router-dom";
import Heading from "./Heading";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="py-10 px-5 max-w-md mx-auto bg-white shadow-lg rounded-lg text-center">
                <small className="text-green-500 font-black text-lg md:text-xl mb-3 block">404</small>
                <Heading tag="h1" className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-5 text-black">Oops! Page Not Found</Heading>
                <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">We couldn't find the page you were looking for, but you just found the sock we'd lost. Feel free to explore other sections or return to the <Link to="/" className="text-green-500">home page</Link>.</p>
            </div>
        </div>
    )
}
