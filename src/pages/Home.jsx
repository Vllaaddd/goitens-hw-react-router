import { Link, useLoaderData } from "react-router-dom"

export default function Home(){
    const {results} = useLoaderData()
    return(
        <div className="container">
            <ul>
                {results && results.map(({original_title, id}) => (
                    <li key={id}>
                        <Link to={`/movie/${id}`}>{original_title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}