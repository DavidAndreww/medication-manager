import styled from 'styled-components'

const Styles = {
  MedCard: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: #131416 0px 1px 5px;
    border: 2px solid #82D173;
    border-radius: 8px;
    padding: 1vh 1vw;
    height: 10vh;
    min-height: 90px;
    margin: 1vh 2vw;
  `,
  Buffer: styled.div`
    height: 10vh;
    background-color: yellow;
  `
}

export default Styles
