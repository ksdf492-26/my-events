'use client'
import Input from '@/components/Input'
import Checkbox from '@/components/Checkbox'
import Button from '@/components/Button'
import LoginAccont from '@/components/LoginAccont'
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useState } from 'react'
import { User } from '@/types/user'
import { useRouter } from 'next/navigation'
function Index() {
    const [formData, setFormData] = useState<User>({
        name: "",
        email: "",
        password: ""
    })
    const router = useRouter()
    const handleChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const Login = (data: User) => {
        try {
            localStorage.setItem('user', JSON.stringify(data))

            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section className="flex items-center bg-white justify-between w-screen h-screen">
            <div className="w-1/2 h-full relative">
                <img
                    className="w-full h-full object-cover"
                    src="./backgrounds/Img-01.jpg"
                    alt=""
                />
                <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div>
                        <img src="./logo.png" alt="Logo" />
                    </div>
                    <div className="text-center text-2xl font-bold mt-4">
                        <div>O site de eventos que mais</div>
                        <div>conecta comunidades!</div>
                    </div>
                </div>

            </div>
            <form className="w-1/2 p-10 h-full flex flex-col items-center justify-between text-gray-400">
                <div className="text-2xl font-bold text-black text-center">
                    <div>Crie uma conta gratuita e veja os eventos</div>
                    <div>que estão bombando na sua cidade</div>
                </div>
                <div className='w-full flex flex-col items-center gap-10'>
                    <Input name='name' onChange={handleChange} value={formData.name} type='text' placeholder='Digite seu usuario' />
                    <Input name='email' onChange={handleChange} value={formData.email} type='email' placeholder='Digite seu email' />
                    <Input name='password' onChange={handleChange} value={formData.password} type='password' placeholder='Digite sua senha' />
                </div>

                <div className='flex items-center text-white w-[400px] justify-between gap-15'>
                    <Checkbox />
                    <Button OnClick={() => Login(formData)} text='Login' type='button' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <small className='text-gray-600'>
                        Já possui conta? Entre com
                    </small>
                    <div className='text-gray-600 flex items-center justify-center'>
                        <LoginAccont Icon={FaGoogle} route='' text='Entre com Google' />
                        <LoginAccont Icon={FaFacebook} route='' text='Entre com facebook' />
                    </div>
                </div>
            </form>
        </section>
    );
}
export default Index;
