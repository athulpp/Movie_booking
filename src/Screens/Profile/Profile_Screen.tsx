import React,{useState,useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Booke_show = () => {
    const bookList = useSelector((state:any) => state?.bookedList);
    const [sortedResponse, setSortedResponse] = useState([]);
 
   

    const jsonString = JSON.stringify(bookList);
    console.log(jsonString,'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj');


console.log(sortedResponse);
  return (
    <div>Booke_show</div>
  )
}

export default Booke_show