import React, { useState } from 'react'
import { moon, mars, europa, titan } from '../assets'

const destinations = [
  {
    id: 0,
    name: 'MOON',
    description:
      'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    distance: '384,400 KM',
    time: '3 DAYS',
    image: moon,
  },
  {
    id: 1,
    name: 'MARS',
    description:
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 MIL. KM',
    time: '9 MONTHS',
    image: mars,
  },
  {
    id: 2,
    name: 'EUROPA',
    description:
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 MIL. KM',
    time: '3 YEARS',
    image: europa,
  },
  {
    id: 3,
    name: 'TITAN',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 BIL. KM',
    time: '7 YEARS',
    image: titan,
  },
]

const Destination = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className="w-[87vw] sm:w-[75vw] lg:w-auto mt-6 sm:mt-[5.2vw]">
      <p className="text-[1em] tracking-[2.7px] sm:text-[1.25em] sm:tracking-[3.38px] lg:text-[1.75em] lg:tracking-[4.72px] mb-8 sm:mb-16 text-center sm:text-start">
        <span className="text-white text-opacity-25 font-bold mr-[1em]">
          01
        </span>
        PICK YOUR DESTINATION
      </p>
      <div className="flex flex-col items-center lg:flex-row lg:gap-[11vw] mb-16 lg:mb-28">
        <img
          src={destinations[index].image}
          alt={destinations[index].name}
          className="size-[clamp(170px,39vw,445px)] mb-6 sm:mb-12 rotate"
        />
        <div className="lg:w-[31vw] flex flex-col items-center lg:items-start">
          <div className="flex text-light text-[0.875em] tracking-[2.36px] sm:text-[1em] sm:tracking-[2.6px] gap-7 sm:gap-9">
            {destinations.map(({ id, name }) => (
              <button
                key={name}
                onClick={() => setIndex(id)}
                className={`pb-2 sm:pb-3 ${
                  index === id && 'btn-active'
                } hover:border-b-white/50 hover:border-b-[3px]`}
              >
                {name}
              </button>
            ))}
          </div>
          <h1 className="font-signature text-[56px] sm:text-[80px] lg:text-[100px]">
            {destinations[index].name}
          </h1>
          <p className="text-center lg:text-start text-light text-[0.9375em] leading-[25px] sm:text-[1em] sm:leading-7 lg:text-[1.125em] lg:leading-8 font-barlow mb-8 sm:mb-16">
            {destinations[index].description}
          </p>
          <div className="text-center lg:text-start flex flex-col sm:flex-row sm:gap-[50px] lg:gap-[4.7vw] sm:justify-center lg:justify-normal border-t-[#383B4B] border-t pt-7">
            <div>
              <p className="text-[0.875em] tracking-[2.36px] text-light">
                AVG. DISTANCE
              </p>
              <h3 className="font-signature text-[1.75em]">
                {destinations[index].distance}
              </h3>
            </div>
            <div>
              <p className="text-[0.875em] tracking-[2.36px] text-light">
                EST. TRAVEL TIME
              </p>
              <h3 className="font-signature text-[1.75em]">
                {destinations[index].time}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
