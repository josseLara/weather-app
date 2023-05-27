import { styled } from "styled-components";
import TempValue from "../atom/TempValue";

function CardDay({day,icon}) {
     return (
          <Card>
               <Info>
                    <h1>{day}</h1>
                    <TempValue/>
               </Info>
               {icon}
          </Card>
     );
}

const Card = styled.div`
     width: 100%;
     display: flex;
     padding: 10px 20px;
     justify-content: space-between;
     align-items: center;
     color: #fff;
     border-bottom: 1px solid #ffffff34;
     padding: 30px 20px;
     svg{
          font-size: 4rem;
     }
`;

const Info = styled.div`
     display: flex;
     flex-direction: column;
     gap: 6px;
     h1{
          font-size: 1.9rem;
          font-weight: 500;
     }
     span{
          opacity: .6;
     }
     span,b{
          font-size: 1.3rem;
          font-weight: 600;
     }
`;
export default CardDay;