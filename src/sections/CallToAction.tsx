import ArrowRight from "@/assets/arrow-right.svg"
import StarImg from "@/assets/star.png"
import springImg from "@/assets/spring.png"
import Image from "next/image"

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with app designed to track your
            progress and motivate your efforts.
          </p>
          <Image
            src={StarImg}
            alt="star image"
            width={360}
            className="absolute -left-[360px] -top-[137px]"
          />
          <Image
            src={springImg}
            alt="Spring image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span> <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
