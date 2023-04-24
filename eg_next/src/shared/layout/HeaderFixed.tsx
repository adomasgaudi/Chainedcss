import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import "twin.macro";
import tw from "twin.macro";
import {
  useAppDispatch,
  useAppSelector,
<<<<<<< HEAD
=======
<<<<<<<< HEAD:src/app/share/layout/HeaderFixed.tsx
>>>>>>> b87d837 (feat: -u4 sort legacy)
<<<<<<<< HEAD:src/app/share/components/layout/HeaderFixed.tsx
} from "../../utils/state/hooks";
import { changeScroll } from "../../utils/state/ui.slice";
========
} from "../utils/state/hooks";
import { changeScroll } from "../utils/state/ui.slice";
>>>>>>>> 3b96933 (feat: -u working page):src/app/share/layout/HeaderFixed.tsx
<<<<<<< HEAD
=======
========
} from "../../utils/state/hooks";
import { changeScroll } from "../../utils/state/ui.slice";
>>>>>>>> b87d837 (feat: -u4 sort legacy):src/app/share/components/layout/HeaderFixed.tsx
>>>>>>> b87d837 (feat: -u4 sort legacy)
import { useWindow } from "../../../share/utils/tools/useWindow";
import { Link, Logo, NavLink } from "./Header.styles";

const ScrollReveal = styled.div<any>(({ scroll }) => [
  `
  position: fixed;
  transition: .5s;
  z-index: 12;
  `,
  `top: ${scroll > 100 ? `0px` : `-70px`};`,
]);

type Props = {};

const HeaderFixed: FC<Props> = () => {
  const handleLogin = () => {};
  const handleLogout = () => {};
  const [loggedIn, setLoggedIn] = useState<boolean>(true);
  const scroll = useAppSelector((state) => state.ui.scroll);
  const pageNum = useAppSelector((state) => state.ui.pageNum);
  const dis = useAppDispatch();
  const [scrollPosition, setScrollPosition] = useState<number>();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    dis(changeScroll(position));
  };

  useWindow(handleScroll);

  useEffect(() => {
    const totalH = document.documentElement.scrollHeight;
    const viewportH = window.innerHeight;
    const scrollHeight = totalH - viewportH;

    const els = document.querySelectorAll("#scrollbar");

    els.forEach((element: any, index) => {
      if (index === pageNum - 1) {
        const scrollPerc = Math.round((100 * scroll) / scrollHeight);
        element.style.width = `${scrollPerc}%`;
      }
    });
  }, [scroll]);

  return (
    <ScrollReveal scroll={scroll}>
      <header className="fixed bg-[#fafafa] w-full z-10 shadow_ionic min-h-[60px] flex justify-center items-center">
        <div tw="py-1 px-3 flex gap-5">
          <NavLink href="/">HOME</NavLink>
          <NavLink href="/bloglist">BLOGS</NavLink>
        </div>
      </header>
    </ScrollReveal>
  );
};

export default HeaderFixed;
