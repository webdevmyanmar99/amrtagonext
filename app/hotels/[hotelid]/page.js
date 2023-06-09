"use client";
import { useState, useEffect } from "react";

const Singlehotel = ({ params }) => {
  const hotelid = params.hotelid;
  const [hotel, setHotel] = useState();
  async function getHotel() {
    const response = await fetch(`https://amrtago.com/place/${hotelid}`);
    const hotel = await response.json();

    setHotel(hotel);
  }
  useEffect(() => {
    getHotel();
    // eslint-disable-next-line
  }, []);

  return hotel ? (
    <div className="p-4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="max-w-[1400px] h-[300px] flex w-full mx-auto overflow-x-scroll no-scrollbar">
          {hotel.images.map((image) => (
            <img
              src={
                !image
                  ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
                  : image.pathimages
              }
              alt={image._id}
              className="p-2 w-[320px] mx-auto"
            />
          ))}
        </div>
        {/* <div className="w-[320px] h-[300px] ">
          <img
            src={
              !hotel.images
                ? "https://amrtago.sgp1.digitaloceanspaces.com/noitem.jpg"
                : hotel.images[0].pathimages
            }
            alt={hotel._id}
            className="w-full h-full p-2"
          />
        </div> */}
        <div>
          <h3>{hotel.localize.name[1]}</h3>
          <p>{hotel.localize.description[1]}</p>
          <h5 className="text-green-600 font-bold text-sm">
            {hotel.localize.address[1].fulladdress}၊
            {hotel.localize.address[1].stateanddiv}
          </h5>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-orange-700 text-center text-xl">Loading ....</div>
  );
};

export default Singlehotel;
