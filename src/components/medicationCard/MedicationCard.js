import Styles from './styles'

const MedicationCard = ({ props }) => {

  const {name, dose, frequency, id, time, purpose, prescriber} = props
  console.log(name)

  return (
    <div>
      <Styles.MedCard>
        <div>Name: {name || 'XANAX'} - {dose || '50mg'} { '3x/daily'}</div>
        <div>Prescriber: {prescriber || 'N/a'}</div>
      </Styles.MedCard>
    </div>
  )
}

export default MedicationCard