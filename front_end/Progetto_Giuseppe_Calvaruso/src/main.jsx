/* eslint-disable no-unused-vars */

import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router'
import { Provider } from 'react-redux'




import './index.css'

import App from './App.jsx'
import Login from './components/page/LoginPage.jsx'
import Products from './components/page/ProductsPage.jsx'
import ProductsDetails from './components/page/ProductsDetailsPage.jsx'
import UserDetails from './components/page/UserDetailsPage.jsx'
import NotFound from './components/page/NotFoundPage.jsx'
import Cart from './components/page/CartPage.jsx'
import About from './components/page/AboutPage.jsx'
import FAQ from './components/page/FAQPage.jsx'
import ModifyPage from './components/page/productModifyPage.jsx'
import AddProduct from './components/page/productsAddPage.jsx'



import store from './redux/store.js'
import Layout from './components/layout/LayoutPage.jsx'



createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    <BrowserRouter>
  
        <Routes>
            <Route element={<Layout />}>
   

              <Route path='/'                     element={<App />}/>
              <Route path='/login'                element={<Login/>}/>
              <Route path='/products'             element={<Products/>}/>
              <Route path='/productsModify/:id'  element={<ModifyPage/>}/>
              <Route path='/products/:id'        element={<ProductsDetails/>}/>
              <Route path='/addproducts'         element={<AddProduct/>}/>
              <Route path='/userdetail'          element={<UserDetails/>}/>
              <Route path='/cart'                element={<Cart/>}/>
              <Route path='/about'               element={<About/>}/>
              <Route path='/faq'                 element={<FAQ/>}/>
              <Route path='*'                    element={<NotFound/>}/>
            </Route>
            

        </Routes>

    </BrowserRouter>

  </Provider>
 
)
