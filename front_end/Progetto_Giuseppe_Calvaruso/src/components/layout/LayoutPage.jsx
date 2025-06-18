import { Outlet } from "react-router"
import NavBar from "./NavBarPage"
import Footer from "./FooterPage"

function Layout(){

return(
<div>
<NavBar></NavBar>
<Outlet/>
<Footer></Footer>

</div>
)

}



export default Layout