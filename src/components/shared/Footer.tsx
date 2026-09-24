import Image from 'next/image';
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
<div className="mx-7 mt-15 mb-8 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">

  <div className="flex items-center gap-2">
    <Image
      src={logo}
      alt="FITLOG logo"
      width={20}
      height={20}
    />
    <div className="font-bold">FITLOG</div>
  </div>

  <p className="text-[#6B7280]">
    © 2026 FitLog — Workout Library. Train hard, log honest.
  </p>

</div>
    );
};

export default Footer;