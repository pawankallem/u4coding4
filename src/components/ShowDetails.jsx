
import { useParams } from "react-router-dom"

export const ShowDetails=()=>{
    let id=useParams();
    console.log(id)

    return <div>
        <h1>Showing Details here</h1>
    </div>
}