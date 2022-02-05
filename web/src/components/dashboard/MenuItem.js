function MenuItem({ icon, name, active = false }) {

    return (
        <div className="flex cursor-pointer">
            <div>
                <span className="text-2xl text-slate-500">{icon}</span>
            </div>
            <div className="grow mx-2">
                <span className="text-base text-slate-500">{name}</span>
            </div>
            <div className={`w-10 rounded-l-full ${active ? 'bg-teal-600' : ''} `}></div>
        </div>
    );
}

export default MenuItem;