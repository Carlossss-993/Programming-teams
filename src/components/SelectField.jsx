export const SelectField = ({ label, options, ...props }) => {
  return (
    <div className='sf-selectField'>
      <label>{label}</label>
      <select className='sf-select' {...props}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
