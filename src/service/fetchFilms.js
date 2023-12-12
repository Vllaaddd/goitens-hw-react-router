const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2VhNmNlYjEzMzZiNDdhZmJjZmQwMmYxMzRkNDYxNSIsInN1YiI6IjY1Nzg1ZjhhYTFkMzMyMDBlMWI4N2U2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YRj5rH5FE0-1EkWAMhLXOh_k8m4Dk_K899cmMNAUCKg'
    }
};

export const fetchAllFilms = async () => {
    try {
        const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        const parsedData = await data.json();
        return parsedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchFilmById = async ({params}) => {
    try {          
        const data = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?language=en-US`, options)
        const parsedData = await data.json();
        return parsedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCast = async ({params}) => {
    try {          
        const data = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/credits?language=en-U`, options)
        const parsedData = await data.json();
        return parsedData;    
    } catch (error) {
        console.log(error);
    }
}

export const fetchReview = async ({params}) => {
    try {          
        const data = await fetch(`https://api.themoviedb.org/3/movie/${params.movieId}/reviews?language=en-US&page=1`, options)
        const parsedData = await data.json();
        return parsedData;    
    } catch (error) {
        console.log(error);
    }
}

export const fetchByTitle = async ({params}) => {
    try {          
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${params.movieTitle}&include_adult=false&language=en-US&page=1`, options)
        const parsedData = await data.json();
        return parsedData;    
    } catch (error) {
        console.log(error);
    }
}