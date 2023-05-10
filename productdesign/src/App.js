import ShoppingCard from './ShoppingCard';
import React, { useState } from 'react';



function App() {

  const [qtyVal, setQtyVal] = useState(1);
  const [totalAmt, setTotalAmt] = useState(100);

  //This is increament
  function incQty() {
    const qtyBtn = document.getElementById("qty-btn");
    const total = document.getElementById("total-amt");
    setQtyVal(qtyVal + 1);
    setTotalAmt(totalAmt + 100);
    qtyBtn.innerText = qtyVal + 1;
    total.innerText = totalAmt + 100;



  }
  function decQty() {
    if (qtyVal > 1) {
      const qtyBtn = document.getElementById("qty-btn");
      const total = document.getElementById("total-amt");
      setQtyVal(qtyVal - 1);
      setTotalAmt(totalAmt - 100);
      qtyBtn.innerText = qtyVal - 1;
      total.innerText = totalAmt - 100;

    }
    else {
      setQtyVal(1);


    }

  }
  return (
    <>
      <ShoppingCard incQty={incQty} decQty={decQty}></ShoppingCard>
    </>
  );
}

export default App;