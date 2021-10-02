import Menu from "./components/Menu";
import Routes from './routes'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 98vh;
`

function App() {
  return (
    <Container>
      <Menu />
      <div>
        <Routes />
      </div>
    </Container>
  );
}

export default App;
