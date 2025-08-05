function Button(onClick, label, className) {
    return(<>
        <button
        className={`counter-btn ${className}`}
        onClick={onClick}
        >{label}</button>
    </>
)
}

export default Button