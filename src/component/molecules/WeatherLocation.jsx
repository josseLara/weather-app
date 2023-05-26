import { styled } from "styled-components";

function WeatherLocation() {
     return (
          <Location>
               <h1>Montreal</h1>
               <span>Thursday</span>
          </Location>
     );
}

const Location = styled.div`
     justify-self: start;
     display: flex;
     flex-direction: column;
     gap: 10px;
     
     h1{
          font-size: 2.9rem;
          font-weight: 400;
     }
     span{
          font-size: 1.5rem;
          font-weight: 200;
     }
`;

export default WeatherLocation;