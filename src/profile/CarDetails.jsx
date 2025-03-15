import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../configs"; // Import DB Config
import { CarListing } from "../../configs/schema"; // Import Schema
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CarDetail = () => {
  const { id } = useParams(); // Get car ID from URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        console.log("Fetching car with ID:", id);
        
        const response = await db
          .select()
          .from(CarListing)
          .where(CarListing.id.equals(Number(id))); // Fix Query
    
        console.log("Database Response:", response); // Log Response
    
        if (response.length > 0) {
          setCar(response[0]); 
        } else {
          setCar(null);
        }
      } catch (error) {
        console.error("Error fetching car details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetail();
  }, [id]);

  if (loading) return <p>Loading car details...</p>;

  return (
    <>
    <Header/>
    <div className="container mt-5">
      {car ? (
        <div>
          <h2 className="fw-bold">{car.listingTitle}</h2>
          <p><strong>Price:</strong> ${car.sellingPrice}</p>
          <p><strong>Make:</strong> {car.make} - <strong>Model:</strong> {car.model}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Mileage:</strong> {car.mileage} km</p>
          <p><strong>Condition:</strong> {car.condition}</p>
          
          {/* Display Images */}
          {car.images && car.images.length > 0 ? (
            <div className="image-gallery">
              {car.images.map((img, index) => (
                <img key={index} src={img} alt={car.listingTitle} className="car-img" />
              ))}
            </div>
          ) : (
            <p>No images available.</p>
          )}
        </div>
      ) : (
        <p>No Car Details Found.</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default CarDetail;
