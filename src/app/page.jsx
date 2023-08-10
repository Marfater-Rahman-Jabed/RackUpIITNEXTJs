
import Link from 'next/link'
import Logo from '../Assests/back.png'
import { BsArrowRightCircle } from 'react-icons/bs';

export default function Home() {

  return (
    <main className="   w-full" >
      <div className="hero " style={{ backgroundImage: `url(${Logo.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh', }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 lg:text-8xl md:text-8xl text-6xl font-bold ">Welcome To RackUp</h1>
            <p className="mb-5 text-center font-semibold text-amber-400">Increase brand visibility on customer&apos;s phones!. Seamlessly integrate your physical stores with our app/web service. Enhance the shopping experience.</p>
            <Link href='https://rackupit.com/' className='btn btn-outline bg-pink-800 hover:bg-pink-600 text-white mt-2 text-xl'>Get Explore<BsArrowRightCircle className='text-2xl'></BsArrowRightCircle></Link>
          </div>
        </div>
      </div>

    </main>
  )
}
