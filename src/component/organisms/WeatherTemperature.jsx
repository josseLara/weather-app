import { styled } from "styled-components";

const WeatherTemperature = ( e ) => {
     return (
          <Temperature>
               <h1>Clear City</h1>
               <p>Terraxia, Cosmo Eternal</p>
               <img src="https://cdn-icons-png.flaticon.com/128/9402/9402875.png" alt="temperature" />
               
               {/* temperatura */}
               <Forecast>
                    {/* 1 */}
                    <Cast>
                         <span>Temp</span>
                         <p>32</p>
                    </Cast>
                    {/* 2 */}
                    <Cast>
                         <span>Temp</span>
                         <p>32</p>
                    </Cast>
                    {/* 3 */}
                    <Cast>
                         <span>Temp</span>
                         <p>32</p>
                    </Cast>
               </Forecast>
          </Temperature>
     );
};

const Temperature = styled.div`
     width: 250px;
     display: flex;
     flex-direction: column;
     align-items: center;
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
     h1{
          font-size: 2rem;
          font-weight: 600;
     }
     p{
          font-size: 1.1rem;
          font-weight: 300;
          color: #ffffff82;
     }

     @media screen and (min-width:900px){
          h1{
                    font-size: 2.3rem;      
          }
     }
`;

const Forecast = styled.div`
     display:flex;
     align-items: center;
     gap: 30px;
     margin-top: 20px;
`;
const Cast = styled.div`
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
export default WeatherTemperature;