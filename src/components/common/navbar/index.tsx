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

  const getCookie = (cookieName: string) => {
    if (document.cookie.length > 0) {
        let cookieStart = document.cookie.indexOf(cookieName + '=');
        if (cookieStart !== -1) {
            cookieStart = cookieStart + cookieName.length + 1;
            let cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            return window.unescape(document.cookie.substring(cookieStart, cookieEnd));
        }
    }
    return '';
  };

  const isLoggedIn = () => { // TODO
    const token = localStorage.getItem('token'); // atau gunakan document.cookie untuk membaca cookie
    return true;
    // if (token) {
    //   // token JWT tersimpan di dalam localStorage atau cookie, pengguna sudah login
    //   return true;
    // } else {
    //   // token JWT tidak tersimpan di dalam localStorage atau cookie, pengguna belum login
    //   return false;
    // }
  }
  
  const handleProfileClick = () => {
    // check if user is logged in
    if (!isLoggedIn()) {
    // if (false) { // Jangan lupa diubah dengan yang dicomment di atas
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
      // const response = await axios.post('https://localhost:8080/auth/logout');
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

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
          <Link to={"/cart"}>
            <img src={Cart} alt='' className='w-7'/>
          </Link>

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