import styled, { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
`
const Wrapper = styled.div`
  background: blue;
`

function HomePage () {
  return (
    <>
      <GlobalStyles />
      <Wrapper>Welcome to Next.js!</Wrapper>
    </>
  )
}

export default HomePage
