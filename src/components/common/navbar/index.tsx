import {Fragment} from 'react';
import {Outlet} from 'react-router-dom';

import Logo from './../../../assets/logo.svg';
import Search from './../../../assets/search_icon.svg';
import Cart from './../../../assets/cart_icon.svg';
import Favorite from './../../../assets/love_icon.svg';
import Profile from './../../../assets/user_icon.svg';


const Navbar = () => {
  return (
    <Fragment>
      <div className='flex h-20 items-center px-32 justify-between border border-[#929191]'>
        <div className='flex h-20 items-center space-x-12 font-bold'>
          <img src={Logo} alt='' className='h-32'/>
          <a>Pria</a>
          <a>Wanita</a>
          <a>Brands</a>
        </div>
        <div className='flex h-20 items-center space-x-12 font-bold'>
          <img src={Search} alt='' className='w-7'/>
          <img src={Cart} alt='' className='w-7'/>
          <img src={Favorite} alt='' className='w-7'/>
          <img src={Profile} alt='' className='w-7'/>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  );
}

export default Navbar;