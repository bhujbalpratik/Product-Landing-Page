"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import cogImage from "@/assets/cog.png"
import cylinderImg from "@/assets/cylinder.png"
import noodleImg from "@/assets/noodle.png"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const Hero = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [180, -180])
  const rotate = useTransform(scrollYProgress, [0, 1], [30, -360])

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Productivity meets potential
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              embodies the idea that when you harness your full capabilities,
              you unlock limitless productivity. It&apos;s a reminder that
              efficiency and success come from aligning your strengths with
              purposeful action.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span> <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="cogImage"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{ translateY: [-30, 30] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={cylinderImg.src}
              alt="cylinderImage"
              height={220}
              width={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ translateY: translateY }}
            />
            <motion.img
              src={noodleImg.src}
              alt="Noodle Image"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px]"
              style={{ rotate: rotate }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
