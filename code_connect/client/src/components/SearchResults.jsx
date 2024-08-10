import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ONE_USER } from "../utils/queries";

export default function SearchResults (){
    const {userId}= useParams()
    const {data, loading, error} = useQuery(QUERY_ONE_USER, {
        variables: {
            id: userId
        }
    })

    const userData = data?.user || {}

    console.log(userData);
    if (loading){
        return <h1>no user information to display</h1>
    }

    return(
        <h1>{userData?.username}</h1>
    )
}