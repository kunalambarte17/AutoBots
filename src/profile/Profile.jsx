import Header from '@/components/Header'
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { db } from "./../../configs";
import { CarListing, CarImages } from "./../../configs/schema";
import { useNavigate } from "react-router-dom";

function Profile() {

  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const allListings = await db.select().from(CarListing);

        const allImages = await db.select().from(CarImages);

        const listingsWithImages = allListings.map((listing) => ({
          ...listing,
          images: allImages.filter((img) => img.carListingId === listing.id),
        }));

        setListings(listingsWithImages);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };
    fetchListings();
  }, []);
  

  return (
    <div>
      <Header/>
      <div className='mt-4'>
        <div className='d-flex justify-content-around align-items-center gap-9'>
            <h2 className='fs-2 fw-bold'>My Listing</h2>
            <Link to={'/add-Listing'}>
            <button className='btn btn-primary'>+ Add New Listings</button>
            </Link>
        </div>
        <div className="container">
          <div className="row mt-5">
            {listings.length > 0 ? (
              listings.map((listing) => (
                <div key={listing.id} className="col-md-4 mb-4">
                  <div className="card shadow-sm">
                    {listing.images.length > 0 && (
                      <img
                        src={listing.images[0].imageUrl}
                        alt={listing.listingTitle}
                        className="card-img-top"
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{listing.listingTitle}</h5>
                      <p className="card-text">Price: ${listing.sellingPrice}</p>
                      <p className="card-text">{listing.category}</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/listing/${listing.id}`)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No listings found.</p>
            )}
          </div>
          </div>
      </div>
    </div>
  )
}

export default Profile


// import React, { useEffect, useState } from "react";
// import { db } from "./../../configs";
// import { CarListing, CarImages } from "./../../configs/schema";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const [listings, setListings] = useState([]);
//   const navigate = useNavigate();

//   // Fetch car listings and their images
//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         // ✅ Fetch all car listings
//         const allListings = await db.select().from(CarListing);

//         // ✅ Fetch all images
//         const allImages = await db.select().from(CarImages);

//         // ✅ Merge images with corresponding listings
//         const listingsWithImages = allListings.map((listing) => ({
//           ...listing,
//           images: allImages.filter((img) => img.carListingId === listing.id),
//         }));

//         setListings(listingsWithImages);
//       } catch (error) {
//         console.error("Error fetching listings:", error);
//       }
//     };

//     fetchListings();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2 className="fw-bold mb-4">My Listings</h2>
//       <div className="row">
//         {listings.length > 0 ? (
//           listings.map((listing) => (
//             <div key={listing.id} className="col-md-4 mb-4">
//               <div className="card shadow-sm">
//                 {listing.images.length > 0 && (
//                   <img
//                     src={listing.images[0].imageUrl}
//                     alt={listing.listingTitle}
//                     className="card-img-top"
//                     style={{ height: "200px", objectFit: "cover" }}
//                   />
//                 )}
//                 <div className="card-body">
//                   <h5 className="card-title">{listing.listingTitle}</h5>
//                   <p className="card-text">Price: ${listing.sellingPrice}</p>
//                   <p className="card-text">{listing.category}</p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => navigate(`/listing/${listing.id}`)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No listings found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Profile;
