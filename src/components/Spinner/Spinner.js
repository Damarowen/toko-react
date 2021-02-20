import React from 'react'

import './Spinner.styles.scss'

const Spinner = WrappedComponent => {
const spinner = ({isLoading, ...other}) => {
    return isLoading ? (
        <div className="SpinnerOverlay">
            <h1 className="ss">saasdsad</h1>
            <div className="SpinnerContainer" />
            </div>
    ) : (
        <WrappedComponent { ...other}/>
    )
}
return spinner;
}


export default Spinner