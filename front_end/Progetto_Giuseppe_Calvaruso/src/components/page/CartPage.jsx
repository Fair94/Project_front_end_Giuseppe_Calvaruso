/* eslint-disable no-unused-vars */
import { useSelector,useDispatch } from "react-redux"
import { Plus,Minus,Euro,Trash2 } from "lucide-react";
import { ADD_TO_CART, itemIn, itemOut,cartOut } from "../../redux/action";


function Cart(){
    const items = useSelector((state) =>state.cartReducer );

    const dispatch = useDispatch();

    return<>
        <div className="p-6 m-6   rounded-4xl shadow-2xl ">
        {items.length === 0 ? (<p className="lg:text-8xl text-center">The cart is empty!</p>):
        // i create the cart card for every item with map function
        ( items.map((item)=>(
            <div className="p-4 mb-4 bg-[#f7f1ec] rounded-4xl"> 
                <div>
                    <h1 className="lg:text-4xl text-center p-2 rounded">{item.title}</h1>
                 </div>
            <div key={item.id} className="lg:flex p-4 m-4  ">
                <img className="rounded-4xl" src={item.image}width={150} ></img>
                <div className="">
                <p className="lg:text-2xl p-4">{item.description}</p>
                <div className="lg:flex gap-4 lg:pl-4 lg:pt-5 p-4"><button className="cursor-pointer" onClick={()=>dispatch(itemOut(item.id))}><Minus/></button>{item.quantity} 
                <button className="cursor-pointer" onClick={()=>dispatch(itemIn(item))}><Plus/> </button>
                  <div className="flex"><Euro/>{item.price} </div>
                  <button className="cursor-pointer"onClick={()=>dispatch(cartOut(item.id))}> <Trash2/></button>
                </div>
                </div>

            </div>
            </div>
        ))


        )
        }
        
        
        </div>
    
    </>

}

export default Cart