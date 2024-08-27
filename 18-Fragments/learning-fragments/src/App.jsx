import FoodItems from "./components/FoodItems";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/errorMessage";


function App() {

  let foodItems = ['Dal','Green Vegetable','Roti','Milk','Salad'];

 
  return ( 
  <>
    <h1 className="ak-heading">Healthy Foods</h1>
    <ErrorMessage items={foodItems}> </ErrorMessage>
     <FoodItems items={foodItems}></FoodItems>
   
  </>
  );
};

export default App
