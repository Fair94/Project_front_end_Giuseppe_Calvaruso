/* eslint-disable no-unused-vars */

import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router";





function AddProduct(){
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

   const products= useSelector((state)=>state.productsReducer.products);
   
   
    const handleSubmit = async (event) => {
  event.preventDefault();

  const modifiedProduct = {
    title,
    description,
    price,
    category,
    image: imageLink,
  };

  const response = await fetch(`http://localhost:3001/products/`, {
      method: "POST", // Used even for some modified form
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedProduct),
    });

    if (response.ok) {
      toast.success("Product added successfully!");
    } else {
      toast.error("Failed to add product, try later");
      navigate("/");
    }
    
  } 
    
    
    return(
    
    <>
    
    
     
        <div className="m-4  ">
            <form onSubmit={handleSubmit} >
                <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-2 m-2">Title</p>
                <input onChange={(e)=>setTitle(e.target.value)}
                className=" w-full text-xl  border-2 border-black p-2  "  type="text"/>

                <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-2 m-2">Description</p>
                <textarea  onChange={(e)=>setDescription(e.target.value)}
                className=" w-full text-xl inline border-2 border-black p-2   "  type="text" />

                <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-2 m-2">Image : Only link allowed</p>
                <input  onChange={(e)=>setImageLink(e.target.value)}
                className=" w-full text-xl  border-2 border-black p-2  "  type="text" />


                <div className="lg:flex pt-4 items-center justify-center ">

               


                    <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-4 m-4">Price</p>
                    <input onChange={(e)=>setPrice(e.target.value)}
                    className=" text-xl inline border-2 border-black p-2   "  type="text" />

                    
                    <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-4 m-4">Category</p>
                    <input onChange={(e)=>setCategory(e.target.value)}
                    className="  text-xl inline border-2 border-black p-2   "  type="text" />

                    <button type="submit"  className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-4 m-4">
                        save change</button>

                </div>

                


            </form>

           
        </div>

        </>
        
    )

    
    
    
    
}


export default AddProduct