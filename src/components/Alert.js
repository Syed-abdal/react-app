import React from 'react';

function Alert(props) {
    const Capitalize = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);

    }
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    )
  );
}

export default Alert;








// import React from 'react'

// function Alert(props) {
//   return (
//     props.alert && <div className=${`alert alert-${{props.alert.type}} alert-dismissible fade show`} role="alert">
//   <strong>{props.alert.type}</strong>: {props.alert.msg}
//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
//   )
// }

// export default Alert
