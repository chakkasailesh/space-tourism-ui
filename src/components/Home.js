import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center lg:text-left flex flex-col justify-around lg:justify-between lg:items-end lg:flex-row gap-[clamp(81px,20vw,386px)] my-12 sm:my-[90px] lg:my-auto">
      <div className="w-[310px] sm:w-[450px]">
        <h4 className="text-[1em] tracking-[2.7px] sm:text-[1.25em] sm:tracking-[3.38px] lg:text-[1.75em] lg:tracking-[4.72px] text-light">
          SO, YOU WANT TO TRAVEL TO
        </h4>
        <h1 className="font-signature text-[80px] leading-[100px] sm:leading-[150px] sm:text-[150px] my-[1rem] sm:my-6">
          SPACE
        </h1>
        <p className="text-light text-[0.9375em] leading-[25px] sm:text-[1em] sm:leading-7 lg:text-[1.125em] lg:leading-8 font-barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="">
        <NavLink
          to="/destination"
          className="text-[1.25rem] tracking-[1.25px] sm:text-[2rem] sm:tracking-[2px] size-[clamp(150px,30vw,274px)] bg-white text-dark font-signature rounded-full inline-grid place-items-center"
        >
          EXPLORE
        </NavLink>
      </div>
    </div>
  )
}

export default Home
