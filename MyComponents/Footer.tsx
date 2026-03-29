import { cormorant_garamod_italic } from "@/app/font";
import Image from "next/image";
import Link from "next/link";
import { TfiClose } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { cormorant_garamod } from "@/app/font";
import { SOCIAL_LINKS } from "@/data/socialLinks";

function Footer() {
  return (
    <div className="bg-[#FFFFFF] text-black">
      <div className="flex justify-between items-center p-20 max-lg:flex-col max-lg:gap-10">
        <div className="text-center">
          <h1>FOLLOW US</h1>
          <p>contact@subhvivah.in</p>
          <div>
            <div className="flex items-center max-sm:flex-col gap-2 mx-auto mt-2">
              <div className="flex items-center gap-2 ">
                <Link href={SOCIAL_LINKS.facebook} target="_blank">
                  <FaFacebookF />
                </Link>
                <p>━━━</p>
                <Link href={SOCIAL_LINKS.instagram} target="_blank">
                  <FaInstagram />
                </Link>
              </div>

              <div className="flex items-center gap-2 mx-auto ">
                <p className="max-sm:hidden">━━━</p>
                <Link href={SOCIAL_LINKS.linkedIn} target="_blank">
                  <FaLinkedin />
                </Link>
                <p>━━━</p>
                <Link href={SOCIAL_LINKS.pinterest} target="_blank">
                  <FaPinterest />
                </Link>
                <p>━━━</p>
                <Link href={SOCIAL_LINKS.youtube} target="_blank">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-32 bg-[#c5c5c5] w-0.5 max-lg:hidden"></div>
        <div className="relative h-20 w-40">
          <Image
            src={"/assets/logoGolden.png"}
            width={180}
            height={60}
            alt="bnalngdg"
            className="object-contain"
          />
        </div>
        <div className="h-32 bg-[#c5c5c5] w-0.5 max-lg:hidden"></div>
        <div className="text-center">
          <p>Reach Us</p>
          <p>+91 6203767622 | +92 923413221</p>
        </div>
      </div>
      <div className="bg-[#F5F0EB]">
        <div
          className={`h-10 px-10  flex items-center justify-between max-w-5xl mx-auto ${cormorant_garamod_italic.className}`}
        >
          <p>© Copyrights vivah Studios. All Rights Reserved.</p>
          <p>Powered by Hero223</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
