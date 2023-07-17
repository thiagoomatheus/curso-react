function Input({label, type, placeholder}) {
    return (
        <div>
            <label>{label}:
                <input type={type} placeholder={placeholder} />
            </label>
        </div>
    )
}

export default Input