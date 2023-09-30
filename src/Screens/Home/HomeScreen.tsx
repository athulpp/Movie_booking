import React,{useEffect} from 'react'
import Header from '../../Common/Header';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const userIsLoggedIn = useSelector((state:any) => state?.userReducer.userIsLoggedIn);

  console.log(userIsLoggedIn,'hyyyyyhhh') 
const navigate=useNavigate();
  useEffect(()=>{
if(!userIsLoggedIn){
  navigate('/');
}
  },[])

  return (
    <div><Header/>
   
    </div>
  )
}

export default HomeScreen;