/* eslint-disable no-unused-vars */
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import toast, {Toaster} from 'react-hot-toast'
import{LogOut} from "lucide-react"
import { House } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { userOut } from "../../redux/action";




function NavBar(){
    const logOutToast = ()=>toast("Logout successful")
    const isLogged = useSelector(state => state.loginReducer.isLogged);
    const user = useSelector(state=>state.loginReducer.user);
    const dispatch = useDispatch();
    const logout = ()=>{
    dispatch(userOut());
    logOutToast();
    }

    return<>
     <Toaster
    toastOptions={{
        className:'text-2xl',
        style:{
            background:"black",
            color:"#d7e5d3"
        }
    }}/>
    {isLogged?( <p className="lg:p-4 lg:text-2xl font-mono text-center bg-[#4c6342] text-[#d7e5d3]">WELCOME {user.username}</p>):
    (<div>
        <p className="lg:p-4 text-2xl font-mono text-center bg-[#4c6342] text-[#d7e5d3]">SPECIAL DISCOUNT FOR YOUR FIRST ORDER</p>
    </div>)}
    
   <nav className="  font-mono font-bold lg:text-3xl">

        <ul className=" flex justify-evenly  bg-[#f7f1ec] ">

            <li className="hover:bg-[#d5d0c6] p-2"><Link to='/'><House size={30} /></Link></li>
            <li className="hover:bg-[#d5d0c6] p-2"><Link to='/about'>ABOUT</Link></li>
            <li className="hover:bg-[#d5d0c6] p-2"><Link to='/products'>PRODUCTS</Link></li>
            <li className="hover:bg-[#d5d0c6] p-2"><Link to='/faq'>FAQ</Link></li>
            {
            isLogged?
                ( <li className="hover:bg-[#d5d0c6] p-2"><LogOut size ={30} onClick={logout} /> </li>)
            
            :
            ( <li className="hover:bg-[#d5d0c6] p-2"><Link to='/login'><User size ={30} /></Link></li>)
            }
           
            <li className="hover:bg-[#d5d0c6] p-2"><Link to='/cart'><ShoppingCart size={30} /></Link></li>
        
        </ul>

   </nav>
    </>



}

export default NavBar