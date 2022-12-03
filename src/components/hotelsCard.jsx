import React from "react";

function HotelCard(props) {
    return (
        <div className="allHotel">
            <div className="img" >
                <img src={props.imgSrc} alt="hotel icon"></img>
            </div>
            <div className="allWritten">
                <div className="name">
                    <h1>{props.name}</h1>
                </div>

                <div className="address">
                    <p>{props.address}</p>
                </div>

                <div className="rating">
                    {props.rating}
                </div>

                <div className="btn">
                    <button>View Deals</button>
                </div>
            </div>
        </div>
    );
}

function createHotelCard(list) {
    return (
        <div className='hotelCard'>
            <HotelCard
                key={list.id}
                name={list.name}
                address={list.address}
                rating={list.ratings}
                imgSrc={list.imgURL}
            />
        </div>)
}
export { createHotelCard };