import React from 'react';
import '../CSS/Contact.css';
import Heading from './Heading';

export default function Contact() {
    return (
        <div className="contact-page">
            <Heading className='text-3xl text-center sm:text-left font-bold mb-10 head-text'>Get in Touch!</Heading>
            <div className="contact-info">
                {/* Admin Contact */}
                <div className="contact-card">
                    <h3 className='font-bold text-black mb-2'>Admin Contact:</h3>
                    <ul>
                        <li>Email: admin@qurantune.com</li>
                        <li>Phone: +92 328 852 8854</li>
                    </ul>
                </div>
                {/* Support Contact */}
                <div className="contact-card">
                    <h3 className='font-bold text-black mb-2'>Support Contact:</h3>
                    <ul>
                        <li>Email: support@qurantune.com</li>
                        <li>WhatsApp: +966 56 242 8213</li>
                    </ul>
                </div>
                {/* Donations Contact */}
                <div className="contact-card">
                    <h3 className='font-bold text-black mb-2'>Donations Contact:</h3>
                    <ul>
                        <li>Email: donations@qurantune.com</li>
                        <li>Phone: +92 336 363 6383</li>
                    </ul>
                </div>
                {/* Collaboration Contact */}
                <div className="contact-card">
                    <h3 className='font-bold text-black mb-2'>Collaboration Contact:</h3>
                    <ul>
                        <li>Email: collab@qurantune.com</li>
                        <li>WhatsApp: +966 56 242 8213</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
