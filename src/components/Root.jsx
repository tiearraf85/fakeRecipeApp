
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';


export async function loader() {
   const baseUrl = 'http://dummyjson.com';

}



export default function Root() {


 
  return (
    <>

    <NavBar />
    <Outlet />
    
  
  
    </>
  );
}


