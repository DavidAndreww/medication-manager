import styled from 'styled-components'

const Styles = {
  Input: styled.input`
    display: block;
    background-color: #c4d7f2;
    border: none;
    border-bottom: 2px solid #95a3b3;
    margin-top: 10px;
  `,
  Button: styled.button.attrs(props => ({
    color: props.isPrimary ? '#82D173' : '#c4d7f2',
    width: props.solo ? '100%' : '40%',
    weight: props.isPrimary ? 700 : 'normal'
  }))`
  background-color: ${props => props.color};
  width: ${props => props.width};
  font-weight: ${props => props.weight};
  border: 2px solid #26384C;
  margin: 10px 5px;
  border-radius: 10px;
  `,
  Form: styled.form`
  text-align: center;
  `
}

export default Styles