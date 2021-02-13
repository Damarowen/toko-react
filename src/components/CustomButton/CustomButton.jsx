import './CustomButton.styles.scss'



const CustomButton = ({ children, googleSignIn, inverted, ...other }) => {
    return (
        <div>
            <button className={`${inverted ? 'inverted' : ''} 
            ${googleSignIn ? 'googleSignIn' : ''}  custom-button`} {...other}>
                {children}
            </button>
        </div>
    )
}

export default CustomButton
