import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import { fetchAllFilms, fetchByTitle, fetchCast, fetchFilmById, fetchReview } from "./service/fetchFilms";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";
import Cast from "./components/Cast";
import Review from "./components/Review";
import Movies from "./pages/Movies";
import SearchResults from "./components/SearchResults";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                element: <Home />,
                loader: fetchAllFilms,
                index: true,
            },
            {
                path: '/movies',
                element: <Movies />,
                children: [
                    {
                        path: '/movies/:movieTitle',
                        element: <SearchResults />,
                        loader: fetchByTitle,
                    }
                ]
            },
            {
                path: '/movie/:movieId',
                element: <Movie />,
                loader: fetchFilmById,
                children: [
                    {
                        path: '/movie/:movieId/cast',
                        element: <Cast />,
                        loader: fetchCast,
                    },
                    {
                        path: '/movie/:movieId/review',
                        element: <Review />,
                        loader: fetchReview,
                    }
                ]
            }
        ]
    }
])