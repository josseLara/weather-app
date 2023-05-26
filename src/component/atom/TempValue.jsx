import { styled } from "styled-components";

function TempValue() {
     return ( 
          <Temp>
               <span>20</span>
               <b>20</b>
          </Temp>
      );
}
 const Temp = styled.p`
     width: 100px;
     display: flex;
     justify-content: space-between;
     font-style: italic;
     
     span,b{
          font-size: 1.8rem;
     }
 `;
export default TempValue;