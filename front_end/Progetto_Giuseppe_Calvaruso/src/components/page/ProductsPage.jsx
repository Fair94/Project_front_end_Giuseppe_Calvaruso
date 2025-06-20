/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import {SquarePlus, SquareMinus, Eye,NotebookPen } from "lucide-react"
import MoonLoader from'react-spinners/MoonLoader'
import { showLoader,hideLoader,SHOW_LOADER,HIDE_LOADER, setProducts } from "../../redux/action"
import { useDispatch,useSelector } from "react-redux"
import { useParams } from "react-router"
import { Link } from "react-router"
import NotFound from "./NotFoundPage"
import AddProduct from "./productsAddPage"




function Products(){
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    const navigate = useNavigate()
    const {id} = useParams();
    const[category,setCategory] = useState("all")
    const[objects,setObjects] = useState([])
    const[isError,setIsError] = useState()
    const {user,isLogged} = useSelector((state)=>state.loginReducer)
    const isAdmin = isLogged && user && user.username === "admin"
    const filteredObjects = objects.filter(obj =>
  category === "all" ? true : obj.category === category
);



    const categories = ["all", ...new Set(objects.map(obj=> obj.category))];
    //DELAY ON LOADING PAGE IN ORDER TO SHOW LOADER
    const loading = useSelector((state)=>(state.loadingReducer.loading))

    const dispatch = useDispatch()
   

    useEffect(()=>{

        const fetching = async () => {
            dispatch(showLoader())
            try {
            await delay(3000)
            const request = await fetch('http://localhost:3001/products')
            
             const response = await request.json()
             setObjects(response)
             dispatch(setProducts(response))
             dispatch(hideLoader())
            }
            catch(error){
                console.log(error)
                setIsError(error.message)
            }

             
            
        }
        fetching()
    },[dispatch])

  
    if (isError) return <NotFound/>
    return(
    <div >
        <div className="flex justify-center p-4">
  <select
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    className="p-2 rounded border border-gray-400"
  >
    {categories.map((cat, index) => (
      <option key={index} value={cat}>
        {cat}
      </option>
    ))}
  </select>
</div>

       

        {loading ? <div className=" flex-col place-items-center pt-10  bg-[#f7f1ec]"><MoonLoader color="#4c6342" size={100}/><p className="lg:text-8xl pb-10 pt-10">Loading...</p></div> :<div className=" bg-[#d5d0c6]">
             {isAdmin? <div className="flex justify-center"><button onClick={()=>navigate("/addproducts")} className="text-4xl text-center bg-[#4c6342] text-[#d7e5d3] rounded-4xl p-4 m-4 cursor-pointer ">Add product</button></div>:<p></p>}
            <div className="lg:grid grid-cols-3 gap-10  p-10 ">
               
                {
                filteredObjects.map(object=>(   
                 <div key={object.id} className="border-2 border-[#4c6342] rounded-4xl  p-1 bg-white shadow-2xl ">
                 <div  className="text-center">
                 <h3 className="font-bold text-center p-3">{object.title}</h3>
                <img src={object.image} alt={object.title}  className="mx-auto h-40 w-40 object-contain" />
                <div className="flex justify-around">
                    {isAdmin?
                    
                    <div className="">
                      <button><Link to={`/productsModify/${object.id}`}> <NotebookPen size={40} /> </Link></button> 
                    <button><Link to={`/products/${object.id}`}><Eye size={40} /></Link></button>
                    </div> :

                <button><Link to={`/products/${object.id}`}><Eye size={40} /></Link></button>
                    }
               
            </div>
        </div>
    </div>
    
    ))}
     </div>
     </div>}
        
     </div>
    

)



}

export default Products