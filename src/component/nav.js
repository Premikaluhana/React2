import React from 'react';
import ScreenShot from '../media/logo.221f6b13e6eaaad5828372464f73a1a4.svg'
import ScreenShot1 from '../media/grocery-store.png'
import ScreenShot2 from '../media/user.png'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Nav = () => {
  return (
    <div className='nav'>
      <motion.div className='logo'
      animate={{rotate:360}}
      transition={{duration:1 , ease:"easeIn" ,}}
      >
        <img src={ScreenShot} />
      </motion.div>
      <div className='menus'>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Products</Link></li>
      </div>
      <div className='C'>
        <p className='cart'>Cart<img src={ScreenShot1} width='28px'/></p>
        <p className='login'>Login<img src={ScreenShot2} width='28px'/></p>
      </div>
    </div>
  );
}

export default Nav;
