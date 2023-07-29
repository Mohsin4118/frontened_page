import './App.css';
import Service from './Pages/Services/service'
import Navbar from './Components/Navbar/navbar'
import Footer from './Components/Footer/footer'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'

const Layout = ()=>{
  return(
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
  path:"/",
  element: <Layout/>,
  children:[
    {
      path:"/",
      element:<Service/>
    }
  ]
  }
])
function App() {
  return (
    <div className="App">
      <div className='app'>
      <div className='container-fluid'>
      <RouterProvider router={router}/>
      </div>
      </div>
    </div>
  );
}

export default App;
