import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div  key={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link stackable card" style={{ height: "500px", width: "300px" , margin: "15px" }}>
                        
                        <div style={{height:"300px",overflow: "hidden" ,margin: "auto",}} >
                            <img src={image} className="image" style={{ width: "200px" , backgroundColor: "#ffffff",marginTop:"40px"}}>
                            </img>

                        </div>
                        <div className="content">

                            <a className="header">{title}</a>
                            <div className="meta">
                              <div>Price: {price}</div>
                               
                            </div>
                        </div>

                    </div>
          
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
