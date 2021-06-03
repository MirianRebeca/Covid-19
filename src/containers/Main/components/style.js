import styled from 'styled-components'
import { CardContent, Typography } from '../../../components'

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.1rem;
`

export const ValueStyled = styled(Typography)`
  font-weight: 400;
  font-size: 1.7rem;
`

export const CardContentStyled = styled(CardContent)`
  backgroud-color
  border-left: 5px solid ${({ color }) => color || '#5d78ff'};
`

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`