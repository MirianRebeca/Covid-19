import styled from 'styled-components'
import { CardContent, Typography } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.1rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 1.7rem;
  font-family: Franklin Gothic Medium;
  color: rgb(22,80,60);
`

export const CardContentStyled = styled(CardContent)`
  background-color: rgb(175,253,191);
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;  
  border-left: 3px solid ${({ color }) => color || '70e000'};
`

export const CardPanelContentStyled = styled(CardContent)`
  background-color: rgb(175,253,191);
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 130px;
`