import React from "react";
import "./AllVehicles.scss";

function AllVehicles() {
  const allVehicles = [
    {
      image: "secondpage-image1.jpeg",
      brandName: "Sport car",
      promotion: "Go above and beypond the ordinary",
      price: "$20, 560",
    },
    {
      image: "secondpage-image2.jpeg",
      brandName: "Sport car",
      promotion: "Designed to go extra miles always",
      price: "$47, 000",
    },
    {
      image: "secondpage-image3.jpeg",
      brandName: "Sport car",
      promotion: "power of the road in the city",
      price: "$23, 560",
    },
    {
      image: "secondpage-image4.jpeg",
      brandName: "Sport car",
      promotion: "Accelerator with no mate",
      price: "$78, 560",
    },
    {
      image: "secondpage-image7.jpeg",
      brandName: "Sport car",
      promotion: "Accelerator with no mate",
      price: "$78, 560",
    },
  ];
  return (
    <main className="allvehicles-main">
      <p className="page-title text-7xl text-center mb-3">
        {" "}
        Explore All Vehicles
      </p>
      <div className="cards">
        {allVehicles.map((vehicle) => (
          <div className="card" key={vehicle.image}>
            <img
              src={vehicle.image}
              alt=""
              className="rounded-l-2xl w-[20rem]"
            />
            <div className="info max-w-[13rem]">
              <h3 className="brand-name mb-4 text-2xl bold">
                {vehicle.brandName}
              </h3>
              <p className="promotion mb-20 bold ">{vehicle.promotion}</p>
              <h3 className="price text-2xl mb-4">{vehicle.price}</h3>
              <button className="explore bg-white text-4 text-gray-900 w-32 rounded-xl ">
                Explore{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AllVehicles;
