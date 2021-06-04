import React, { memo, useState, useCallback, useEffect } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'
import pn1 from '../../../src/assets/images/pn1.png'
import pn2 from '../../../src/assets/images/pn2.png'
import pn3 from '../../../src/assets/images/pn3.png'

function Main() {
  const [data, setData] = useState({})
  const [country, setCountry] = useState('brazil')
  const updateAt = new Date().toLocaleString()

  const getCovidData = useCallback((country) => {
    Api.getCountry(country)
      .then(data => setData(data))
  }, [])

  useEffect(() => {    
    getCovidData(country)
  }, [getCovidData, country])

  const handleChange = ({ target }) => {
    const country = target.value
    setCountry(country)
  }

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data}/>
      <div className="p-3" align="center">
    <a href="https://coronavirus.saude.mg.gov.br/blog/101-mascaras-e-covid-19" target="_blank"><img src={pn1} alt="" class="img"/></a>
    <a href="https://coronavirus.saude.mg.gov.br/blog/109-higienizacao-das-maos" target="_blank"><img src={pn2} alt=""class="img"/></a>
    <a href="https://coronavirus.saude.mg.gov.br/blog/117-distanciamento-social-na-covid-19" target="_blank"><img src={pn3} alt=""class="img"/></a>
    </div>
      <div className="ft">
        <a href="https://github.com/MirianRebeca" target="_blank" class="link">by Mirian Rebeca</a>
      </div>
    </ContainerStyled>
  )
}

export default memo(Main)
