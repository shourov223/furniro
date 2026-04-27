

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-8 px-4 md:px-16 lg:px-24 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-black">Funiro.</h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                        400 University Drive Suite 200 Coral Gables,<br />
                        FL 33134 USA
                    </p>
                </div>
                <div className="space-y-8">
                    <h3 className="text-gray-400 font-medium">Links</h3>
                    <ul className="space-y-6 font-bold text-black">
                        <li><a href="#" className="hover:text-gray-600 transition">Home</a></li>
                        <li><a href="#" className="hover:text-gray-600 transition">Shop</a></li>
                        <li><a href="#" className="hover:text-gray-600 transition">About</a></li>
                        <li><a href="#" className="hover:text-gray-600 transition">Contact</a></li>
                    </ul>
                </div>
                <div className="space-y-8">
                    <h3 className="text-gray-400 font-medium">Help</h3>
                    <ul className="space-y-6 font-bold text-black">
                        <li><a href="#" className="hover:text-gray-600 transition">Payment Options</a></li>
                        <li><a href="#" className="hover:text-gray-600 transition">Returns</a></li>
                        <li><a href="#" className="hover:text-gray-600 transition">Privacy Policies</a></li>
                    </ul>
                </div>
                <div className="space-y-8">
                    <h3 className="text-gray-400 font-medium">Newsletter</h3>
                    <form className="flex items-end gap-3">
                        <div className="border-b border-black pb-1 w-full max-w-[200px]">
                            <input type="email" placeholder="Enter Your Email Address" className="w-full text-sm outline-none placeholder-gray-400 bg-transparent" />
                        </div>
                        <button type="submit" className="border-b border-black pb-1 font-bold text-sm uppercase hover:text-gray-600 transition">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200">
                <p className="text-black text-sm">
                    2023 furino. All rights reserved
                </p>
            </div>
        </footer>

    )
}

export default Footer