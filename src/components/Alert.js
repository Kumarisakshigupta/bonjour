import React from 'react'

function Alert(props) {
  return (
        props.alert && <div className={`alert alert- ${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong><b>{props.alert.type}: {props.alert.msg}</b></strong>
        </div>
  )
}
export default Alert
