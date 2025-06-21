import styled from 'styled-components';

const AboutContainer = styled.section`
  max-width: 800px;
  margin: 80px auto;
  
  padding: 0;
  color: white;
  border-radius: 10px;
  text-align: center;

  h2 {
    font-family: ${(props) => props.theme.fontFamily.main};
    letter-spacing: 1.5px;
    margin-bottom: 20px;
    font-size: 2.5rem;
    position: relative;
  }

  

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-family: ${(props) => props.theme.fontFamily.main};
    font-weight: bold;
    color: #b3b3b3;
  }

  span {
    color: #4e8477; /* Resaltamos algunas palabras */
    font-weight: bold;
    
  }
`;
export {AboutContainer};