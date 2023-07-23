function Input({label, type, placeholder, event}) {
    return (
        <div>
            <label>{label}:
                <input type={type} placeholder={placeholder} onChange={(e) => event(e.target.value)} required="required" />
            </label>
        </div>
    )
}

export default Input