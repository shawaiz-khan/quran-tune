import { HeartIcon } from "@heroicons/react/solid";
import Container from "./Container";
import '../CSS/Footer.css';

export default function Footer() {
    return (
        <div className="text-center py-6 px-5 bg-white drop-shadow-lg shadow-slate-100 footer-container">
            <Container withPadding={false} >
                <p className="text-black text-footer"> © 2024 All Rights Reserved. | Created with <HeartIcon className="inline-block h-5 w-5 text-red-500" /> by <a href="https://infinityshadow.com" className="text-black font-bold hover-text text-footer">Infinity Shadow</a></p>
            </Container>
        </div>
    )
}