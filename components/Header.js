import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";

const Header = () => {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex item-center rounded-full ml-2 bg-gray-100 p-2">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <input
            className="outline-none flex ml-2 items-center bg-transparent"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
    </div>
  );
};

export default Header;
