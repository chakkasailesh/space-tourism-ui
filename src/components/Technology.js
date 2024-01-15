import React, { useState, useContext, useEffect } from 'react'
import {
  spaceportlandscape,
  spaceportpotrait,
  capsulepotrait,
  capsulelandscape,
  vehiclelandscape,
  vehiclepotrait,
} from '../assets/index'
import { Context } from '../App'

const technologies = [
  {
    id: 0,
    name: 'LAUNCH VEHICLE',
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    image1: vehiclelandscape,
    image2: vehiclepotrait,
  },
  {
    id: 1,
    name: 'SPACEPORT',
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    image1: spaceportlandscape,
    image2: spaceportpotrait,
  },
  {
    id: 2,
    name: 'SPACE CAPSULE',
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    image1: capsulelandscape,
    image2: capsulepotrait,
  },
]

const Technology = () => {
  const [index, setIndex] = useState(0)
  const setChild = useContext(Context)
  useEffect(() => {
    setChild('technology')
  }, [setChild])
  return (
    <div className="flex flex-col w-full">
      <p className="text-center lg:text-start text-[1em] tracking-[2.7px] sm:text-[1.25em] sm:tracking-[3.38px] xl:text-[1.75em] xl:tracking-[4.72px] sm:self-start sm:mt-10 lg:mt-0 sm:ml-14 lg:ml-[11.5vw] mb-8 sm:mb-[60px] lg:mb-[26px]">
        <span className="text-white text-opacity-25 font-bold mr-[1em]">
          03
        </span>
        SPACE LAUNCH 101
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:ml-[11.5vw]">
        <div className="font-signature flex lg:flex-col gap-4 lg:gap-8 justify-center mb-[26px] sm:mb-11 lg:mb-0">
          {technologies.map(({ id }) => (
            <button
              key={id}
              onClick={() => {
                setIndex(id)
              }}
              className={`size-10 sm:size-[60px] lg:size-20 rounded-full ${
                id === index
                  ? 'text-dark bg-white'
                  : 'text-white border border-white/25 hover:border-white'
              }`}
            >
              {id + 1}
            </button>
          ))}
        </div>
        <div className="text-center lg:text-start w-[88vw] sm:w-[60vw] lg:w-[33vw] lg:h-[303px]">
          <p className="text-light text-[0.875em] tracking-[2.36px] sm:text-[1em] sm:tracking-[2.6px] mb-2 sm:mb-4 lg:mb-3">
            THE TERMINOLOGY…
          </p>
          <h3 className="font-signature text-[1.5rem] sm:text-[2.5rem] xl:text-[3.5rem] mb-4">
            {technologies[index].name}
          </h3>
          <p className="text-light text-[0.9375em] leading-[25px] sm:text-[1em] sm:leading-7 xl:text-[1.125em] xl:leading-8 font-barlow">
            {technologies[index].description}
          </p>
        </div>
        <div className="order-[-1] lg:order-1 lg:w-[36vw] mb-[34px] sm:mb-14 lg:mb-0">
          <img
            src={technologies[index].image1}
            alt="technology landscape"
            className="lg:hidden"
          />
          <img
            src={technologies[index].image2}
            alt="technology potrait"
            className="hidden lg:block"
          />
        </div>
      </div>
    </div>
  )
}

export default Technology
