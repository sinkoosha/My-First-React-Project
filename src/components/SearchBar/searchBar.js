import react, { useState } from "react";
import './searchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import React from "react";
import CloseIcon from '@material-ui/icons/Close';





const SearchBar = (props) =>{
    const [searchFilter , setSearchFilter]= useState([])
    const [wordEntred , setWordEnterd] = useState("")

const handelSearch = (e)=>{

    const emojichWorld = e.target.value;
    setWordEnterd(emojichWorld)
  const resultSearch =  props.data.filter((value)=>{
   return  value.title.toLowerCase().includes(emojichWorld.toLowerCase())
  })

  if(emojichWorld===""){
setSearchFilter([])
  }else{
    setSearchFilter(resultSearch)
  }

}
const handelClearInput= ()=>{
    setSearchFilter([])
    setWordEnterd("")

}



return(
<div className="searchBar">
    <h2>MY EMOJI SEARCH </h2>
    <div className="searchBox" >
<input type="text" className="inputSearchBar" value={wordEntred}   placeholder={props.placeholder}  onChange={handelSearch} />
<div className="searchBarIcon">
    {searchFilter.length===0 ? <SearchIcon/> : <CloseIcon id="clearBtn" onClick={handelClearInput}/>}
    
</div>
</div>
<div className="searchResult">

    {
        searchFilter.map((item)=>(
      
                <ul className="searchBarList">
          <li>{item.title}</li>
          <li>{item.symbol}</li>
          </ul>
         
       
        )
        )
    }
   
</div>
</div>

)

}

export default SearchBar; 