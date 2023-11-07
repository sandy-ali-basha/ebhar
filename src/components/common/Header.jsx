import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/ebhar-logo.svg";

function Header() {
  return (
    <header class="py-10" x-data="{expanded: false}">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          <div class="flex-shrink-0">
            <Link href="/" title="" class="flex">
              <img className="" src={Logo} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
