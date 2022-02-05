import MenuItem from './MenuItem';
import {BiLineChart, BiTrendingUp } from 'react-icons/bi'

export default function MenuDados() {
    return (
        <>
            <div className='mb-5'>
                <span className="text-2xl text-teal-600">Dados</span>
            </div>
            <div className="mb-7">
                <MenuItem icon={<BiLineChart />} name="Estatísticas" />
            </div>
            <div>
                <MenuItem icon={<BiTrendingUp />} name="Comparar" />
            </div>
        </>
    )
}