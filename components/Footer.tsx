import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-28 pb-12 overflow-hidden">

      {/* subtle grain / texture illusion */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:20px_20px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP LINE ACCENT */}
        {/* <div className="w-16 h-[1px] bg-yellow-500 mb-12 mx-auto md:mx-0" /> */}

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-16 items-start">

          {/* CONTACT */}
          <div>
            <p className="text-lg tracking-[0.4em] text-neutral-500 mb-8">
              CONTACT
            </p>

            <div className="space-y-8 text-sm">
              <div>
                <p className="text-neutral-600 mb-2">Email</p>
                <p className="group inline-block cursor-pointer">
                  contact@domain.com
                  <span className="block h-[1px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </p>
              </div>

              <div>
                <p className="text-neutral-600 mb-2">Phone</p>
                <p className="group inline-block cursor-pointer">
                  +234 6579308673
                  <span className="block h-[1px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </p>
              </div>
            </div>
          </div>

          {/* CENTER BRAND */}
          <div className="text-center flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-light tracking-[0.2em]">
              S.A ABIODUN
            </h1>

            <p className="mt-3 text-[11px] tracking-[0.35em] text-neutral-500">
              TEACHER • AUTHOR • SPEAKER
            </p>

            <p className="mt-6 text-neutral-500 text-sm max-w-xs leading-relaxed">
              Raising men of purpose, discipline, and spiritual authority to influence their world.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-8 text-lg">
              {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="group cursor-pointer relative"
                >
                  <Icon className="transition duration-300 group-hover:text-yellow-500" />
                  <span className="absolute left-1/2 -bottom-2 w-1 h-1 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition -translate-x-1/2" />
                </div>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="md:text-right">
            <p className="text-lg tracking-[0.4em] text-neutral-500 mb-8">
              NAVIGATION
            </p>

            <div className="space-y-4 text-sm">
              {["Home", "About", "Books", "Contact"].map((item) => (
                <p key={item} className="group flex flex-col items-end cursor-pointer">
                  {item}
                  <span className="block h-[1px] bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right" />
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-20 pt-6 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-600">

          <p>
            © {new Date().getFullYear()} S.A Abiodun. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0 tracking-[0.3em] text-[10px] text-neutral-500">
            DESIGNED WITH PURPOSE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;