import Image from "next/image";
export default function SubHome() {
  return (
    <>
      <div className="relative px-3 py-5 flex justify-center items-center">
        <Image
          className="h-[1000px] object-cover w-full sm:w-auto"
          src="/productapp1.png"
          alt="productapp1"
          width={1200}
          height={1000}
        />

        <Image
          className="hidden sm:block h-[500px] mt-20 ms-64 object-cover"
          src="/productapp2.png"
          alt="productapp2"
          width={400}
          height={800}
        />

        <div className="absolute text-center text-black px-5 sm:px-0 ">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            MAIN HOME HEADING
          </h1>
          <p className="text-sm sm:text-xl font-light pb-5">SUB HOME HEADING</p>
        </div>
      </div>
    </>
  );
}
