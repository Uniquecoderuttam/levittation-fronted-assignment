import React from 'react'

const Navbar = () => {
  return (
    {showmenu &&
        <div className="header">

            <Link to={'/'}>Home</Link>
            <Link to={'/customer'}>Customer</Link>
            
            
        </div>
    }
  )
}

export default Navbar;
