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
`;

export default function Review(){
    const {results} = useLoaderData()
    console.log(useLoaderData());
    return(
        <Wrapper>
            <CastList>
                {results.length > 0 && results.map(({author, content}) => (
                    <CastItem>
                        <h3>Author: {author}</h3>
                        <p>{content}</p>
                    </CastItem>
                ))}
                {results.length == 0 && (
                    <h3>We don't have any reviews for this movie</h3>
                )}
            </CastList>
        </Wrapper>
    )
}