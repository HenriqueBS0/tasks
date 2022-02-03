export default function Button({type, children, className}) {
    return (
        <button className={`px-6 py-3 rounded-lg text-base ${className}`} type={type}>
            {children}
        </button>
    );
}