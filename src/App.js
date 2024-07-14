// import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
// import axios from "axios";
import AddProductButton from "./Components/AddProductButton";
import ProductList from "./Components/ProductList";

function App() {
  const [selectedProductsList, setSelectedProductsList] = useState([null]);
  // const [productList, setProductList] = useState({});

  // useEffect(() => {
  //   fetchInitialPoductList();
  // }, []);

  // const fetchInitialPoductList = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://stageapi.monkcommerce.app/task/products/search",
  //       {
  //         params: {
  //           search: "Hat",
  //           page: 1,
  //           limit: 10,
  //         },
  //         headers: {
  //           "x-api-key": "72njgfa948d9aS7gs5",
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (err) {
  //     console.log("Error while Fetching the Initial Product list:", err);
  //   }
  // };

  return (
    <div className="App bg-gray-100 flex flex-col h-screen items-center">
      <div className="w-6/12 mt-36">
        <h3 className="font-bold text-2xl">Add Products</h3>
        <ProductList
          selectedProductsList={selectedProductsList}
          setSelectedProductsList={setSelectedProductsList}
        />
        <AddProductButton
          selectedProductsList={selectedProductsList}
          setSelectedProductsList={setSelectedProductsList}
        />
      </div>
    </div>
  );
}

export default App;
