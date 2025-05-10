const Button = (props) => {
  return (
    <button className={`btn alert alert-${props.color} btn-${props.color}`}>See More</button>
  )
}

export default Button;