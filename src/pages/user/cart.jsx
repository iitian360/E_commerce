import React from "react";
import { Link } from "react-router-dom";
import CartItems from "../../components/user/cart/Cartitems";
import RecentlyViewed from "../../components/user/cart/recentlyviewed";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet";
import Navbar from "../../components/user/navbar/navbar";

const ShoppingCartPage = () => {
  return (
    <>
    <Helmet>
      <title>Cart | Mera Bestie</title>
    </Helmet>
    <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
    </div>
    <div className="container mx-auto p-4 md:p-6 space-y-6 mt-36">
      
      {/* Header Section */}
      <div className="bg-pink-100 p-4 rounded-md">
        <h2 className="text-lg md:text-xl font-semibold mb-2">Shopping Cart</h2>
        <h6 className="font-semibold text-center w-44">
         
            <span> <Link to={"/shop"} className="flex items-center bg-pink-300 hover:bg-pink-400 filterBtn py-2 pl-2 rounded-lg " >
            Continue Shopping </Link></span>
          
        </h6>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cart Items */}
        <div className="col-span-1 md:col-span-2">
          <CartItems />
        </div>

        
      </div>

      {/* Recently Viewed Products */}
        <RecentlyViewed />
      </div>
    </>
  );
};

export default ShoppingCartPage;
