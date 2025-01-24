import styled from "styled-components"

function Logo() {
    return (
        <Container>
            <div><img src="Union.png" alt="Logo" /></div>
            <div>DoIt</div>
        </Container>
    )
}

export default Logo


const Container = styled.div`
display: flex;
gap: 4px;
align-items: center;
font-size: 1.3em;
color: #3F9142;
font-weight: 600;
font-family: "Sen", serif;
`