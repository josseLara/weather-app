import { styled } from "styled-components";

const WeatherCards = ( e ) => {
     return (
          <Cards>
               {[1, 2, 3, 4, 5, 6].map( e => {
                    return <Card>
                         <span className="day">Today</span>
                         <div className="cardTemperature">
                              <img src="https://cdn-icons-png.flaticon.com/128/9402/9402875.png" alt="temperature" />
                              <span className="temperature">21°</span>
                         </div>
                    </Card>
               } )
               }
          </Cards>
     );
};

const Cards = styled.div`
     width: 100%;
     height: 200px;
     display: flex;
     overflow-x: auto;
     overflow-y: hidden;
     margin-bottom: 20px;
     padding-left: 10px;
     gap: 20px;
     
`;

const Card = styled.div`
     width: 200px;
     height: 200px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content:center ;
     color: #fff;
     border-radius: 10px;
     background-color: #e0eafd;
     
     img{
          width: 100px;
          height: 100px;
          object-fit: cover;
     }

     .day{
          width: 102%;
          font-size: 1.5rem;
          font-weight: 300;
          background-color: #5682d7;
          margin-top: 17px;
          text-align: center;
          border-radius: 3px;
     }
     .cardTemperature{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
         
          padding: 20px;
     }
     .temperature{
          font-size: 1.7rem;
          font-weight: 600;
          color: #1c4494;
     }
`;
export default WeatherCards;