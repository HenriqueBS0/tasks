import image from '../assets/img/logo.svg';

export default function Header() {
    return (
        <header className='p-5'>
            <div className='h-12'>
                <img className='h-full' src={image} alt="logo" />
            </div>
        </header>
    );
}