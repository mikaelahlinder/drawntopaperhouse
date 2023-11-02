import { keyframes } from '@emotion/react'
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
  margin-top: 5rem;
  text-align: center;
  font-size: 20px;
  font-family: 'Gaela', Arial, sans-serif;
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

const marquee = keyframes`
  0% { transform: translateX(100vw); }
  100% { transform: translateX(-100%); }
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
  height: 30px;
  > div {
    position: absolute;
    overflow: hidden;
    animation: ${marquee} 30s linear infinite;
  }
  span {
    margin-left: 100px;
  }
  span:nth-child(1) {
    margin-left: 0;
  }
  @media (max-width: 420px) {
    font-size: 12px;
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
        <div>
          <span>DRAWN TO YOU</span>
          <span>DRAWN TO EACHOTHER</span>
          <span>DRAWN TOGETHER</span>
          <span>DRAWN TO YOU</span>
        </div>
      </Banner>
    </>
  )
}

export default App
