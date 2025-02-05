
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
      <img src="https://github.com/user-attachments/assets/d08fd264-ddaf-4e9a-96e9-73ef9d3a5a04" />
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
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/3bace204-7626-48b2-bca9-a3cb24caf359" />
    </td>
    <td>
      This allows users to see quick details about the plant without leaving the main page.
    </td>
  </tr>
</table>
 
- **Plant Care Tips**:
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/bccb361b-9309-4f61-bd80-ad3f3b6c7915" />
    </td>
    <td>
      Provides detailed tips for each plant to help users maintain a healthy garden.
    </td>
  </tr>
</table> 

- **Related Products**:
- <table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/33eef7cc-a17e-4749-a4d5-8930a4dea464"/>
    </td>    
    <td>
      While viewing a plant, this feature allows users to look at other plants related to the given plant.
    </td>
  </tr>
</table>


- **Cart**:
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/839d9295-39ae-4799-9fb5-f48ebceb10c4"/>
    </td>
    <td>
    The Cart section allows user to:
      <ul>
        <li>Change quantity of added plant</li>
        <li>Remove plant from cart</li>
        <li>adding plant back to favorites when user isn't sure of buying</li>
        <li>Gives a view of recently viewed products too along with option of invoice</li>
      </ul>
    </td>
  </tr>
</table>  

- **Download Invoice**:
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/74069f15-1840-425b-9a0c-621fa63bb79f"/>
    </td>
    <td>
     After making a purchase, users can download a detailed invoice for their transaction.
    </td>
  </tr>
</table>
       
- **reCAPTCHA Integration**:
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/53633bf6-d2e2-47c8-af55-b3d5e77c1f53"/>
    </td>
    <td>
     Prevents spam and bots by requiring users to complete a Google reCAPTCHA before submitting forms (e.g., "Write an Appreciation Letter" submission)
    </td>
  </tr>
</table>

- **Account Management**:
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/a775b05a-b7b3-4489-bd47-4c51d395acc8"/>
    </td>
    <td>
    Users can manage their account and orders.
    </td>
  </tr>
</table> 

- **Favorites**
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/b5c59454-446d-4a99-a5a8-fa2b6910aa90"/>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/180a946d-6dcb-4b35-a6dc-bfe951c3843f"/>
    </td>
    <td>
      The favorites section under Accounts helps user to store all wishlishted plants there along with adding notes
    </td>
  </tr>
</table> 

- **Responsive Design**:
  The website adapts to all screen sizes, making it mobile-friendly.
  
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


