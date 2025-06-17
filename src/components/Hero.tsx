import HeroImage from '../assets/generated-image-1474ef88-294f-4c32-a4f2-8a1b36be1cd2.png'

export default function Hero() {
  return (
    <div>
        <img src={HeroImage} alt="HeroImage" className='w-full h-260' />
        <div className="flex flex-row w-1/2">
            <h5>Joyful Experience</h5>
            <h1>Allora exists for the sake of making children happy. “joy” is what we aim at</h1>
        </div>
    </div>
  )
}
