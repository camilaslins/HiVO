import "./forminput.css"

export const FormInput = (props) => {
    const { label, onChange, id, ...inputProps} = props;
    return (
        <div className="FormInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
        </div>
    )
}