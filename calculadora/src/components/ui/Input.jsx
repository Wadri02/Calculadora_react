function Input({ value, onChange, onKeyDown, placeholder, type = 'text', className = '' }) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={className}
        />
    );
}

export default Input;
