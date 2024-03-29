import styled from 'styled-components'


const Styles = {
  Navbar: styled.nav `
    top: 0px;
    position: fixed;
    display: flex;
    justify-content: left;
    padding: 10px 20px;
    align-items: center;
    width: 100vw;
    height: 10vh;
    z-index: 1;
    color: #FFFFFC;
    font-size: 3vh;
  `,
  Logo: styled.span `
    font-weight: 900;
    color: #82D173;
  `,
  Link: styled.span`
    color: #FFFFFC;
    text-decoration: none;
    border-bottom: .1px solid #82D173;
    &:hover {
      border-bottom: 3px solid #82D173;
    }
  `
}

export default Styles