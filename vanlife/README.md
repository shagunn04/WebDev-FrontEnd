# **Van Rental App**
A React-based application designed for users to explore, rent, and manage vans. It includes a user dashboard, account balance, charts for income analysis, a review system, and the ability to save favorite vans for future rentals.

## **Features**
### User Dashboard
Account Balance: View how much you've earned from renting your vans and renting vans for yourself.
Income Pie Chart: A graphical breakdown showing the income earned from renting out your vans vs. the income spent on rentals.

## Income
Income Chart: View a graph tracking your total earnings and spending over time.
Write Reviews: Add reviews for vans you've rented, which will be visible to other users.

## Reviews

Review Graph: View a graph of reviews based on ratings, with high and low star reviews.
Review Cards: Read and analyse the vans as reviewed by other users

## Favorites Section
Save Favorite Vans: Keep track of your favorite vans for future rentals.


## Vans
Find Your Beloved Van: Browse through a collection of vans to find your next rental.
Tech Stack
VanCard : Click on any Van and read about its description to equip it for your next ride.
Filter out vans based on your choices and type 
Add the Van in your favourites directly from the VanCard

React: Frontend framework used to build the app.
React Router: For routing and navigation between different pages.
Charts.js or Recharts: For displaying graphs and charts.
useState & useEffect: React hooks for managing component state and side effects.
useLocation & useParams: React Router hooks for managing URL parameters and routing.
Context API: For managing and sharing state across components.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/van-rental-app.git
cd van-rental-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000 to view the app.

Usage
User Dashboard
After logging in, the user will be redirected to their dashboard.
The dashboard will display:
Current balance from renting and earning with vans.
A pie chart showing how much was earned from renting vans and how much was spent on rentals.
An income chart showing total earnings and spending over time.
Write and View Reviews
After renting a van, users can leave a review (rating and feedback) which will be visible in the Reviews section.
The reviews are displayed along with a graph showing the breakdown of high and low star reviews.
Favorite Vans
Users can save vans they like by clicking the "Add to Favorites" button. These vans will be stored in their Favorites section for easy access.
Find a Van for Your Next Ride
Browse through the Vans Page, where users can search and filter available vans.
Clicking on a van will show its details, and users can either rent the van or save it to their favorites.
Contributing
Feel free to fork this repository and contribute by creating issues or pull requests.

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.
License
This project is licensed under the MIT License.


# *Deploy Link*
Make sure to run db.json on a json server so that the fetch request from http://localhost:3000/ is successful using command
json-server --watch db.json

https://sprightly-beignet-5f63c9.netlify.app/Vans