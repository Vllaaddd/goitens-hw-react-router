import { Link, useLoaderData } from "react-router-dom"

export default function SearchResults(){
    const {results} = useLoaderData();
    return(
        <ul>
            {results && results.map(({id, original_title}) => (
                <li>
                    <Link to={`/movie/${id}`}>{original_title}</Link>
                </li>
                
            ))}
        </ul>
    )
}