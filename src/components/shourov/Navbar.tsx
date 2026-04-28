import Image from "next/image";
import Link from "next/link";
import cart from "@/assets/icons/cart.svg";
import search from "@/assets/icons/search.svg";
import user from "@/assets/icons/user.svg";
import wishlist from "@/assets/icons/wishlist.svg";

const Navbar = () => {
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
            <Link href={"/cart"}>
              <Image src={cart} alt="cart" width={28} height={28} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
