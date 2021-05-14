import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productsAction";

function ProductListing() {
    const dispatch = useDispatch();
    const url='https://fakestoreapi.com/products'



    const fetchProducts = async () => {
        axios.get(url)
        .then(res=>{
            const data=res.data
            dispatch(setProducts(data))

        })
        .catch((err)=>{
            console.log("err",err)
        })
       

    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <div className="ui grid container">
                <ProductComponent />
            </div>
        </div>
    )
}

export default ProductListing
