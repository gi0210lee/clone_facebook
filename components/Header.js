import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div>
      <h1 className="text-6xl ">Header</h1>

      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex item-center rounded-full ml-2">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/* Center */}

      {/* Right */}
    </div>
  );
};

export default Header;
