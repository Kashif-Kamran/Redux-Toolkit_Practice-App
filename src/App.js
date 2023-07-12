import NavBar from "./Components/NavBar";
import { useEffect } from "react";
import CartContainer from "./Components/CartContainer";
import Footer from "./Components/Footer";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { calculateTotals } from "./store/features/CartSlice";
import { getCartItems } from "./store/features/CartSlice";
function App()
{
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() =>
  {
    dispatch(calculateTotals());
  },[cartItems]);

  useEffect(() =>
  {
    dispatch(getCartItems());
  },[]);

  return (
    <div className="App">
      <NavBar />
      <CartContainer />
      <Footer />
    </div>
  );
}

export default App;
