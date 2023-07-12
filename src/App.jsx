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

      // const search = data.Search[0].Title;
      // const poster = data.Search[0].Poster;
      // const type = data.Search[0].Type;
      // const year  = data.Search[0].Year;
      // const imdbID = data.Search[0].imdbID;


    

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