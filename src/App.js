import React from "react";
import navilst from './components/navlistarray';
import { createNavItems } from './components/navbar';
import hotelList from './components/hotelsArray';
import Footer from './components/footer';
import { createHotelCard } from './components/hotelsCard';

function App() {
    return (
        <div>
            <div className="scrollmenu">
                {navilst.map(createNavItems)}
            </div>
            <h1 >Popular Hotels List</h1>
            {hotelList.map(createHotelCard)}
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}
export default App;