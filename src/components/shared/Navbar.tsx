import Link from 'next/link';
import logo from '@/assets/logo.png'
import Image from 'next/image';

const Navbar = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm ml-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className=" dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        <li><Link href='/listed-plan'>Workouts</Link></li>
        <li><Link href='/listed-plan'>My Plan</Link></li>
      </ul>
    </div>
<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 lg:static lg:translate-x-0">
  <Image
    src={logo}
    alt="FITLOG logo"
    width={25}
    height={25}
  />
  <div className="font-bold">FITLOG</div>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><Link href='/listed-plan' className='text-[#C2F800] rounded-2xl px-3'>Workouts</Link></li>
        <li><Link href='/listed-plan' className='rounded-2xl px-3 text-[#9CA3AF]'>My Plan</Link></li>
    </ul>
  </div>
  <div className="navbar-end mr-3">
    <button className="btn bg-[#1D232A]">Plan</button>
    <button className="btn text-[#9CA3AF] bg-[#1D232A]">Saved</button>
  </div>
</div>

    );
};

export default Navbar;