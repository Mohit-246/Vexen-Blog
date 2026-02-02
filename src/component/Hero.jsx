import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Thoughts on Code, Systems, and Building Software.
          </h1>

          <p className="text-gray-500 text-lg max-w-md">
            Thoughts on Code, Systems, and Building Software.
          </p>

          <a href="#newsletter" className="w-fit bg-amber-500 hover:bg-black hover:scale-105 transition transform ease-in-out text-white font-medium px-8 py-3 rounded-md">
            Sign up to Newsletter
          </a >
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/earth.png"
            alt="Digital Earth"
            width={380}
            height={380}
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
