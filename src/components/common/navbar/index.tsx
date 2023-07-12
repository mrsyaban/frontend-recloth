// import {Fragment} from 'react';
// import {Outlet, Link} from 'react-router-dom';

// import Logo from './../../../assets/logo.svg';
// import Search from './../../../assets/search_icon.svg';
// import Cart from './../../../assets/cart_icon.svg';
// import Favorite from './../../../assets/love_icon.svg';
// import Profile from './../../../assets/user_icon.svg';


// const Navbar = () => {
//   return (
//     <Fragment>
//       <div className='flex h-20 items-center px-32 justify-between border border-[#929191]'>
//         <div className='flex h-20 items-center space-x-12 font-bold'>
//           <Link to='/'>
//           <img src={Logo} alt='' className='h-32'/>
//           </Link>
//           <a>Pria</a>
//           <a>Wanita</a>
//           <a>Brands</a>
//         </div>
//         <div className='flex h-20 items-center space-x-12 font-bold'>
//           <img src={Search} alt='' className='w-7'/>
//           <img src={Cart} alt='' className='w-7'/>
//           <img src={Favorite} alt='' className='w-7'/>
//           <img src={Profile} alt='' className='w-7'/>
//         </div>
//       </div>
//       <Outlet/>
//     </Fragment>
//   );
// }

// export default Navbar;

import {Fragment, useState} from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';

import Logo from './../../../assets/logo.svg';
import Search from './../../../assets/search_icon.svg';
import Cart from './../../../assets/cart_icon.svg';
import Favorite from './../../../assets/love_icon.svg';
import Profile from './../../../assets/user_icon.svg';
import axios from 'axios';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isLoggedIn = () => {
    const token = localStorage.getItem('token'); // atau gunakan document.cookie untuk membaca cookie
    console.log(token);
    if (token) {
      // token JWT tersimpan di dalam localStorage atau cookie, pengguna sudah login
      return true;
    } else {
      // token JWT tidak tersimpan di dalam localStorage atau cookie, pengguna belum login
      return false;
    }
  }
  
  const handleProfileClick = () => {
    console.log("ppp");
    // check if user is logged in
    // if (!isLoggedIn()) {
    // eslint-disable-next-line no-constant-condition
    if (true) { // Jangan lupa diubah dengan yang dicomment di atas
      // user is not logged in, redirect to login page
      navigate('/login');
    } else {
      // user is logged in, show popup
      setShowPopup(!showPopup);
    }
  }

  const handleLogOut = async () => {
    try {
    console.log("logging out");
      const response = await axios.post('https://reclothserver.azurewebsites.net/auth/logout');
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <div className='flex fixed bg-white top-0 w-full h-20 items-center px-32 justify-between border-b border-[#929191]'>
        <div className='flex h-20 items-center space-x-12 font-bold'>
          <img src={Logo} alt='' className='h-32'/>
          <div className='flex space-x-12 opacity-0 lg:opacity-100'>
            <a>Men</a>
            <a>Women</a>
            <a>Brands</a>
          </div>
        </div>
        <div className='flex h-20 items-center space-x-12 font-bold'>
          <img src={Search} alt='' className='w-7'/>
          <img src={Cart} alt='' className='w-7'/>
          <img src={Favorite} alt='' className='w-7'/>
          <img src={Profile} alt='' className='w-7' onClick={handleProfileClick}/>
        </div>
      </div>
      {showPopup && (
        <div className='absolute top-20 right-0 bg-white border border-[#929191]'>
          <ul>
            <li>
              <Link to={"/sell"}>
                Sell and Donate
              </Link>
            </li>
            <li>
              <Link to={"/history"}>
                History
              </Link>
            </li>
            <li>
              <button onClick={handleLogOut}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
      <Outlet/>
    </Fragment>
  );
}

export default Navbar;