import Styles from './styles'

const DatePicker = () => {
  return (
    <Styles.Container>
      <Styles.Button onClick={() => console.log('LEFT')}>◀</Styles.Button>
      <span>DATE</span>
      <Styles.Button onClick={() => console.log('RIGHT')}>▶</Styles.Button>
    </Styles.Container>
  )
}
export default DatePicker