/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useParams } from "react-router";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router";

// Questa l'ho commentata perche' dava problemi non appena inviavo i dati








    

  
    
    
 
   

        


    
  
         




// export default ModifyPage


// Da qui in poi testing


function ModifyPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  
    const products = useSelector((state)=>state.productsReducer.products);
    const {id} = useParams();
    const product = products.find(p => p.id === Number(id) || p.id === id);
        useEffect(()=>{
        if(product){
            console.log("form",product)
            setTitle(product.title);
            setDescription(
                product.description);
            setImageLink(product.image);
            setPrice(product.price);
            setCategory(product.category);
        }
      

    },[])
    
  const handleDelete = async () => {
  const confirmDelete = window.confirm("Are you sure you want to delete this product?");
  if (!confirmDelete) return;

  const response = await fetch(`http://localhost:3001/products/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    toast.success("Product deleted successfully!");
    navigate("/"); 
  } else {
    toast.error("Failed to delete product, try later");
  }
};
 const handleSubmit = async (event) => {
  event.preventDefault();

  const modifiedProduct = {
    title,
    description,
    price,
    category,
    image: imageLink,
  };




  // I have some problem with this request. In stack overflow says that in many ide (including visual studio code),
  // patch and put cause reloading forcely the db, even with the prevent default 

    const response = await fetch(`http://localhost:3001/products/${id}`, {
      method: "PUT", // Used even for some modified form
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedProduct),
    });

    if (response.ok) {
      toast.success("Product modified successfully!");
    } else {
      toast.error("Failed to modify product, try later");
      navigate("/");
    }
    
  } 
;

   
  

    return(<>
    <Toaster/>
     
        <div className="lg:m-4  ">
            <form onSubmit={handleSubmit}   className=""  >
                <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-2 m-2">Title</p>
                <input onChange={(e)=>setTitle(e.target.value)} 
                className=" w-full text-xl  border-2 border-black p-2  "  type="text" value={title}/>

                <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-2 m-2">Description</p>
                <textarea onChange={(e)=>setDescription(e.target.value)}
                className=" w-full text-xl inline border-2 border-black p-2   "  type="text" value={description}/>

                <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-2 m-2">Image : Only link allowed</p>
                <input onChange={(e)=>setImageLink(e.target.value)}
                className=" w-full text-xl  border-2 border-black p-2  "  type="text" value={imageLink}/>


                <div className="md:flex-col lg:flex lg:pt-4 lg:items-center lg:justify-center ">

                    <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-4 m-4">Price</p>
                    <input onChange={(e)=>setPrice(e.target.value)}
                    className=" text-xl inline border-2 border-black p-2   "  type="text" value={price}/>

                    
                    <p className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-4 m-4">Category</p>
                    <input onChange={(e)=>setCategory(e.target.value)}
                    className="  text-xl inline border-2 border-black p-2   "  type="text" value={category}/>

                    <button type="submit" className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-4 m-4">
                        save change</button>

                    <button type="button" onClick={handleDelete} className="text-4xl text-center bg-red-800 text-[#d7e5d3] rounded-4xl p-4 m-4">
                        Delete item</button>

                </div>

                


            </form>

           
        </div>

        </>
        
    )
}



export default ModifyPage;
