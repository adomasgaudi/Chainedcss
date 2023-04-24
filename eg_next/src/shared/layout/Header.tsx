import Link from "next/link";
import React, { FC, useState } from "react";
import tw from "twin.macro";

type Props = {};

const Header: FC<Props> = () => {
  const handleLogin = () => {};
  const handleLogout = () => {};
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  return (
    <>
      <header className="bg-white w-full z-10 mb-20">
        <div tw="flex justify-between items-center py-1 px-3">
          <div tw="flex items-center gap-[20%]">
            <Link href="/">
              <div tw="flex items-center">
                {/* <Logo /> */}
                {/* {screenWidth > 700 ? <div>LOGO</div> : null} */}
              </div>
            </Link>
            {/* <NavLink href="/">HOME</NavLink>
            <NavLink href="/bloglist">BLOGS</NavLink> */}
          </div>
          <button
            type="button"
            className="shadowHov_thick rounded-md py-1 px-3 font_btn_1"
            onClick={handleLogout}
          >
            {loggedIn ? "Log Out" : "Log In"}
          </button>
        </div>
      </header>
      <div tw="w-full h-32 " />
    </>
  );
};

export default Header;
