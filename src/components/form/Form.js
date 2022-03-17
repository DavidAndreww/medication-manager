import Styles from './styles'

const Form = () => {
  let fields = ['name', 'dose', 'pills', 'daysOfWeek', 'timeOfDay']
  return (
    <>
      <form>
        {fields.map(field => (
          <Styles.Input key={field} placeholder={field}/>
        ))}
      </form>
    </>
  )
}

export default Form