import { useContext } from "react";
import { AppContext } from "../contexts/AppContextWrapper";

function Cart() {
  const { appState, appDispatch } = useContext(AppContext);
  return <div>Cart</div>;
}

export default Cart;
