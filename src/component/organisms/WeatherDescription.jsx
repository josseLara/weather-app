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
     span{
          font-weight: 500;
        font-size: .8rem;
     }
     @media screen and (min-width:900px){
          p{  
        font-size: 1.5rem;
     }
     div{
          font-size: 1.8rem;      
     }
     span{
        font-size: 1rem;
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
     flex-direction: column;
     gap: 15px;
     padding: 10px;
     width: 100%;
    background-color: #e0eafd;
    color: #000;
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
     @media screen and (min-width:900px){
          width:400px;
          font-size: 1.3rem;
          }
`
export default WeatherDescription;