import { styled } from "styled-components";

function Text({txt}) {
     return ( 
          <TextValue>{txt}</TextValue>
      );
}

const TextValue = styled.span`
     font-size: 1.6rem;
     font-weight: 600;
 
`
export default Text;