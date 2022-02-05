import MenuItem from './MenuItem';
import { BiAddToQueue } from 'react-icons/bi'

export default function MenuCategorias({categorias}) {
    return (
        <>
            <div className='mb-5'>
                <span className="text-2xl text-teal-600">Categorias</span>
            </div>

            {
                categorias.map((categoria, index) => {
                    return (
                        <div className="mb-7">
                            <MenuItem icon={<categoria.icon />} name={categoria.name} active={index === 0} />
                        </div>
                    );
                })
            }

            <div>
                <div className="flex cursor-pointer text-teal-600">
                    <div>
                        <span className="text-2xl"><BiAddToQueue /></span>
                    </div>
                    <div className="grow mx-2">
                        <span className="text-base">Adicionar</span>
                    </div>
                </div>
            </div>
        </>
    );
}