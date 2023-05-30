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
     border-radius: 16px;
     color: #fff;
     background: #5682d7;
     padding: 10px 20px;
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

     @media screen and (min-width:900px){
          h1,span{
                    font-size: 2.3rem;      
          }
     }
`;
export default WeatherTemperature;