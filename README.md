# Product Management Application

This application allows users to manage a list of products and their variants, providing functionalities such as adding products, adding discounts, reordering products, and selecting variants.

## Features

- **Product List Management:**
  - Display a list of products with options to add, remove, and reorder them.
  - Each product can have multiple variants, which can also be managed individually.

- **Drag and Drop Functionality:**
  - Use `react-beautiful-dnd` for easy reordering of products and variants within the list.

- **Product Picker:**
  - Modal component (`ProductPicker`) for selecting products from a predefined list fetched via API.
  - Allows filtering products by name and supports scroll-based pagination.

- **Discount Management:**
  - Add discounts to products and variants with options for percentage and flat discounts.

## Components

### 1. App.js

- Main entry point for the application.
- Renders `ProductList` and `AddProductButton` components.

### 2. ProductList.js

- Manages the display and management of products and their variants.
- Uses `DragDropContext`, `Droppable`, and `Draggable` from `react-beautiful-dnd` for drag-and-drop functionality.
- Allows adding discounts to products and variants.

### 3. AddProductButton.js

- Provides a button to add new products to the `selectedProductsList`.

### 4. ProductPicker.js

- Modal component for selecting products from the API.
- Allows filtering products by name and supports scroll-based pagination for loading more products.
- Provides checkboxes for selecting products and their variants.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anshul-k

2. Navigate into the project directory:

   ```bash
   cd monk-commerce-assessment

3. Install dependencies:

   ```bash
   npm install

## Usage

1. Start the development server:

   ```bash
   npm start

2. Open your browser and visit http://localhost:3000 to view the application.

## Technologies Used

  - React.js
  - Tailwind CSS
  - react-beautiful-dnd for drag-and-drop functionality

## Credits

This project was developed by Anshul Kasana.
