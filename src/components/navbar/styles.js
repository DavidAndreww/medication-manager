import styled from 'styled-components'


const Styles = {
  Navbar: styled.nav `
    top: 0px;
    box-shadow: #131416 0px 3px 5px;
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 10vh;
    background-color: #26384C;
    z-index: 1;
    color: #FFFFFC;
    font-size: 9vh;
  `,
  Span: styled.span `
    font-weight: 900;
    color: #82D173;
  `
}

export default Styles