import styled from 'styled-components'

export const OptionButton = styled.button`
   border-radius: 50%;
   width: 80px;
   height: 80px;
   border: 1px solid ${(props) => props.option === 'like' ? 'green' : 'red'};
   color: ${(props) => props.option === 'like' ? 'green' : 'red'};
   font-size: 50px;
   transform: scale(0.7);
   transition: 0.2s;
   position: relative;
   box-shadow: 0 4px 9px 0 rgba(213,218,224,.3);
   
   :focus {
   		outline: none;
   }
   
   :hover {
    background-color: ${props => props.option === 'like' ? 'green' : 'red'};
    color: white;
    transform: scale(0.8, 0.8)
   }
   
   :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		border-radius: 50%;
    		background-color: rgba(0, 0, 0, 0.5);
    		content: "";
			}
   }
`

export const ContentWrapper = styled.div`
	padding: 5px;
	display: flex;
	flex-direction: column;
	flex: 1;
`
