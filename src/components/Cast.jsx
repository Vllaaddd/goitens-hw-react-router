import { useLoaderData } from "react-router-dom"
import styled from "styled-components"

const CastList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Wrapper = styled.div`
    padding: 10px 0;
`;

const CastItem = styled.li`
    border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    width: 250px;
`;

export default function Cast(){
    const {cast} = useLoaderData()
    return(
        <Wrapper>
            <CastList>
                {cast && cast.map(({character, name, profile_path}) => (
                    <CastItem key={name}>
                        <img src={profile_path} />
                        <p>{name}</p>
                        <p><b>Character:</b> {character}</p>
                    </CastItem>
                ))}
            </CastList>
        </Wrapper>
    )
}