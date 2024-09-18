import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { FiHome } from "react-icons/fi";
import { HiOutlineUserAdd, HiOutlineMoon } from "react-icons/hi";
import { FaRegMessage, FaRegBell } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [focused, setFocused] = useState(false);

  return (
    <header className="bg-primary text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-5">
          <h1 className="text-xl font-extrabold">Dechat</h1>

          {/* search input */}
          <div className="flex w-[200px] items-center justify-between rounded-md bg-[#3494cd] p-2">
            <div className="relative flex items-center gap-2">
              <RiSearch2Line size={20} />
              <input
                type="text"
                className="w-full bg-transparent text-[12px] outline-none placeholder:text-white/70"
                placeholder="Find Friends..."
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </div>
            {focused && (
              <MdClose
                size={20}
                className="cursor-pointer"
                onClick={() => setFocused(false)}
              />
            )}

            {/* searched field */}
            <div></div>
          </div>

          <FiHome size={20} className="hidden lg:block" />
          <HiOutlineUserAdd size={20} className="hidden lg:block" />
        </div>

        <div className="flex items-center gap-5">
          {/* posts */}
          <div className="hidden rounded-md bg-[#3494cd] p-2 text-sm font-medium lg:block">
            <strong>326</strong> Total Posts
          </div>

          {/* total friends */}
          <div className="hidden rounded-md bg-[#3494cd] p-2 text-sm font-medium lg:block">
            <strong>326</strong> Total Friends
          </div>

          {/* message-icon */}
          <div className="relative hidden md:block">
            <FaRegMessage size={20} />

            <div className="absolute -right-1 -top-2 flex size-4 items-center justify-center rounded-full bg-green-500 text-[10px] font-semibold">
              2
            </div>
          </div>

          <HiOutlineMoon size={20} />

          {/* bell-icon */}
          <div className="relative hidden md:block">
            <FaRegBell size={20} />

            <div className="absolute -right-1 -top-2 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-semibold">
              2
            </div>
          </div>

          {/* account */}
          <div className="hidden items-center gap-2 md:flex">
            <div className="relative">
              <img
                src="/src/assets/user-sm/1.jpg"
                alt="avatar"
                className="size-10 rounded-full object-cover"
              />

              {/* active-icon */}
              <div className="absolute -right-1 top-0 flex size-[14px] items-center justify-center rounded-full bg-white text-[10px] font-semibold">
                <div className="size-2 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-[1.4]">
                Mary Thompson
              </h3>
              <p className="text-[13px] leading-[1.1]">active now</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
