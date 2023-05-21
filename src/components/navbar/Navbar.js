import React, {useState} from 'react';
import './navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [StateIcon, setStateIcon] = useState({clicked: false});

  const handleClick = () => {
    setStateIcon({clicked: !StateIcon.clicked});
  };

  const MenuItem = [
    {
      title:"Trang chủ",
      url: '/',
      cName: 'nav-links',
      icon: 'fa-solid fa-house-user'
    },
    
    {
      title:"Dịch vụ",
      url: '/service',
      cName: 'nav-links',
      icon: 'fa-solid fa-briefcase'
    },
    {
      title:"Blog",
      url: '/blog',
      cName: 'nav-links',
      icon: 'fa-brands fa-blogger'
    },
    // {
    //   title:"Sign Up",
    //   url: '/signup',
    //   cName: 'nav-links-mobile',
    // },
    {
      title:"Tài khoản",
      url: '/signup',
      cName: 'nav-links',
      icon: 'fa-solid fa-user ',
    },
  ];
  return (
   <>
   
   <nav className='NavbarItems'>
   <h1 className="navbar-logo">Trippy</h1>

   <div className='menu-icons'onClick={handleClick}>
        <i className={StateIcon.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        {/* <i className='fas fa-bars'></i>
        <i className='fas fa-times'></i> */}
      </div>
      <ul className={StateIcon.clicked ? "nav-menu active" :"nav-menu" }>
        {MenuItem.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>{item.title} 
              </Link>
            </li>
          );
        })}

        {/* <li>
        <a href='/'> <i class="fa-solid fa-house-user">Home</i></a>
      </li> */}
      {/* <button>Sign up</button> */}
      </ul>
   </nav>
   </>
  )
}

export default Navbar