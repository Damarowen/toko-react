import React from 'react'

import './Spinneer.styles.scss'

const Spinner = NextComponent => {
const spinner = ({isLoading, ...other}) => {
   //* other { history, location, params}
    return isLoading ? (
        <div className="SpinnerOverlay">
            <div className="SpinnerContainer" />
            </div>
    ) : (
        <NextComponent { ...other}/>
    )
}
return spinner;
}


export default Spinner