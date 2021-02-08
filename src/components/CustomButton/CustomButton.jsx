import './CustomButton.styles.scss'



const CustomButton = ({ children, googleSignIn, ...other }) => {
    return (
        <div>
            <button className={`${googleSignIn ? 'googleSignIn' : ''}  custom-button`} {...other}>
                {children}
            </button>
        </div>
    )
}

export default CustomButton
