import productImg from "@/assets/product-image.png"
import pyramidImg from "@/assets/pyramid.png"
import tubeImg from "@/assets/tube.png"
import Image from "next/image"
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
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
        <div className="relative">
          <Image src={productImg} alt="Product image" className="mt-10" />
          <Image
            src={pyramidImg}
            alt="Product image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImg}
            alt="Product image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  )
}
