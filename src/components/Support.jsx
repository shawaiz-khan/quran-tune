import Heading from "./Heading";
import '../CSS/Support.css';

const supportOptions = [
    {
        name: "Easypaisa",
        image: "https://th.bing.com/th/id/OIP.GaoAZO7iayVm94HIY51tdAAAAA?w=128&h=150&c=7&r=0&o=5&pid=1.7", 
        accountNumber: "03363636383",
    },
    {
        name: "JazzCash",
        image: "https://th.bing.com/th/id/OIP.P0hZJ5XslZ67GyZzRsiyfgHaHa?w=133&h=180&c=7&r=0&o=5&pid=1.7", 
        accountNumber: "03363636383",
    },
    {
        name: "Payoneer",
        image: "https://th.bing.com/th/id/OIP.uXNwGtGCMU6gYpK0o0q2HAHaHa?w=173&h=180&c=7&r=0&o=5&pid=1.7", 
        accountNumber: "4022529374227",
    },
    {
        name: "Raast",
        image: "https://th.bing.com/th/id/OIP.JzQx-3iGBtXFsn-tkUvQ_wHaFj?w=244&h=183&c=7&r=0&o=5&pid=1.7", 
        accountNumber: "03363636383",
    },
    {
        name: "Al-Barka bank",
        image: "https://th.bing.com/th/id/OIP.gKm9vB5NwkXg-Dwk2AzmYAHaFj?w=211&h=180&c=7&r=0&o=5&pid=1.7", 
        accountNumber: "PK42AIIN0000110216402015",
    },
    {
        name: "NayaPay",
        image: "https://th.bing.com/th/id/OIP.Vb_WROu6cMXA52Tfyz6mcwAAAA?w=161&h=180&c=7&r=0&o=5&pid=1.7", 
        accountNumber: "PK71NAYA1234503363636383" ,
    },
];

export default function Support() {
    return (
        <div className="py-5 support-head">
            <Heading className="text-3xl text-center sm:text-left font-bold mb-10">Support Us in this Journey</Heading>
            <br />
            <div className="flex flex-wrap justify-center gap-4">
                {supportOptions.map((option, index) => (
                    <div key={index} className="flex-shrink-0 w-full sm:w-1/3">
                        <div className="support-card block bg-white text-center font-bold border-2 border-green-500 hover:border-green-600 transition rounded p-4">
                            <div className="mb-4 bg-red-800 rounded-full w-40 h-40 mx-auto">
                                <img src={option.image} alt={option.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-xl font-bold mb-2 text-green-500">{option.name}</div>
                            <div className="text-lg support-account-number">Account: {option.accountNumber}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
