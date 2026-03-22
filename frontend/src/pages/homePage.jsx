import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link to="/" className="text-2xl font-bold text-slate-900">
                                ShopHub
                            </Link>
                        </div>

                        <div className="hidden md:flex space-x-8">
                            <Link to="/" className="text-slate-700 hover:text-slate-900 font-medium">
                                Home
                            </Link>
                            <Link to="/products" className="text-slate-700 hover:text-slate-900 font-medium">
                                Products
                            </Link>
                            <Link to="/about" className="text-slate-700 hover:text-slate-900 font-medium">
                                About
                            </Link>
                            <Link to="/contact" className="text-slate-700 hover:text-slate-900 font-medium">
                                Contact
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link
                                to="/login"
                                className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-4">
                    Welcome to ShopHub
                </h1>

                <p className="text-slate-600 text-lg mb-8 max-w-2xl">
                    Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.
                </p>

                <div className="flex gap-4">
                    <button className="px-8 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition shadow-lg">
                        Shop Now
                    </button>
                    <Link
                        to="/products"
                        className="px-8 py-3 rounded-xl border-2 border-slate-900 text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition"
                    >
                        Browse Products
                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">ShopHub</h3>
                            <p className="text-slate-400">
                                Your trusted online shopping destination.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/" className="text-slate-400 hover:text-white transition">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="text-slate-400 hover:text-white transition">
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-slate-400 hover:text-white transition">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/contact" className="text-slate-400 hover:text-white transition">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/faq" className="text-slate-400 hover:text-white transition">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shipping" className="text-slate-400 hover:text-white transition">
                                        Shipping Info
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-slate-400 hover:text-white transition">
                                    Facebook
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition">
                                    Twitter
                                </a>
                                <a href="#" className="text-slate-400 hover:text-white transition">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-400">
                        <p>&copy; 2026 ShopHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
