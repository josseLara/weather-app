import { styled } from "styled-components";
import IconSidebar from "../atom/IconSidebar";
import {TiWeatherCloudy} from "react-icons/ti";
import {SlLocationPin} from "react-icons/sl";

function SideBar() {
     return ( 
          <Content>
               <IconSidebar><TiWeatherCloudy/></IconSidebar>
               <IconSidebar><SlLocationPin/></IconSidebar>
               <IconSidebar><SlLocationPin/></IconSidebar>
               <IconSidebar><SlLocationPin/></IconSidebar>
          </Content>
      );
}

const Content = styled.aside`
     display: flex;
     flex-direction: column;
  
     
     @media screen and ( max-width:700px ){
          position: fixed;
          flex-direction: row;
          gap: .8rem;
          left: calc(100% - 60%);
          bottom: 5%;
     }
`;
export default SideBar;