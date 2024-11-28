import React, { useContext, useEffect, useRef, useState } from "react";
import CartCard from "./CartCard";
import { Context } from "./GlobalContext/Context";
import "./css/Cart.css";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { jsPDF } from "jspdf";  // Import jsPDF
import 'jspdf-autotable';
import leafNestLogo from "./images/logo-invoice.jpg";  // Path to your logo image

function Cart() {
  const { cart, recentlyViewed } = useContext(Context);
  const recentlyViewedRef = useRef(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const totalamount = cart.reduce(
      (total, CartPlant) => {
        return total + CartPlant.qty * CartPlant.price;
      },
      0
    );

    setPrice(totalamount);
  }, [cart]);

  const scrollLeft = () => {
    if (recentlyViewedRef.current) {
      recentlyViewedRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (recentlyViewedRef.current) {
      recentlyViewedRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const CartcardsList = cart.map((plant) => (
    <CartCard
      key={plant.id}
      plantId={plant.id}
      Title={plant.Title}
      price={plant.price}
      qty={plant.qty}
      image={plant.image}
    />
  ));

  const recViewedlist = recentlyViewed.map((plant) => (
    <Card
      key={plant.id}
      id={plant.id}
      img={plant.image}
      Title={plant.Title}
      Price={plant.price}
      Benefit={plant.benefits}
      description={plant.description}
      qty={plant.qty}
      maintenance={plant.maintenance}
      sunlight={plant.sunlight}
      watering={plant.watering}
    />
  ));

  
  const downloadInvoice = () => {
    const doc = new jsPDF();
  
  
    const imgWidth = 40; 
    const imgHeight = 40;
    doc.addImage(leafNestLogo, "PNG", 20, 10, imgWidth, imgHeight);
  
   
    doc.setFontSize(22);
    doc.text("LeafNest Invoice", 70, 30);
  
    
    const lineTop = 53;
    doc.line(20, lineTop, 190, lineTop);
  

    const cartID = `Cart-${Math.floor(100000 + Math.random() * 900000)}`;
    const currentDate = new Date().toLocaleDateString();
  
    
    const marginTop = 60;
    doc.setFontSize(12);
    doc.text(`Cart ID: ${cartID}`, 20, marginTop);
    doc.text(`Date: ${currentDate}`, 150, marginTop);
    doc.text(`Total Items: ${cart.length}`, 20, marginTop + 10);
  
    
    const tableHeaders = ["Product Name", "Quantity", "Price"];
    const tableData = cart.map((plant) => [
      plant.Title,
      plant.qty,
      `Rs ${plant.price * plant.qty}`
    ]);
  
    
    doc.autoTable({
      head: [tableHeaders],
      body: tableData,
      startY: marginTop + 20,  
      styles: {
        fontSize: 15,
      },
      headStyles: {
        fillColor: [0, 128, 0],  
        textColor: 255,
      },
      margin: { left: 20, right: 20 },
    });
  
   
    const finalY = doc.autoTable.previous.finalY + 10; 
    doc.setFontSize(14);
    doc.text(`Total Amount: Rs ${price}`, 20, finalY);
  
    doc.save("invoice.pdf");
  };

  return (
    <div className="Cart">
      <div className="CartCard-section">
        <h2 className="CartCard-headline">Your Cart</h2>
        <div className="CartCard-List">
          {cart.length > 0 ? (
            CartcardsList
          ) : (
            <div className="empty-cart">
              <img
                src="https://assets-v2.lottiefiles.com/a/5f52011c-1167-11ee-bb7a-87ae82e79a64/WoZMYyosBw.gif"
                alt="Empty Cart"
              />
              <p>Your cart is empty. Start adding some plants!</p>
            </div>
          )}
        </div>
        <div className="TotalAmount">
          <h1> Net Amount : ₹ {price}</h1>
        </div>

       
        <button className="download-invoice-button" onClick={downloadInvoice}
         disabled={cart.length === 0}>
          Download Invoice
        </button>

        <div className="Cart-RecentlyViewed">
          <h1 className="Cart-RecentlyViewed-Header">Recently Viewed</h1>
          {recViewedlist.length > 0 ? (
            <div className="RecentlyViewed-Wrapper">
              <button className="scroll-button left" onClick={scrollLeft}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div className="Cart-RecentlyViewedList" ref={recentlyViewedRef}>
                {recViewedlist}
              </div>
              <button className="scroll-button right" onClick={scrollRight}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          ) : (
            <div className="empty-recently-viewed">
              <h1>So Empty !!</h1>
              <NavLink to="/Nest">
                <button className="explore-button">
                  Let's Explore Nursery
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
