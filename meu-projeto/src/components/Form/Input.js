function Input({label, type, placeholder, value, defaultValue, event, action}) {
    return (
        <label>{label}
            <input type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} onChange={(e) => event(e.target.value)} required="required" onClick={action} />
        </label>
    )
}

export default Input