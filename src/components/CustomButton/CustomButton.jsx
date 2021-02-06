import './CustomButton.styles.scss'



const CustomButton = ({ children, ...other }) => {
    return (
        <div>
            <button className='custom-button' {...other}>
                {children}
            </button>
        </div>
    )
}

export default CustomButton
