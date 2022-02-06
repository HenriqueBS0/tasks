import Menu from '../../components/dashboard/Menu';
import Header from '../../components/dashboard/Header';
import Main from '../../components/dashboard/Main';
import Aside from '../../components/dashboard/Aside';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-slate-50 grid grid-cols-12 grid-rows-[auto_auto_1fr] lg:grid-rows-[auto_1fr]">
            <Menu />
            <Header />
            <Main />
            <Aside />
        </div>
    );
}