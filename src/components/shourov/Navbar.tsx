"use client";
import Image from "next/image";
import Link from "next/link";
import cartIcon from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import user from "@/assets/icons/user.svg";
import wishlist from "@/assets/icons/wishlist.svg";
import { useCartStore } from "@/providers/cart-store-provider";

const Navbar = () => {
	const { cart } = useCartStore((state) => state);
	return (
		<nav className="py-[30px] bg-white">
			<div className="container">
				<div className="flex items-center justify-between gap-4">
					<Link href={"/"} className="flex items-center gap-[5px]">
						<div>
							<Image src={"/logo.svg"} alt="logo" width={50} height={32} />
						</div>
						<span className="text-[34px] font-semibold text-black">
							Furniro
						</span>
					</Link>
					<ul className="flex items-center gap-[75px]">
						<li>
							<Link className="font-medium text-base text-black" href={"/"}>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="font-medium text-base text-black"
								href={"/allproduct"}
							>
								Shop
							</Link>
						</li>
						<li>
							<Link className="font-medium text-base text-black" href={"/blog"}>
								About
							</Link>
						</li>
						<li>
							<Link
								className="font-medium text-base text-black"
								href={"/contact"}
							>
								Contact
							</Link>
						</li>
					</ul>
					<div className="flex items-center gap-[45px]">
						<div>
							<Image src={user} alt="user" width={28} height={28} />
						</div>
						<div>
							<Image src={search} alt="search" width={28} height={28} />
						</div>
						<div>
							<Image src={wishlist} alt="wishlist" width={28} height={28} />
						</div>
						<Link href={"/cart"} className="flex relative">
							<Image src={cartIcon} alt="cart" width={28} height={28} />
							<div className="bg-red-500 w-[30px] h-[30px] absolute -top-4 -right-6 text-white text-xs flex justify-center items-center py-1 px-1  rounded-full">
								<span className=" ">{cart.length}</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
