export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50 grid grid-cols-12 grid-rows-[auto_1fr]">
            <nav className="bg-green-500 col-span-2 row-span-2">Menu</nav>
            <header className="bg-blue-500 col-span-10">Top</header>
            <main className="bg-pink-500 col-span-6">Conteudo</main>
            <aside className="bg-orange-500 col-span-4">Aside</aside>
        </div>
    );
}