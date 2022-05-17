import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="flex sticky items-center top-0 bg-white p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          alt="logo"
          src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex item-center rounded-full ml-2 bg-gray-100 p-2">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <input
            className="hidden md:inline-flex outline-none flex ml-2 items-center bg-transparent"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex item-center sm:space-x-2 justify-end">
        {/* Profile pic */}

        <Image
          alt="profile"
          className="rounded-full cursor-pointer"
          onClick={signOut}
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />

        <p className="font-semibold whitespace-nowrap pr-3 flex items-center">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDoubleDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
