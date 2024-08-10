import { useState } from "react"
import { useQuery } from "@apollo/client"
import { QUERY_ALL_USERS_TEST } from "../utils/queries"


export default function SearchBar({setCount, count}) {

    const [keyword, setkeyword]= useState('')
    const {data, loading} = useQuery(QUERY_ALL_USERS_TEST)

    const usersData = data?.users || []
//    console.log(usersData);

    // take the value the user types in.


    // create a function that will filter the usersData array and return the user by their name

    function handleUserSearch(){
        
        const searchedItem =  usersData.filter((item)=> item.username === keyword)
        setCount(searchedItem[0])
        location.assign(`/results/${searchedItem[0]._id}`)
    }

    return (
        <label>
             <input name="searchUser"  
             value={keyword} placeholder="search users" onChange={(e)=> setkeyword(e.target.value)}/>

             <button onClick={()=> handleUserSearch()} >search</button>
        </label>
    )
}