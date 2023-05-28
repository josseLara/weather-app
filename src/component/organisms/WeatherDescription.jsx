const { styled } = require( "styled-components" );

const WeatherDescription = ( e ) => {
     return (
          <Content>
               {/*  */}
               <Date>
                    <div>12:29 <span>PM</span></div>
                    <p>Monday, 18 August 2022</p>
               </Date>
               {/*  */}
               <Time>
                    <h2>NEXT</h2>
                    <Group>
                         {/*  */}
                         <ItemTime>
                         16:30h <b>Stay at Boham art Hotel</b>
                         </ItemTime>
                         <ItemTime>
                         18:30h <b>Dinner at Cafe Luna</b>
                         </ItemTime>
                    </Group>
               </Time>
          </Content>
     )
};

const Content = styled.div`
     width: 300px;
     height: fit-content;
     display: flex;
     flex-direction: column;
     gap: 20px;
     color: #fff;
     
`;

// ---> 1 Date <---
const Date = styled.div`
     display: flex;
     flex-direction: column;
     p{
        font-weight: 400;
        font-size: 1.1rem;
     }
     div{
          font-size: 1.2rem;
          font-weight: 600;
     }
     span{
          font-weight: 500;
        font-size: .8rem;
     }
`;

// ---> 2 Time <---
const Time = styled.div`
     display: flex;
     flex-direction: column;
     gap: 20px;

     h2{
          font-size: 1.4rem;
          font-weight: 400;
          
     }
`
const Group = styled.div`
     display: flex;
     flex-direction: column;
     gap: 15px;
`
const ItemTime = styled.div`
     font-size:1rem;
     font-weight: 300;
     display: flex;
     gap: 30px;
     width: 300px;
     padding: 0px 10px;
     span{
          font-size: 1.1rem;
          font-weight: bold;
     }
`
export default WeatherDescription;