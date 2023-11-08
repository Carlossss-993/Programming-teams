export const InputField = ({ label, ...props }) => {
  return (
    <div className='if-inputField'>
      <label>{label}</label>
      <input type='text' className='if-input' {...props} />
    </div>
  )
}
