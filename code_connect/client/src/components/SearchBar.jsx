import { useState } from "react"

export default function SearchBar({setCount, count}) {

    const [keyword, setkeyword]= useState('')
    const usersData = [
        {
            name:'skittles'
        },
        {
            name:'bear'
        },
        {
            name:'hersheys'
        },
        {
            name:'popcorn'
        },
        {
            name:'acid'
        }
    ]

    // take the value the user types in.


    // create a function that will filter the usersData array and return the user by their name

    function handleUserSearch(){
        
        const searchedItem =  usersData.filter((item)=> item.name === keyword)
        setCount(searchedItem)
    }

    return (
        <label>
             <input name="searchUser"  
             value={keyword} placeholder="search users" onChange={(e)=> setkeyword(e.target.value)}/>

             <button onClick={()=> handleUserSearch()} >search</button>
        </label>
    )
}