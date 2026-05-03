import Image from "next/image";
import Link from "next/link";
import search from "@/assets/icons/search.svg";
import user from "@/assets/icons/user.svg";
import wishlist from "@/assets/icons/wishlist.svg";
import CartBtn from "./ui/CartBtn";

const Navbar = () => {
  return (
    <nav className="h-[100px] bg-white fixed top-0 z-100 w-screen">
      <div className="container h-full">
        <div className="flex items-center justify-between gap-4 h-full">
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
                Blog
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
          <div className="flex items-center gap-[45px] relative">
            <div>
              <Image src={user} alt="user" width={28} height={28} />
            </div>
            <div>
              <Image src={search} alt="search" width={28} height={28} />
            </div>
            <div>
              <Image src={wishlist} alt="wishlist" width={28} height={28} />
            </div>
            <CartBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
