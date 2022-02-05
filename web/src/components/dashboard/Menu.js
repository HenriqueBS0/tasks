import * as Icons from 'react-icons/bi';
import Logo from '../Logo';
import MenuCategorias from './MenuCategorias';
import MenuDados from './MenuDados';
import MenuFooter from './MenuFooter';

export default function Menu() {

    const categorias = [
        {
            icon: Icons['BiHome'],
            name: 'Casa'
        },
        {
            icon: Icons['BiUserPlus'],
            name: 'Família'
        }
    ]

    return (
        <nav className="hidden sm:block md:block lg:block xl:block 2xl:block sm:col-span-4 md:col-span-3 xl:col-span-2 row-span-2 py-5 pl-5 bg-white shadow-xl">
            <div className="h-full flex flex-col">
                <div className="mb-14">
                    <Logo />
                </div>
                <div className="mb-14">
                    <MenuCategorias categorias={categorias} />
                </div>
                <div className='mb-14'>
                    <MenuDados/>
                </div>
                <div className="grow flex flex-col justify-end">
                    <MenuFooter />
                </div>
            </div>
        </nav>
    );
}