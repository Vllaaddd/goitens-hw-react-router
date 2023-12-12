import { Link, Outlet, useLoaderData, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #000;
    }
`;

const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const AdditionalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 15px 0;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: #000;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export default function Movie(){
    const {poster_path, original_title, vote_average, overview, genres} = useLoaderData()
    const goBack = useNavigate()

    const {movieId} = useParams();
    return(
        <div className="container">
            <button onClick={() => goBack('/')}>Go home</button>
            <Wrapper>
                <InfoContainer>
                    <img src={poster_path} />
                    <MainInfo>
                        <h2>{original_title}</h2>
                        <p>User score: {vote_average}%</p>
                        <h3>Overview</h3>
                        <p>{overview}</p>
                        <h3>Genres</h3>
                        <ul>
                            {genres && genres.map(el => {
                                const genre = el.name;
                                const id = el.id;
                                return <li key={id}>{genre}</li>
                            })}
                        </ul>
                    </MainInfo>
                </InfoContainer>
                <AdditionalInfoContainer>
                    <h3>Additional information</h3>
                    <LinksContainer>
                        <Link to={`/movie/${movieId}/cast`}>Cast</Link>
                        <Link to={`/movie/${movieId}/review`}>Reviews</Link>
                    </LinksContainer>
                </AdditionalInfoContainer>
            </Wrapper>
            <Outlet />
        </div>
    )
}