import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Vans from "./Vans";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import ExploreVans from "./ExploreVans";
import VanCard from "./VanCard"; 
import HostNavbar from "./Host";
import DashBoard from "./DashBoard";
import Income from "./Income";
import FavVans from "./FavVans"
import Reviews from "./Reviews";
import RentVan from "./RentVan";
import WriteReview from "./WriteReview"
import Error from "./error";
function App() {
  return (
    
    
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path="/" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          
         
          <Route path="/Host" element={<HostNavbar />}>
            <Route index element={<DashBoard />} /> 
            <Route path="DashBoard" element={<DashBoard />} />
            <Route path="Income" element={<Income />} />
            <Route path="Income/WriteReview/:id" element={<WriteReview />} />
            <Route path="FavVans" element={<FavVans/>} />
            <Route path="FavVans/RentVan/:id" element={<RentVan/>} />

            <Route path="Reviews" element={<Reviews />} />
          </Route>

          <Route path="/vans/ExploreVans" element={<ExploreVans />} />
          <Route path="/vans/ExploreVans/:id" element={<VanCard />} />
        </Routes>
        <Footer />
      </div>
   
  );
}

export default App;
