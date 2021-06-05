import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'
import pn1 from '../../../../src/assets/images/pn1.png'
import pn2 from '../../../../src/assets/images/pn2.png'
import pn3 from '../../../../src/assets/images/pn3.png'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  const copyInfo = () => {
    navigator.clipboard.writeText()
  }

  const shareInfo = () => {
    navigator.share({
      url: 'https://painelcoronavirus.netlify.app/'
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="contained" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )

  return (
    <Card>
  <div className="dv">
    <div className="p-1">
      <CardPanelContentStyled>
        <div>
          <div className="tl">Painel Covid-19</div>
          <div className="tl-2">Atualizado em: {updateAt}</div>
          <div className="pt-2" align="center">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </div>
    <div className="p-2">
    <a href="https://coronavirus.saude.mg.gov.br/blog/101-mascaras-e-covid-19" target="_blank"><img src={pn1} alt="" class="img"/></a>
    <a href="https://coronavirus.saude.mg.gov.br/blog/109-higienizacao-das-maos" target="_blank"><img src={pn2} alt=""class="img"/></a>
    <a href="https://coronavirus.saude.mg.gov.br/blog/117-distanciamento-social-na-covid-19" target="_blank"><img src={pn3} alt=""class="img"/></a>
    </div>
  </div>
  <div className="bt">
    {navigatorHasShare ? renderShareButton : renderCopyButton}
  </div>        
  </Card>   
  )
}

export default memo(Panel)