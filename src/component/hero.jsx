import Image from "next/image";
import Right from "./icons/Right";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
   <div className="grid grid-cols-2 justify-between items-center">
   <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          is better
          with a&nbsp;
          <span className="text-primary">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full">
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image src={'/pizza.png'}  alt={'pizza'} height={200} width={300} />
      </div>
   </div>
    </section>
  );
}