import Logo from "@/assets/logosaas.png"
import Image from "next/image"
import Link from "next/link"
import X from "@/assets/social-x.svg"
import Insta from "@/assets/social-insta.svg"
import Linkedin from "@/assets/social-linkedin.svg"
import Pin from "@/assets/social-pin.svg"
import Youtube from "@/assets/social-youtube.svg"

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt="Logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Customers</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Help</Link>
          <Link href="#">Careers</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <X />
          <Insta />
          <Linkedin />
          <Pin />
          <Youtube />
        </div>
        <p className="mt-6">
          &copy; 2024 Site Architect,Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
