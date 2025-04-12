import PropTypes from "prop-types"

export const Class3 = (props) => {
  return (
    <div>{props.children}</div>
  )
}

Class3.propTypes={
    children: PropTypes.array,
}