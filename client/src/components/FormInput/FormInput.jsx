import './FormInput.styles.scss'

const FormInput = ({ handleChange, label, ...other }) => {

    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...other} />

                    <label className={`${other.value.length ? 'textDiAtas' : ''} form-input-label `}>
                        {label}
                    </label>
        
        </div>

    )
}

export default FormInput
