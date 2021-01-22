import React from "react"

export const Alert = ({text}) => {
    console.log('Alert')
    return (
        <div className="alert alert-warning" role="alert">
            {text}
        </div>
    )
}