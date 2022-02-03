export default function CardContainer({className, children}) {
    return (
        <div className={`rounded-xl bg-white shadow-xl ${className}`}>{children}</div>
    );
}