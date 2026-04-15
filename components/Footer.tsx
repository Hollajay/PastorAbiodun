import Image from "next/image";
import Icon from "./ui/Icon";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-28 pb-12 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid  md:grid-cols-3 gap-16 items-start">
          <div className="text-center flex md:hidden flex-col items-center">
           <div className="">
              <Image
                width={200}
                height={60}
                src={"/img/logo-white.png"}
                alt=""
                className="object-fit"
              />
            </div>

            <p className="mt-3 text-[11px] tracking-[0.35em] text-neutral-500">
              TEACHER • AUTHOR • SPEAKER
            </p>

            <p className="mt-6 text-neutral-500 text-sm max-w-xs leading-relaxed">
              Raising men of purpose, discipline, and spiritual authority to
              influence their world.
            </p>

            <div className="flex my-6 items-center gap-6">
              <Icon type="instagram" />
              <Icon type="facebook" />
              <Icon type="spotify" />
              <Icon type="telegram" />
              <Icon type="youtube" />
            </div>
          </div>

          <div className="flex flex-col  items-center md:items-start">
            <p className="text-xl tracking-[0.4em] text-neutral-500 mb-8">
              CONTACT
            </p>

            <div className="space-y-8 text-sm">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-neutral-600 mb-2 text-lg">Email</p>
                <p className="group inline-block cursor-pointer text-lg font-extralight">
                  contact@domain.com
                  <span className="block h-[1px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <p className="text-neutral-600 mb-2 text-lg">Phone</p>
                <p className="group inline-block cursor-pointer text-lg font-extralight">
                  +234 6579308673
                  <span className="block h-[1px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </p>
              </div>
            </div>
          </div>

          {/* CENTER BRAND */}
          <div className="text-center hidden md:flex flex-col items-center">
            <div className="">
              <Image
                width={200}
                height={60}
                src={"/img/logo-white.png"}
                alt=""
                className="object-fit"
              />
            </div>

            <p className="mt-3 text-[11px] tracking-[0.35em] text-neutral-500">
              TEACHER • AUTHOR • SPEAKER
            </p>

            <p className="mt-6 text-neutral-500 text-sm max-w-xs leading-relaxed">
              Raising men of purpose, discipline, and spiritual authority to
              influence their world.
            </p>
          </div>

          <div className="md:text-right flex flex-col  items-center md:items-end">
            <p className="text-lg tracking-[0.4em] text-neutral-500 mb-8">
              NAVIGATION
            </p>

            <div className="space-y-4 text-lg font-extralight">
              {["Home", "About", "Books", "Contact"].map((item) => (
                <p
                  key={item}
                  className="group flex flex-col items-center md:items-end cursor-pointer"
                >
                  {item}
                  <span className="block h-[1px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-6 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-600">
          <p>© {new Date().getFullYear()} S.A Abiodun. All rights reserved.</p>

          <p className="mt-3 md:mt-0 tracking-[0.3em] text-[10px] text-neutral-500">
            DESIGNED BY HINCAS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
