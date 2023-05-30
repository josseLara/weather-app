import { styled } from "styled-components";

const WeatherCards = ( e ) => {
     return (
          <Cards>
               {[1, 2, 3, 4, 5, 6].map( e => {
                    return <Card>
                         <span className="day">Today</span>
                         <img src="https://cdn-icons-png.flaticon.com/128/9402/9402875.png" alt="temperature" />
                         <span className="temperature">21</span>
                    </Card>
               } )
               }
          </Cards>
     );
};

const Cards = styled.div`
     width: 100%;
     display: flex;
     overflow-x: auto;
     margin-bottom: 20px;
     padding-left: 10px;
     gap: 20px;

`;

const Card = styled.div`
     width: 250px;
     height: 200px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content:center ;
     color: #fff;
     background: -moz-linear-gradient(5deg, #5365a5 67%, #213a654f 100%);
     background: -webkit-linear-gradient(5deg, #5365a5  67%, #213a654f 100%);
     background: linear-gradient(5deg, #5365a5  67%, #213a654f 100%);
     filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5365a5",endColorstr="#213a65",GradientType=1);
     padding: 20px;
     border-radius: 10px;
     img{
          width: 100px;
          height: 100px;
          object-fit: cover;
     }

     .day{
          font-size: 1.8rem;
          font-weight: 600;
     }
     .temperature{
          font-size: 1.7rem;
          font-weight: 600;
     }
`;
export default WeatherCards;