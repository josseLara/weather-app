import { styled } from "styled-components";

function ItemTime({time,temperature_2m}) {
     return (
          <Item>
              {time}➡️<b>{temperature_2m}°</b>
          </Item>
     );
}

const Item = styled.div`
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
export default ItemTime;