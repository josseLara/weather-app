import { styled } from "styled-components";
import ItemTime from "../molecules/ItemTime";
import { useSelector } from "react-redux";
import { getDateTodayTransformer } from "@/helpers/getDateTodayTransformer";

const WeatherDescription = (e) => {

     let time = useSelector(state => state.weather)
     let  {date,hour,weatherHour} = getDateTodayTransformer(time);

     return (
          <Content>
               {/*  */}
               <Date>
                    <div>{hour}</div>
                    <p>{date}</p>
               </Date>
               {/*  */}
               <Time>
                    <h2>NEXT</h2>
                    <Group>
                         {/*  */}
                         {weatherHour && weatherHour.map((props, i) => <ItemTime {...props} key={i} />)}
                    </Group>
               </Time>
          </Content>
     )
};

const Content = styled.div`
     width: 400px;
     height: fit-content;
     display: flex;
     flex-direction: column;
     gap: 20px;
     color: #000000;
     
`;

// ---> 1 Date <---
const Date = styled.div`
     width: 100%;
     display: flex;
     flex-direction: column;
     background: rgba(0, 0, 0, 0);
     border-radius: 16px;
     background: rgba(255, 255, 255, 0);
     border-radius: 16px;
     color: #fff;
     background: #7596E8;
     background: linear-gradient(0deg, #7596E8, #6B8CDD);
     border: 1px solid rgba(255, 255, 255, 0.05);
     padding:10px 20px;
     p{
        font-weight: 400;
        font-size: 1.1rem;
     }
     div{
          font-size: 1.2rem;
          font-weight: 600;
     }

     @media screen and (min-width:900px){
          p{  
        font-size: 1.5rem;
     }
     div{
          font-size: 1.8rem;      
     }

               }
`;

// ---> 2 Time <---
const Time = styled.div`
     display: flex;
     flex-direction: column;
     gap: 10px;
     background: rgba(255, 255, 255, 0);
     border-radius: 16px;
     background: #7596E8;
     background: linear-gradient(0deg, #7596E8, #6B8CDD);
     overflow: hidden;
     color: #fff;
     h2{
               font-size: 1.4rem;
               font-weight: 400;
               padding: 0px 10px;
               @media screen and (min-width:900px){
                    font-size: 2rem;
               }
          }
`
const Group = styled.div`
     display: flex;
     height: 230px;
     overflow-y: auto;
     overflow-x: hidden;
     flex-direction: column;
     gap: 15px;
     padding: 10px;
     width: 100%;
    background-color: #e0eafd;
    color: #000;
`

export default WeatherDescription;