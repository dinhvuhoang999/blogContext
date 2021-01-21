import styled from 'styled-components';


const StyledHero = styled.header`
    margin-bottom: 50px;
    background-attachment: scroll;
    position: relative;
    background: url(${props =>props.img }) no-repeat  center;
    background-size: cover;
    height: 600px;
`;
    
 
export default StyledHero;