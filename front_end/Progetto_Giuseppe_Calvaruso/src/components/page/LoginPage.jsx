/* eslint-disable no-unused-vars */
import toast, {Toaster} from 'react-hot-toast'
import { useState } from "react";
import { userIn } from '../../redux/action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

/* eslint-disable no-unused-vars */
function Login(){
        const navigate = useNavigate();
        const failToast = ()=> toast("Login Error");
        const successToast = ()=>toast("Login successful")
        const [name,setName] = useState("");
        const [password,setPassword] = useState("");
        const dispatch = useDispatch();
       
    

        function handleSubmit(event){
            event.preventDefault(); 
            if (!name.trim() || !password.trim()) {
            failToast(); // I've inserted this check cause json server does not provide a full password and username control
        return;
  }
            

            const tryLogin = async() =>{
                  
                try {
                    // I simulate the get calls
                    const getFetch = await fetch(`http://localhost:3001/users?username=${name}&password=${password}`);
                    const userFetched = await getFetch.json();

                    if (userFetched.length ===1){
                         const user = userFetched[0];
                        dispatch(userIn(user.username));
                        localStorage.setItem("user", JSON.stringify({username:user.username}));

                       
                          successToast();
                          setName("");
                          setPassword("");
                          navigate('/')

                    } else {
                       failToast();
                          setName("");
                          setPassword("");
                    }
                }

            
                
                
                
                catch(error){
                   failToast();
                }

                setName("");
                setPassword("")

            }
            tryLogin();
          
            
           
            
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
    <div className="p-6 m-6 flex flex-col items-center">
   
    
    <p>Username:"user" or "admin"</p>
     <p>Password:"user" or "admin"</p>

  
    <div className="text-2xl bg-[#f7f1ec] rounded-4xl shadow-2xl m-6 p-4   ">
        <form onSubmit={handleSubmit}>
            <p>Username</p>

                <input className="bg-white border-2" type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>

            
            <p>Password</p>

            <input className="bg-white border-2" type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

            

            <button type="Submit" className="rounded-2xl bg-[#4c6342] text-[#d7e5d3] block mx-auto p-2 m-2 hover:text-black cursor-pointer" >Login</button>

        </form>
    </div>
      </div>

</>

}


export default Login