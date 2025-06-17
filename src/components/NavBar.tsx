// import {Link} from 'react-router-dom'
import { CgProfile, CgShoppingCart } from 'react-icons/cg'
interface navLink {
    name: string
    href: string
}
import Logo from '../assets/Alora LOGO with layers.png'


let navLinks: navLink[] = [
    {name: "Home", href: "/"},
    {name: "Shop", href: "/Shop"},
    {name: "About Us", href: "/AboutUs"},
    {name: "Contact Us", href: "/ContactUs"},

    
]

export default function NavBar() {
  return (
    <div>
        <nav className="flex flex-row justify-between pt-3 pb-3 align-middle h-full">
            <div>
                <img src={Logo} alt="Allora's Logo" className='w-10 h-10' />
            </div>
            <div className='flex flex-row align-middle mt-5'>
                <ul className="flex flex-row gap-20 justify-center font-bold align-middle before:bg-red-600 ">
                {navLinks.map((link, key)=><li key={key} className=' '><a href={link.href} className='hover:underline underline-offset-8'>{link.name}</a></li>)}
            </ul>
            </div>
            <div className='flex flex-row align-middle h-full m-3 '>
                <CgShoppingCart className='inline text-4xl  mx-3 '/>
                <CgProfile className='text-4xl inline mx-3'/>
            </div>
        </nav>
    </div>
  )
}
