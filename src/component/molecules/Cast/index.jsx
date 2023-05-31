import { styled } from "styled-components";

function Cast() {
     return (
          <Card>
               <span>Temp</span>
               <p>32</p>
          </Card>
     );
}

const Card = styled.div`
     display: flex;
     flex-direction: column;
     gap: 2px;
     align-items:center ;
     span{
          font-size: 1.2rem;
          opacity:.8;
          font-weight: 300;
          color: #ebebeb;
     }
     p{
          font-size: 1.8rem;
          font-weight: 600;
          color: #fff;
     }

`;

export default Cast;