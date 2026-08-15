
export default function InputField(props) {
    const { label, type = 'text', name, placeholder, value, onChange, style, required } = props;

    return (
        <div className="input-wrapper">
            {label && (
                <label className="input-label" htmlFor={name}>
                    {label}
                </label>
            )}

            {type === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={style}
                    required={required}
                />
            ) : (
                <input
                    id={name}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    style={style}
                    required={required}
                />
            )}
        </div>
    );
}