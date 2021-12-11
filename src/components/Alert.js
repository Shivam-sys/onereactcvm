import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{
            position: "fixed",
            zIndex: "9999",
            right: "10px",
            top: "10px",
          }}
        >
          {props.alert.msg}
          {/* <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
          > 
          </button> */}
        </div>
      </>
    )
  );
}
