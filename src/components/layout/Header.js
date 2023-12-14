"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  const status = session?.status;
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  }
  console.log(session);
  // const userData = session.data?.user;
  // let userName = userData?.name || userData?.email;
  // const { cartProducts } = useContext(CartContext);
  // const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // if (userName && userName.includes(" ")) {
  //   userName = userName.split(" ")[0];
  // }
  return (
    <header className="flex items-center justify-between">
      <nav className="flex items-center gap-8 font-semibold text-gray-500">
        <Link href={"/"} className="text-2xl font-semibold text-primary">
          FD360 Food
        </Link>
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 font-semibold text-gray-500">
        {status === "authenticated" && (
          <>
            <Link href={"/profile"} className="whitespace-nowrap">
              Hello, {userName}
            </Link>
            <button
              onClick={() => signOut()}
              className="px-6 py-2 text-white rounded-full bg-primary"
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link href={"/login"}>Login</Link>
            <Link
              href={"/register"}
              className="px-6 py-2 text-white rounded-full bg-primary"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
