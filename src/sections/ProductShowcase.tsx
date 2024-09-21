"use client"
import productImg from "@/assets/product-image.png"
import pyramidImg from "@/assets/pyramid.png"
import tubeImg from "@/assets/tube.png"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const productRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const { scrollYProgress: productYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  })

  const rotateX = useTransform(productYProgress, [0, 0.6], [60, 1])
  const opacity = useTransform(productYProgress, [0, 0.4], [0.1, 1])

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])
  const rotate = useTransform(scrollYProgress, [0, 1], [30, -360])
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Accelerate your progress.</div>
          </div>
          <h2 className="section-title mt-5">
            A streamlined method for tracking growth.
          </h2>
          <p className="section-description mt-5">
            Seamlessly bring your concepts to life with a fully functional SaaS
            website in minutes, using this template.
          </p>
        </div>
        <motion.div
          className="relative"
          ref={productRef}
          style={{
            opacity,
            rotateX,
            transformPerspective: "900px",
          }}
        >
          <Image src={productImg} alt="Product image" className="mt-10" />
          <motion.img
            src={pyramidImg.src}
            alt="Product image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{ translateY, rotate }}
          />
          <motion.img
            src={tubeImg.src}
            alt="Product image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{ translateY, rotate }}
          />
        </motion.div>
      </div>
    </section>
  )
}
