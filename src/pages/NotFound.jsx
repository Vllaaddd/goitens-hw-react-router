import { Link } from "react-router-dom";

export default function NotFound(){
    return(
        <div className="container">
            <h1>Not Found</h1>
            <Link to='/'>На головну</Link>
        </div>
    )
}