import {Fragment, useState} from 'react';
import {Link, Outlet, useNavigate} from 'react-router-dom';

import Logo from './../../../assets/logo.svg';
import Search from './../../../assets/search_icon.svg';
import Cart from './../../../assets/cart_icon.svg';
import Favorite from './../../../assets/love_icon.svg';
import Profile from './../../../assets/user_icon.svg';
import axios from 'axios';

const Navbar = () => {
  axios.defaults.withCredentials = true;
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();


  const isLoggedIn = async () => { 
    try {
      const response = await axios.get("https://reclothserver.azurewebsites.net/auth/user-info",
      // const response = await axios.get("https://localhost:8080/auth/user-info",
        {
          withCredentials: true,
        }
      )

      console.log(response.data);
      return true;
    } catch (error) {
      // console.error(error);
      return false;
    }
  }
  
  const handleProfileClick = async () => {
    const log = await isLoggedIn();
    // check if user is logged in
    if (!log) {
      navigate('/login');
    } else {
      console.log(isLoggedIn());
      // user is logged in, show popup
      setShowPopup(!showPopup);
    }
  }

  const handleLogOut = async () => {
    try {
    console.log("logging out");
      const response = await axios.post('https://reclothserver.azurewebsites.net/auth/logout',
      // const response = await axios.post('http://localhost:8080/auth/logout',
        {
          withCredentials: true,
        }
      );
      console.log("response", response.data);
      // window.location.reload();
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <div className='flex fixed bg-white top-0 w-full h-20 items-center px-32 justify-between border-b border-[#929191]'>
        <div className='flex h-20 items-center space-x-12 font-bold'>
          <Link to={"/"}>
            <img src={Logo} alt='' className='h-32'/>
          </Link>
          <div className='flex space-x-12 opacity-0 lg:opacity-100'>
            <a>Men</a>
            <a>Women</a>
            <a>Brands</a>
          </div>
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
              <Link to={"/sell-donate"}>
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