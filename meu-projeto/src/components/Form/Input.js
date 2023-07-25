function Input({label, type, placeholder, value, event, action}) {
    return (
        <label>{label}
            <input type={type} value={value} placeholder={placeholder} onChange={(e) => event(e.target.value)} required="required" onClick={action} />
        </label>
    )
}

export default Input