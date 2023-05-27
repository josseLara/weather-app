import { styled } from "styled-components";


function WeatherLocation() {
     return (
          <Location>
               <Zona>
                    <h1>Montreal</h1>
                    <span>Thursday</span>
               </Zona>
               <div className="time">12:21 PM</div>
          </Location>
     );
}

const Location = styled.div`
    width: 100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    gap: 20px;
`;
const Zona = styled.div`
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