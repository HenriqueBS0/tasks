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
        <nav className="
            w-full h-full
            py-5 pl-5
            hidden fixed
            sm:block md:block lg:block xl:block 2xl:block
            sm:relative md:relative lg:relative xl:relative 2xl:relative
            sm:col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-2 2xl:col-span-1
            row-span-3 sm:row-span-3 md:row-span-3 lg:row-span-2 xl:row-span-2 2xl:row-span-2
          bg-white shadow-xl
        ">
            <div className="h-full flex flex-col">
                <div className="mb-14 flex justify-between">
                    <Logo />
                    <div className='sm:hidden flex justify-center items-center mr-5 cursor-pointer'>
                        <span className='text-3xl text-slate-700'><Icons.BiX /></span>
                    </div>
                </div>
                <div className="mb-14">
                    <MenuCategorias categorias={categorias} />
                </div>
                <div className='mb-14'>
                    <MenuDados />
                </div>
                <div className="grow flex flex-col justify-end">
                    <MenuFooter />
                </div>
            </div>
        </nav>
    );
}