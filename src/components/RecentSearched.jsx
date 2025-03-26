import React, { useEffect, useState } from "react";
import { db } from "../../configs";
import { CarListing } from "../../configs/schema";
import { Link } from "react-router-dom";
import "./RecentSearched.css";

const RecentSearched = () => {
  const [recentCars, setRecentCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentCars = async () => {
      try {
        const response = await db
          .select()
          .from(CarListing)
          .orderBy(CarListing.id.desc())
          .limit(3);

        console.log("Fetched Recent Cars:", response); // Debugging log
        setRecentCars(response);
      } catch (error) {
        console.error("Error fetching recent cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentCars();
  }, []);

  if (loading) return <p>Loading recent searches...</p>;

  return (
    <div className="recent-search-container">
      <h2 className="recent-title">Recently Added Cars</h2>
      <div className="recent-grid">
        {recentCars.length > 0 ? (
          recentCars.map((car) => (
            <div key={car.id} className="car-card">
              <img
                src={car.images?.[0] || "/default-car.jpg"} // Handle missing images
                alt={car.listingTitle || "Car Image"}
                className="car-image"
              />
              <div className="car-info">
                <h3>{car.listingTitle || "No Title"}</h3>
                <p>{car.make} {car.model} - {car.year}</p>
                <p className="price">${car.sellingPrice}</p>
                <Link to={`/car/${car.id}`} className="details-btn">View Details</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No recent cars available.</p>
        )}
      </div>
    </div>
  );
};

export default RecentSearched;
