import { BiBell, BiHome } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdGraphicEq } from 'react-icons/md';

const Footer = () => {
  return (
    <>
      <footer className='w-full h-[80px] fixed bottom-0'>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='flex justify-center items-center gap-16 text-[#BDBDBD]'>
            <BiHome size={25} />
            <MdGraphicEq size={25} />
            <BiBell size={25} />
            <CgProfile size={25} />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
