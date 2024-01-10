import React, { useState } from 'react'
import { anousheh, douglas, mark, victor } from '../assets'

const crewmembers = [
  {
    id: 0,
    designation: 'COMMANDER',
    name: 'DOUGLAS HURLEY',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    image: douglas,
  },
  {
    id: 1,
    designation: 'MISSION SPECIALIST ',
    name: 'MARK SHUTTLEWORTH',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    image: mark,
  },
  {
    id: 2,
    designation: 'PILOT',
    name: 'VICTOR GLOVER',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    image: victor,
  },
  {
    id: 3,
    designation: 'FLIGHT ENGINEER',
    name: 'ANOUSHEH ANSARI',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    image: anousheh,
  },
]

const Crew = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="flex flex-col items-center lg:items-start gap-[clamp(32px,8vw,60px)] lg:gap-0 w-[90vw] lg:w-full lg:ml-[11vw]">
      <p className="text-[1em] tracking-[2.7px] sm:text-[1.25em] sm:tracking-[3.38px] xl:text-[1.75em] xl:tracking-[4.72px] sm:self-start sm:mt-10 lg:mt-0">
        <span className="text-white text-opacity-25 font-bold mr-[1em]">
          02
        </span>
        MEET YOUR CREW
      </p>
      <div className="flex flex-col lg:flex-row flex-grow w-[87vw] sm:w-[60vw] lg:w-auto gap-[clamp(32px,5vw,81px)] lg:gap-0">
        <div className="self-center flex flex-col lg:basis-1/2">
          <h3 className="text-center lg:text-start font-signature text-[1em] sm:text-[1.5em] xl:text-[2em] text-white/50">
            {crewmembers[index].designation}
          </h3>
          <h2 className="text-center lg:text-start font-signature text-[1.5em] sm:text-[2.5em] xl:text-[3.5em] mt-2 mb-4">
            {crewmembers[index].name}
          </h2>
          <p className="text-center lg:text-start text-light text-[0.9375em] leading-[25px] sm:text-[1em] sm:leading-7 xl:text-[1.125em] xl:leading-8 font-barlow lg:w-3/5">
            {crewmembers[index].description}
          </p>
          <div className="flex gap-4 lg:gap-6 order-[-1] sm:order-1 justify-center lg:justify-normal mb-8 sm:mb-0 sm:mt-10 lg:mt-[120px]">
            {crewmembers.map(({ id, name }) => (
              <button
                key={name}
                className={`size-[10px] lg:size-[15px] rounded-full ${
                  index === id
                    ? 'bg-white'
                    : 'bg-white/[17.44%] hover:bg-white/50'
                }`}
                onClick={() => setIndex(id)}
              ></button>
            ))}
          </div>
        </div>
        <div className="flex items-end order-[-1] sm:order-1 justify-center lg:justify-norma h-[60vw] sm:h-auto  border-b-[#383B4B] border-b sm:border-b-0">
          <img
            src={crewmembers[index].image}
            alt={crewmembers[index].name}
            className=" max-h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Crew
