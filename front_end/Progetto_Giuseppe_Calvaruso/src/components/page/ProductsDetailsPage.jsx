/* eslint-disable no-unused-vars */
import Login from "./LoginPage"
import { useState } from "react"
import { useEffect } from "react"
import { showLoader,hideLoader,SHOW_LOADER,HIDE_LOADER,setProducts,ADD_TO_CART,itemIn } from "../../redux/action"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router"
import { Euro } from "lucide-react"
import { ArrowBigLeft } from "lucide-react"
import { ShoppingBasket } from "lucide-react"
import NotFound from "./NotFoundPage"
import { Plus } from "lucide-react"
import { Minus } from "lucide-react"
import toast, { Toaster } from 'react-hot-toast';




function ProductsDetails(){
    const addToCarthandling = () => {
      dispatch(itemIn(product))
      toast('Add to cart')
    }
    const navigate = useNavigate();
    const {id} = useParams();
    const products = useSelector((state)=>state.productsReducer.products)
    const isLogged = useSelector((state)=>state.loginReducer.isLogged)
    const dispatch = useDispatch()
    const [objects,setObjects] = useState()

    //fetching when we refresh the page(I have not found any other methods to correct this error)
    useEffect(() =>{
      if (products.length === 0){
        const fetching = async () => {
                  dispatch(showLoader())
      
                  
                  const request = await fetch('http://localhost:3001/products')
                  
                   const response = await request.json()
                   setObjects(response)
                   dispatch(setProducts(response))
                   dispatch(hideLoader())
                   
                  
              }
              fetching();


      }

    

    },[dispatch,products])
    // Debugging ----> product not found
    console.log('ID dal parametro:', id);
    console.log('Products in store:', products);

    const product = products.find(p => p.id === Number(id) || p.id === id);

    console.log('Product trovato:', product);
    if(!product) return <NotFound/>

   

    

    
  return( 
  
    <div className="flex-col; bg-[#d5d0c6]  ">
        <div className="flex justify-around p-4">
        <h1 className="lg:text-4xl text-center font-bold bg-[#f7f1ec] p-6 rounded-4xl shadow-2xl">{product.title}</h1>
        </div>
        <div className="lg:flex pb-4 justify-around ">
            <img src={product.image} alt={product.title} width="300" className=" rounded-4xl m-4"></img>
              <div className=" ">
                 <p className="text-xl text-center font-bold bg-[#f7f1ec] m-4 p-4 rounded-4xl shadow-2xl">{product.description}</p>
                 <div className="inline-flex justify-center bg-[#f7f1ec] m-4 p-4 rounded-4xl shadow-2xl">
                  <button><Link to={'/products'}><ArrowBigLeft size={40} /></Link></button>
                  <Euro size={40} />
                  <p className="p-2 font-bold">{product.price}</p>


                  <button className="cursor-pointer" onClick={()=> {if (isLogged){ addToCarthandling()} else {
                    navigate("/login")}}}>{isLogged?<Plus size={40}/>
                    :<ShoppingBasket size={40} />}
                  </button>


                 </div>
                 
            </div>
        </div>
         </div>) 
    

}





export default ProductsDetails