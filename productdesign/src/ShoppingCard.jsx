import React from 'react'
// import "./shoes.png"

function ShoppingCard(props) {
    return (
        <div className="container" style={{ margin: "200px" }}>
            <div className="card" style={{ width: "15rem" }}>
                <img src="https://www.pngitem.com/pimgs/m/288-2881324_transparent-slippers-png-slide-sandal-png-download.png" className="card-img-top" alt="..." style={{
                    width: "10rem",
                    height: "100px"
                }}></img>
                <div className="card-body">
                    <h5 className="card-title">Slippers</h5>
                    <p className="card-text">Bathroom Hotel Slippers available in different colors</p>
                    <a href="#" className="btn btn-primary mx-2" onClick={() => props.decQty()}>-</a>
                    <a href="#" className="btn btn-primary mx-2" id="qty-btn">1</a>
                    <a href="#" className="btn btn-primary mx-2" onClick={() => props.incQty()}>+</a>
                    <p className="card-text my-4" >Total = <span id="total-amt">Rs 100</span></p>


                </div>
            </div>
        </div>
    )
}

export default ShoppingCard