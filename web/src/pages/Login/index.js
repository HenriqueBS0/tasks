import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CartContainer from '../../components/CardContainer';
import Input from '../../components/form/Input';
import Button from '../../components/form/Button';

export default function Login() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className='grow flex justify-center'>
                <CartContainer className="h-full w-11/12 sm:w-2/3 md:w-2/3 lg:w-1/2 p-5 flex flex-col">
                    <div className='mb-5'>
                        <h1 className='text-xl text-center text-teal-600 font-semibold'>Entre</h1>
                    </div>
                    <div className='mb-5'>
                        <Input type='email' placeholder='E-mail' />
                    </div>
                    <div className='mb-5'>
                        <Input type='password' placeholder='Senha' />
                    </div>
                    <div className='mb-5'>
                        <Button className='w-full bg-teal-600 text-white '>Entrar</Button>
                    </div>
                    <div className='mb-5'>
                        <a className='text-sm' href='http'>Não tem conta? <span className='underline text-teal-600'>Cadastre-se</span></a>
                    </div>
                </CartContainer>
            </main>
            <Footer />
        </div>
    );
}