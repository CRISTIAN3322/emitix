import { GlobalStyles } from "./index"
import { Device } from "./styles/breakpoints"
import styled from "styled-components"

function App() {

  return (
    <Container>
      <GlobalStyles />
      <section className="contentsSiderbar">
        <h2>Siderbar</h2>
      </section>
      <section className="contentsMenuBurger">
        <h2>MenuBurger</h2>
      </section>
      <section className="contentsRouter">
        <h2>Router</h2>
      </section>

    </Container>
  )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: black;
  .contentsSiderbar{
    display: none;
    background-color: rgba(36, 8, 248, 0.5);
  }
  .contentsMenuBurger{
    position: absolute;
    background-color: rgba(78, 45, 78, 0.5);
  }
  .contentsRouter{
    background-color: rgba(255, 247, 0, 0.5);
  }
  
  @media ${Device.tablet}{
    grid-template-columns: 88px 1fr;
    .contentsSiderbar {
    display: initial;
    } 
    .contentsMenuBurger{
      display: none;
    }   
  }
`

export default App
