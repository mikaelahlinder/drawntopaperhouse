import styled from '@emotion/styled'
import logo from './resources/logo.png'

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Logo = styled.img`
  max-width: 500px;
  margin-top: 4rem;
  @media (max-width: 420px) {
    max-width: 300px;
  }
`

const Text = styled.div`
  max-width: 800px;
  margin-top: 3rem;
  text-align: center;
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 200;
  span {
    display: inline-block;
    margin-bottom: 2rem;
  }
  @media (max-width: 420px) {
    font-size: 14px;
    max-width: 80vw;
    span {
      margin-bottom: 1rem;
    }
  }
`

const Banner = styled.div`
  font-family: 'Gaela';
  font-weight: 200;
  font-size: 28px;
  position: sticky;
  bottom: 0;
  color: #fff;
  background-color: #000;
  padding: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
  text-align: center;
  @media (max-width: 420px) {
    font-size: 12px;
    div:nth-of-type(4) {
      display: none;
    }
  }
`

function App() {
  return (
    <>
      <Container>
        <Logo src={logo} alt="logo" />
        <Text>
          <span>
            Welcome, it is a pleasure to have you here.
            <br />
            Drawn To is a greeting card studio that offers delightful stationery
            with a Scandinavian sensibility.
          </span>
          <span>
            Our first collection will be released in early 2024.
            <br /> For now please do stay in touch on instagram, send an email
            or sign up for updates.
          </span>
          <span>
            Looking forward to seeing you again soon,
            <br /> The Drawn To Team
          </span>
        </Text>
      </Container>
      <Banner>
        <div>DRAWN TO YOU</div>
        <div>DRAWN TO EACHOTHER</div>
        <div>DRAWN TOGETHER</div>
        <div>DRAWN TO YOU</div>
      </Banner>
    </>
  )
}

export default App
