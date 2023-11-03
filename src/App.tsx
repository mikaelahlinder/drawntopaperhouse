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

const Banner = styled.div`
  font-family: 'Gaela';
  font-weight: 200;
  font-size: 28px;
  position: sticky;
  bottom: 0;
  color: #fff;
  background-color: #000;
  padding-top: 0.5rem;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style-type: none;
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
`

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(calc(-100% - var(--gap))); }
`

const Marquee = styled.div`
  --gap: 1rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
`

const MarqueeContent = styled.ul`
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: var(--gap);
  animation: ${scroll} 20s linear infinite;
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
        <Marquee>
          <MarqueeContent>
            <li>DRAWN TO YOU</li>
            <li>DRAWN TO EACHOTHER</li>
            <li>DRAWN TOGETHER</li>
            <li>DRAWN TO YOU</li>
          </MarqueeContent>
          <MarqueeContent>
            <li>DRAWN TO YOU</li>
            <li>DRAWN TO EACHOTHER</li>
            <li>DRAWN TOGETHER</li>
            <li>DRAWN TO YOU</li>
          </MarqueeContent>
        </Marquee>
      </Banner>
    </>
  )
}

export default App
