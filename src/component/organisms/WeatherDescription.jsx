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
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
     backdrop-filter: blur(3.5px);
     -webkit-backdrop-filter: blur(3.5px);
     border: 1px solid rgba(255, 255, 255, 0.05);
     padding:10px ;
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
     background: rgba(255, 255, 255, 0);
     border-radius: 16px;
     box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
     backdrop-filter: blur(3.5px);
     -webkit-backdrop-filter: blur(3.5px);
     border: 1px solid rgba(255, 255, 255, 0.05);

     padding: 10px;
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