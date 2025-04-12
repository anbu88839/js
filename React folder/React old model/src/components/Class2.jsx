
import PropTypes from "prop-types";
export const Class2 = (props) => {
  return (
    <div className="c2">

        <table >
            <tr>
                <th >Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>student</th>
                <td>{props.student?"YES":"NO"}</td>
            </tr>
        </table>
    </div>
  )
}


/* define the property types */
Class2.PropTypes={
    name:PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool,
    
}

Class2.defaultProps={
    name:"no name",
    age:23,
    student:false
}