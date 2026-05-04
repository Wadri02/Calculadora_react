function Button({ onClick, children, className = '', disabled = false }) {
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {children}
        </button>
    );
}

export default Button;
