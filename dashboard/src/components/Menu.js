import React, {useState} from 'react';
import { Link } from 'react-router-dom';
function Menu() {

    const [selectedMenu, setSelectedMenu]=useState(0);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen]=useState(false);

    const handleMenuClick = (index) =>{
        setSelectedMenu(index);
    };
    const handleProfileClick = (index) =>{
        setIsProfileDropdownOpen(!isProfileDropdownOpen);
    };

    return ( 
        <div className='menu-container'>
            <div className='logo'>
            <img src='logo.png' style={{width:"50px"}}></img>
            </div>
            
            <div className='menus'>
                <ul>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/" onClick={()=>handleMenuClick(0)}><p>Dashboard</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/orders" onClick={()=>handleMenuClick(1)}><p>Orders</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/holdings" onClick={()=>handleMenuClick(2)}><p>Holdings</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/positions" onClick={()=>handleMenuClick(3)}><p>Positions</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/funds" onClick={()=>handleMenuClick(4)}><p>Funds</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration:"none"}} to="/apps" onClick={()=>handleMenuClick(5)}><p>Apps</p></Link>
                    </li>
                    
                </ul>
                <hr/>
                <div className='profile' onClick={handleProfileClick}>
                    <div className='avatar'>ZU</div>
                    <p className='username'>USERID</p>
                </div>
                
            </div>
        </div>
     );
}

export default Menu;