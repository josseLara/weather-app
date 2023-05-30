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
     width: 250px;
     display: flex;
     flex-direction: column;
     align-items: end;
     gap: 10px;
     color: #fff;
     border-radius: 16px;
     box-shadow: 0 4px 30px rgba(255, 255, 255, 0.111);
     backdrop-filter: blur(3.5px);
     -webkit-backdrop-filter: blur(3.5px);
     border: 1px solid rgba(255, 255, 255, 0.05);
     padding: 10px 20px;
     background-color: #ffffff2e;
     img{
          width: 150px;
          height: 150px;
          object-fit: cover;
     }
     h1,span{
          font-size: 2rem;
          font-weight: 600;
     }
     p{
          font-size: 1.1rem;
          font-weight: 300;
          color: #ffffff82;
     }
`;
export default WeatherTemperature;