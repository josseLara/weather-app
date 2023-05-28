import { styled } from "styled-components";

const WeatherTemperature = ( e ) => {
     return (
          <Temperature>
               <img src="https://cdn-icons-png.flaticon.com/128/9402/9402875.png" alt="temperature" />
               <h1>Clear City</h1>
               <p>Terraxia, Cosmo Eternal</p>
               <span>16°</span>
          </Temperature>
     );
};

const Temperature = styled.div`
     width: 200px;
     display: flex;
     flex-direction: column;
     align-items: end;
     gap: 10px;
     color: #fff;
     img{
          width: 90px;
          height: 90px;
          object-fit: cover;
     }
     h1,span{
          font-size: 1.6rem;
          font-weight: 600;
     }
     p{
          font-size: .9rem;
          font-weight: 300;
          color: #ffffff82;
     }
`;
export default WeatherTemperature;