import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases, casesPerOneMillion, deathsPerOneMillion} = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={40} />

  return (
  
    <Grid container spacing={2}>
      <Grid item xs={12} md={3} >
        <Card value={getValue(cases)} label="Total de casos" color="#4361ee"/>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#264653" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(casesPerOneMillion)} label="Casos por milhão" color="#70e000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#ef476f" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#e5383b" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>      
      <Grid item xs={12} md={3}>
        <Card value={getValue(deathsPerOneMillion)} label="Mortes por milhão" color="#7209b7" />
      </Grid>
      
    </Grid>
  )
}


export default memo(Board)