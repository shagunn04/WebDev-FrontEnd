
# LeafNest
![Screenshot 2025-02-05 091036](https://github.com/user-attachments/assets/53281741-d4f8-4131-88ae-fdd264ab92b9)
![Screenshot 2025-02-05 091052](https://github.com/user-attachments/assets/22551a0a-2809-4331-8ec1-fff36d4fba72)
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/cb1737ee-16cd-46a6-8669-4a54479829c3" width="400"/>
    </td>
    <td>
      LeafNest is a plant-selling website that offers a wide variety of plants, gardening tools, and tips for plant care. 
      It is designed to make buying plants and maintaining them easy for plant enthusiasts and beginners alike. 
      The platform allows users to browse through a wide range of plants, view detailed descriptions, and get personalized care tips for each plant.
    </td>
  </tr>
</table>



## Features
## Benefits of Buying from US
- **Plant Categories**:
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/d08fd264-ddaf-4e9a-96e9-73ef9d3a5a04" width="400"/>
    </td>
    <td>
      Our website offers a convenient experience to customers by allowing them filter the plants on various categories as <br >
      <ul>
        <li>Price</li>
        <li>Amount of Sunlight Required</li>
        <li>Watering Needs</li>
        <li>Size of plant</li>
        <li>Maintenance(low,medium,high)</li>
        <li>Type of plant as flowering or non floweing</li>
    </td>
  </tr>
</table>

- **Quick View**:
-![Screenshot 2025-02-05 091208](https://github.com/user-attachments/assets/3bace204-7626-48b2-bca9-a3cb24caf359)This gives users a convenient experience allowing them selecting multiple filters at same time..
-  Allows users to see quick details about the plant without leaving the main page.
- **Plant Care Tips**:
-
-   Provides detailed tips for each plant to help users maintain a healthy garden.
- **Customer Reviews**: User reviews and ratings for each plant available on the site.
- **Download Invoice**: After making a purchase, users can download a detailed invoice for their transaction.
- **reCAPTCHA Integration**: Prevents spam and bots by requiring users to complete a Google reCAPTCHA before submitting forms (e.g., "Write an Appreciation Letter" submission).
- **Account Management**: Users can manage their account and orders.
- **Responsive Design**: The website adapts to all screen sizes, making it mobile-friendly.
- **Interactive UI**: Features like animations (growing plants) and smooth hover effects enhance the user experience.


## Project Setup

### Prerequisites

Make sure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SarimMalik01/LeafNest.git
   ```

2. Navigate to the project directory:
   ```bash
   cd LeafNest
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Project

1. To start the development server:
   ```bash
   npm start
   ```

2. Open [http://localhost:3003](http://localhost:3003) in your browser to view the application.

### Building for Production

1. To build the app for production:
   ```bash
   npm run build
   ```

2. The optimized build will be created in the `build` directory, ready to be deployed.

## Technologies Used

- **Frontend**: React.js, CSS3
- **UI/UX**: Responsive design with CSS Flexbox and Grid, animations for smooth user interactions.
- **State Management**: React's `useState` and `useEffect` hooks
- **Routing**: React Router for navigation
- **Google reCAPTCHA**: To prevent spam and ensure valid user interactions
- **Invoice Generation**: Allows users to download their invoices after making a purchase
- **Version Control**: Git and GitHub

## Folder Structure

```
/LeafNest
│
├── /public
│   ├── /models       # Contains GLTF files for 3D models
│   └── index.html
│
├── /src
│   ├── /components   # Reusable components (Buttons, Cards, etc.)
│   ├── /pages        # Plant categories, user account pages, etc.
│   ├── /assets       # Images, icons, and other media
│   ├── /utils        # Utility functions (e.g., for invoice generation)
│   └── App.js        # Main app component
│
├── /node_modules     # Project dependencies
├── package.json      # Project metadata and scripts
└── README.md         # This file
```

## How to Contribute

1. Fork the repository
2. Create your branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


