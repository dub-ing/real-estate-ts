function Button({label, bgColor}) {
    return (
        <button className={`py-2 px-5 border-2 border-white rounded-sm text-md text-white ${bgColor ? `${bgColor} border-none` : 'bg-transparent'}`}>
            {label}
        </button>
    )
}

export default Button
