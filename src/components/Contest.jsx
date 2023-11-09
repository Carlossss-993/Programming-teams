export const Contest = ({ contest, index, onRemoveContest }) => {
  console.log({ index })
  const handleRemove = () => {
    onRemoveContest(index)
  }
  return (
    <article>
      <strong>Competencia</strong>
      <p>{contest.category}</p>
      <p>{contest.period}</p>
      <p>{contest.validity}</p>
      <button type='button' onClick={handleRemove}>
        Eliminar Competencia
      </button>
    </article>
  )
}
