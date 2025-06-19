import HeroImage from '../assets/generated-image-1474ef88-294f-4c32-a4f2-8a1b36be1cd2.png'
import { Link } from 'react-router'

export default function Hero() {
  return (
    <div className='relative '>
      <img src={HeroImage} alt="HeroImage" className='w-full'/>
      <div className='absolute top-[50%] -mt-40 w-10/33 flex flex-col gap-10 ml-30 '>
        <h4 className='text-2xl font-bold text-shadow-[#FF7878] text-shadow-lg/20   '>Joyful experience</h4>
        <h1 className='text-[#FF6265] font-extrabold text-[40px] text-shadow-black text-shadow-lg/50 '>Allora Exists For The Sake Of Making Children Happy. “Joy” Is What We Aim At</h1>
        {/* <Link to='/Shop'>jgu</Link> */}
      </div>
    </div>
  )
}
