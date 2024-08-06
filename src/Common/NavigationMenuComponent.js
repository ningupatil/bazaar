import React from "react";
import { Link  } from 'react-router-dom';

const NavigationMenuComponent = (props) => {
    return (
        <nav>
            <ul>
                <div style={{ float: 'left', margin: '5px' }}>
                    <Link to="/" class="list">
                        Home
                    </Link>
                </div>
                <div style={{ float: 'left', margin: '5px' }}>
                <Link to="/products" class="list">
                Products
                </Link>
                </div>
                <div  style={{ float: 'left', margin: '5px' }}>
                <Link to="/cart" class="list">
                Cart
                </Link>
                    </div>
            
            </ul>
        </nav>
    )
}

export default NavigationMenuComponent;