import React, {useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Get from "./Get";
const App =()=>{
  const [search,setSearch] = useState("");
  const [getData,setGetData] =useState([]);

  const handleChangeEvent=(event)=>{
    setSearch(event.target.value);
  };
  const handleClick =()=>{
   
    const apikey = 'aa903cd7';
   
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&s=${search}`)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setGetData(data.Search);
    });
   
  }

  return(
    <div>
         <Input onChange={handleChangeEvent}/>

    <Button onClick={handleClick}/>

    <Get getData={getData} />

    
    </div>
  )
}
export default App;
