import React, { Fragment, useState } from "react";
import Header from "./Layout/Header";
import Input from "./Input/Input";
import Dataprovider from "./Store/Dataprovider";
import Display from "./Display/Display";
import Cart from "./Cart/Cart";
function App() {

  const [CartIsShown, setCartIsShown] = useState(false);

  const showcartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Dataprovider>
       {CartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showcartHandler}/>
      <main>
    <Input/>
    <Display/>
      </main>
   
    </Dataprovider>
  );
}

export default App;
