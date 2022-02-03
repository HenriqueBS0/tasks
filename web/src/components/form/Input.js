export default function Input({className, type, placeholder}) {
    return (
        <input
            className={`
            w-full h-10
            border border-slate-300 rounded-md
            outline-none focus:border-teal-600
            px-4 py-2
            text-slate-500 placeholder:text-slate-400
            ${className}`}
            type={type}
            placeholder={placeholder}/>
    );
}