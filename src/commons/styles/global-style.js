import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 14px;
  }

  .cursor {
    cursor: pointer;
  }

  .bt {
    padding-bottom: 10px;
    padding-right: 30px;
    display: flex;
    flex-direction: row-reverse;
    background-color: rgb(175,253,191);
  }

  .tl {
  font-weight: 400;
  font-size: 2.5rem;
  font-family: Impact;
  color: rgb(22,80,60);
  margin-bottom: 10px;
  }
  .tl-2 {
    color: rgb(22,80,60);
    margin-bottom: 10px;
  }

  a.link {
    text-decoration: none;
    color: rgb(45, 106, 79);
    font-size: 0.9rem;
    font-style: italic;
    
  }

  .pt-2 {
    margin-top: 15px;
  }
  
  .ft {
    margin: 10px;
  }

  }
  .dv {
  display: flex;
  background-color: rgb(175,253,191);
  align-items: center;
  
  }
  .img {
  margin: 20px;
  width: 18%;
  }

@media (max-width: 600px) {
  .dv {
    flex-direction: column;
    justify-content: center;
  }
  .p-2 {
   display: none;
  }
  
}
@media only screen and (min-width: 600px){
  .p-3 {
    display: none;
  }
}
`

export default globalStyle
