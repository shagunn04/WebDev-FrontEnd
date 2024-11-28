import { Route, Routes } from "react-router-dom";
import "./css/main-navbar.css";

import MainNavbar from "./main-navbar";
import Home from "./Home";
import AccountNavbar from "./Account";
import Nest from "./Nest";
import NestPlantCard from "./NestPlantCard";


import Favourites from "./Favourites";
import Cart from "./Cart";
import WriteaLetter from "./WriteaLetter";
import Blogs from "./Blogs";

import FavouriteCardsSection from "./FavouriteCardsSection";
import FavouriteNotesSection from "./FavouriteNotesSection";
import YourBlog from "./YourBlog";
import NewBlog from "./NewBlog";


import About from  "./About"
function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<MainNavbar />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
           
          {/* Account routes */}
          <Route path="Account" element={<AccountNavbar />}>
            <Route index element={<Favourites />} />
            {/* Favourites section */}
            <Route path="Favourites" element={<Favourites />}>
              {/* Nested routes for Favourites */}
              <Route index element={<FavouriteCardsSection />} />
              <Route path="FavouriteCards" element={<FavouriteCardsSection />} />
              <Route path="FavouriteNotesSection" element={<FavouriteNotesSection />} />
            </Route>

            <Route path="Cart" element={<Cart />} />
            <Route path="WriteaLetter" element={<WriteaLetter />} />
            <Route path="Blogs" element={<Blogs />} >
            <Route index element={<YourBlog />} />
              <Route path="YourBlogs" element={<YourBlog/>} />
              <Route path="NewBlog" element={<NewBlog/>} /></Route>
           
          </Route>
       
          {/* Nest routes */}
          <Route path="Nest" element={<Nest />} />
          <Route path="Nest/PlantCard/:id" element={<NestPlantCard />} />
          <Route path="About" element={<About/>}/>
        </Route>
        
       

      
      </Routes>
    </div>
  );
}

export default App;
