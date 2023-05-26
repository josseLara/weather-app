import { styled } from "styled-components";
import Text from "../atom/Text";
// icons
import {TiWeatherSnow} from 'react-icons/ti';

function CardTime() {
     return ( 
          <Card>
               <Text txt="Now"/>
               <TiWeatherSnow/>
               <Text txt="19"/>
          </Card>
      );
}
const Card = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;     
     gap: 5px;

     svg{
          font-size: 4.8rem;
     }
`

export default CardTime;