import styled from 'styled-components'

export const ProfilePicture = styled.img`
  width: 100%;
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const UserName = styled.h3`
  margin: 5px;
  margin-left: 0;
`
export const UserAge = styled.h4`
  margin-right: 10px;
`
export const OptionButton = styled.button`
   border-radius: 50%;
   width: 80px;
   height: 80px;
   border: 1px solid ${(props) => props.option === 'like' ? 'green' : 'red'};
   color: ${(props) => props.option === 'like' ? 'green' : 'red'};
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   
   :hover {
    background-color: ${props => props.option === 'like' ? 'green' : 'red'};
    color: white;
   }
`
