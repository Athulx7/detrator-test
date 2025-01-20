import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="h-16 flex items-center justify-between mx-5 md:mx-10 ">
          <div>
            <Link href={"/"} className="">
              <span className="font-bold text-xl flex items-center text-cyan-600 transition-transform duration-500 hover:scale-105">
                BRAND NAME
              </span>
            </Link>
          </div>

          <div className="hidden md:flex font-medium space-x-10">
            <div className="relative w-96 flex">
              <input
                type="text"
                className="h-10 w-full pl-10 pr-4 border-2 border-black rounded"
                placeholder="Search"
              />
              <span className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Image
                  src="/searchicon.png"
                  width={40}
                  height={10}
                  alt="header image"
                  className="p-2"
                />
              </span>
            </div>
          </div>

          <div className=" md:flex space-x-5">
            <div className="rounded-full w-10 h-10 bg-cyan-600  text-white"></div>

            <Link
              href={"/"}
              className=" hidden md:flex lg:flex items-center font-medium text-cyan-600 transition-transform duration-500 hover:scale-105"
            >
              USER NAME
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-16"></div>
    </>
  );
}
