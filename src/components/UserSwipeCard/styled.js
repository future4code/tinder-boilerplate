import styled from 'styled-components'

export const UserCardWrapper = styled.div`
	box-shadow: 0 2px 10px 0 rgba(117,117,117,0.77);
	position: relative;
	border-radius: 5px;
	overflow: hidden;
`

export const ProfilePicture = styled.img`
  width: 100%;
  display: block;
`

export const InfoWrapper = styled.div`
	height: 30%;
	position: absolute;
  bottom: 0;
	width: 100%;
	background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 15px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`

export const UserName = styled.div`
	font-weight: bold;
	font-size: 24px;
`

export const UserAge = styled.div`
  margin-left: 10px;
	font-size: 20px;
`