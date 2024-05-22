// import React from 'react';
//  import "./booking.css"

 
// function Sidebar12({ onMenuItemClick }) {
//     return (
//         <div className="sidebar1">
//             <a href="#" onClick={() => onMenuItemClick('mybookings')}>My Bookings</a>
//             <div className="dropdown1">
//                 <a href="#" onClick={() => onMenuItemClick('allbookings')}>All Bookings</a>
//                 <div className="dropdown-content1">
//                     <a href="#" onClick={() => onMenuItemClick('alberta')}>ALBERTA</a>
//                     <a href="#" onClick={() => onMenuItemClick('toronto')}>TORONTO</a>
//                     <a href="#" onClick={() => onMenuItemClick('trailer')}>TRAILER</a>
//                 </div>
//             </div>
//             <a href="#" onClick={() => onMenuItemClick('postbookings')}>Post Bookings</a>

//              {/* <a href="#">Log Out</a> as we will logout successfully. */}
//             <a href="#" onClick={() => onMenuItemClick('logout')}>Log Out</a>
//         </div>
//     );
// } 

// export default Sidebar12;
import React, { useState } from 'react';
import "./booking.css"

function Sidebar12({ onMenuItemClick }) {
    const [activeItem, setActiveItem] = useState('');

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        onMenuItemClick(item);
    };

    return (
        <div className="sidebar1">
            <a 
                href="#" 
                className={activeItem === 'mybookings' ? 'active' : ''} 
                onClick={() => handleMenuItemClick('mybookings')}
            >
                My Bookings
            </a>
            <div className="dropdown1">
                <a 
                    href="#" 
                    className={activeItem === 'allbookings' ? 'active' : ''} 
                    onClick={() => handleMenuItemClick('allbookings')}
                >
                    All Bookings
                </a>
                <div className="dropdown-content1">
                    <a 
                        href="#" 
                        className={activeItem === 'alberta' ? 'active' : ''} 
                        onClick={() => handleMenuItemClick('alberta')}
                    >
                        Alberta
                    </a>
                    <a 
                        href="#" 
                        className={activeItem === 'toronto' ? 'active' : ''} 
                        onClick={() => handleMenuItemClick('toronto')}
                    >
                        Toronto
                    </a>
                    <a 
                        href="#" 
                        className={activeItem === 'trailer' ? 'active' : ''} 
                        onClick={() => handleMenuItemClick('trailer')}
                    >
                        Trailer
                    </a>
                </div>
            </div>
            <a 
                href="#" 
                className={activeItem === 'postbookings' ? 'active' : ''} 
                onClick={() => handleMenuItemClick('postbookings')}
            >
                Post Bookings
            </a>
            <a 
                href="#" 
                className={activeItem === 'logout' ? 'active' : ''} 
                onClick={() => handleMenuItemClick('logout')}
            >
                Log Out
            </a>
        </div>
    );
}

export default Sidebar12;

