import { styled } from "styled-components";

function IconSidebar( { children } ) {
     return (
          <BtnIcon>
               {children}
          </BtnIcon>
     );
}
const BtnIcon = styled.button`
     width: 190px;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     background-color: #000;
     color: #fff;
     border: 1px solid transparent;
     svg{
          font-size: 1.7rem;
     }
     &:hover{
          background-color: #6face9;
          border: 1px solid #000;
          color: #000;
          cursor: pointer;
          transition: all .3s ease-in-out;
          transform: scale(101%);
          transition: all .8s;
     }
     @media screen and ( max-width:700px ){
          width: 40px;
          height: 40px;
          border-radius: 100%;

           svg{
               font-size: 1.2rem;
           }
     }
`;
export default IconSidebar;