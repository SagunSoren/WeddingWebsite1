"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TfiClose } from "react-icons/tfi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { cormorant_garamod } from "@/app/font";
import { SOCIAL_LINKS } from "@/data/socialLinks";

function Navbar({ dark }: { dark: boolean }) {
  return (
    <nav
      className={`${
        dark ? "text-black" : "text-white"
      } p-8 max-md:p-4 flex absolute justify-between tracking-widest items-center z-40 w-full`}
    >
      {/* --- SECTION 1: LOGO (LEFT) --- */}
      <div className="w-40 flex-shrink-0">
        <Link href="/">
          <Image
            src={"/assets/logoGolden.png"}
            alt="Mystic Studios Logo"
            width={180}
            height={90}
            priority
            className="h-auto w-auto"
          />
        </Link>
      </div>

      {/* --- SECTION 2: LINKS (MIDDLE - DESKTOP ONLY) --- */}
      <div className="hidden lg:flex flex-1 justify-center gap-8 items-center font-medium">
        <Link href="/" className="hover:opacity-60 transition-opacity">
          HOME
        </Link>
        <Link href="/AboutUs" className="hover:opacity-60 transition-opacity">
          ABOUT US
        </Link>
        <Link href="/Films" className="hover:opacity-60 transition-opacity">
          FILMS
        </Link>

        {/* Photography Dropdown */}
        <div className="relative group cursor-pointer py-2">
          <span className="uppercase flex items-center">Photography</span>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-44 bg-white text-black shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            {[
              { name: "Wedding", href: "/Photography/Wedding" },
              { name: "PreWedding", href: "/Photography/PreWedding" },
              { name: "Baby Shoot", href: "/Photography/BabyShoot" },
              { name: "Maternity", href: "/Photography/Maternity" },
              { name: "Fashion", href: "/Photography/Fashion" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 hover:bg-gray-100 text-sm tracking-widest"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <Link href="/BookUs" className="hover:opacity-60 transition-opacity">
          BOOK US
        </Link>
      </div>

      {/* --- SECTION 3: ACTIONS (RIGHT) --- */}
      <div className="w-40 flex justify-end flex-shrink-0">
        {/* INFO Drawer (Desktop Only) */}
        <div className="hidden lg:block">
          <Drawer direction="right" shouldScaleBackground={false}>
            <DrawerTrigger className="cursor-pointer hover:opacity-60 transition-opacity">
              INFO
            </DrawerTrigger>
            <DrawerContent className="fixed right-0 top-0 bottom-0 h-full w-96 bg-white border-none rounded-none z-[100] flex flex-col">
              <DrawerTitle className="sr-only">Studio Information</DrawerTitle>
              <DrawerDescription className="sr-only">
                Contact details and studio bio
              </DrawerDescription>

              <div className="flex justify-end p-8">
                <DrawerClose className="flex items-center gap-2 text-black/50 hover:text-black outline-none">
                  <span className="text-sm">CLOSE</span>
                  <TfiClose size={20} />
                </DrawerClose>
              </div>

              <div className="flex-1 px-10 text-center flex flex-col justify-center gap-10 text-black">
                <p className="text-sm leading-relaxed">
                  Artistic wedding photography company in Chennai and
                  Coimbatore.
                </p>
                <div>
                  <h1
                    className={`${cormorant_garamod.className} text-3xl tracking-widest`}
                  >
                    Follow Us
                  </h1>
                  <div className="mt-6">
                    <SocialIcons />
                  </div>
                </div>
                <p className="font-bold border-t pt-8">
                  contact@mysticstudios.in
                </p>
              </div>
            </DrawerContent>
          </Drawer>
        </div>

        {/* HAMBURGER Drawer (Mobile Only) */}
        <div className="lg:hidden">
          <Drawer direction="right" shouldScaleBackground={false}>
            <DrawerTrigger className="outline-none">
              <RxHamburgerMenu size={30} />
            </DrawerTrigger>
            <DrawerContent className="fixed right-0 top-0 bottom-0 h-full w-[85vw] bg-white border-none rounded-none z-[100] flex flex-col text-black">
              <DrawerTitle className="sr-only">Menu</DrawerTitle>
              <DrawerDescription className="sr-only">
                Browse our photography categories, films, and contact
                information.
              </DrawerDescription>
              <div className="flex justify-end p-6">
                <DrawerClose className="flex items-center gap-2 text-black/50 outline-none">
                  <span className="text-sm">CLOSE</span>
                  <TfiClose size={18} />
                </DrawerClose>
              </div>

              <div className="flex-1 overflow-y-auto px-10 py-4">
                <div className="flex flex-col gap-4 font-bold uppercase text-lg">
                  <Link href="/">HOME</Link>
                  <Link href="/AboutUs">ABOUT US</Link>
                  <Link href="/Films">FILMS</Link>
                  <div className="h-[1px] bg-gray-100 my-1" />
                  <Link href="/Photography/Wedding">Wedding</Link>
                  <Link href="/Photography/PreWedding">PreWedding</Link>
                  <Link href="/Photography/BabyShoot">Baby Shoot</Link>
                  <Link href="/Photography/Maternity">Maternity</Link>
                  <Link href="/Photography/Fashion">Fashion</Link>
                  <div className="h-[1px] bg-gray-100 my-1" />
                  <Link href="/BookUs">Book Us</Link>
                </div>
              </div>

              <DrawerFooter className="px-10 py-8 text-center bg-gray-50 border-t">
                <h1
                  className={`${cormorant_garamod.className} text-2xl tracking-widest`}
                >
                  Follow Us
                </h1>
                <div className="mt-4 flex justify-center">
                  <SocialIcons />
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}

const SocialIcons = () => (
  <div className="flex items-center gap-4 justify-center text-black">
    <Link href={SOCIAL_LINKS.facebook} target="_blank">
      <FaFacebookF />
    </Link>
    <Link href={SOCIAL_LINKS.instagram} target="_blank">
      <FaInstagram />
    </Link>
    <Link href={SOCIAL_LINKS.youtube} target="_blank">
      <FaYoutube />
    </Link>
    <Link href={SOCIAL_LINKS.pinterest} target="_blank">
      <FaPinterest />
    </Link>
  </div>
);

export default Navbar;
