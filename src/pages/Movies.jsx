import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Movies() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/movies/${searchQuery}`);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    type="text"
                />
                <button type="submit">Search</button>
            </form>
            <Outlet />
        </div>
    );
}