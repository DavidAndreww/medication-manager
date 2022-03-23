import Styles from './styles'

const Landing = () => {
  return (
    <div className='content'>
      <Styles.Div>
        <h1 style={{fontSize: '5vw'}}>Less Worry</h1>
        <h3 style={{ marginTop: '10px' }}>Stay safe. Save time. MedManager+ uses data <br /> from NIH  to check for adverse drug reactions <br /> so you can worry less.</h3>
      </Styles.Div>     
        <button style={{ marginTop: '25px' }}>Learn More</button>
    </div>
  )
}

export default Landing