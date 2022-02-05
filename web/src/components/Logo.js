import image from '../assets/img/logo.svg';

export default function Logo() {
    return (
        <div className="h-12">
        <img className='h-full' src={image} alt="logo" />
    </div>
    );
}