import * as React from "react"
import styled from "styled-components"

const IndexPage = () => (
  <Wrapper>
    <TextWrapper>
      <Logo src="/images/logos/react-logo.svg" alt="icon" />
      <Title>Build a web app with REact Hooks</Title>
      <Caption>20 sections -3 hours of videos</Caption>
      <Description>
        Learn how we build the 10Xasset site with React Hooks
      </Description>
      <AuthorWrapper>
        <AuthorImage scr="/images/avatars/Meng.png" alt="author image" />
          <Caption>Taught by Badou boy</Caption>
      </AuthorWrapper>
    </TextWrapper>
  </Wrapper>
)

export default IndexPage

const Wrapper = styled.div`
  height: 1247px;
  background: linear-gradient(200.44deg, #4316db 13.57%, #9876e7 98.38%);
`

const TextWrapper = styled.div`
position: relative;
display: grid;
gap: 20px;
padding-top: 100px;
`

const AuthorWrapper = styled.div``

const Logo = styled.img`
  height: 60px;
  width: 60px;
`
const Title = styled.h1`
max-width: 500px;
font-size: 60px;
font-weight: bold;
font-style: normal;
line-height: 72px;
color: #ffffff;
mix-blend-mode: normal;
text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
`

const Caption = styled.p`
font-size: 15px;
font-style: normal;
line-height: 130%;
text-transform: uppercase;
color: rgba(255, 255, 255, 0.7);
`

const Description = styled.p`
max-width: 400px;
font-size: 20px;
font-style: normal;
line-height: 140%;
color: #ffffff;
`

const AuthorImage = styled.img`
  width: 32px;
  height: 32px;
`
