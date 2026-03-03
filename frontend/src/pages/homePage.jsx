import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4 text-center">

            <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Welcome Home
            </h1>

            <p className="text-slate-600 mb-8 max-w-md">
                This is the homepage of your Ecommerce application. Start exploring products and manage your account easily.
            </p>

            <div className="flex gap-4">
                <button
                    onClick={() => alert("Button Clicked!")}
                    className="px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
                >
                    Get Started
                </button>

                <Link
                    to="/login"
                    className="px-6 py-3 rounded-xl border border-slate-900 text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition"
                >
                    Login
                </Link>
            </div>

        </div>
    );
}