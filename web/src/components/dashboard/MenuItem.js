function MenuItem({ icon, name, active = false }) {

    return (
        <div className="flex cursor-pointer text-slate-700">
            <div className="w-6 h-6">
                <span className="text-2xl">{icon}</span>
            </div>
            <div className="grow mx-2">
                <span className="text-base">{name}</span>
            </div>
            <div className={`w-10 rounded-l-full ${active ? 'bg-teal-600' : ''} `}></div>
        </div>
    );
}

export default MenuItem;