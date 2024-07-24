import Image from 'next/image';
import ButtonLink from './ButtonLink';
import { FaChrome } from 'react-icons/fa';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-white py-4 shadow sticky top-0 z-50">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <Image src="/images/npm-faves-logo.png" alt="npm faves Logo" width={40} height={40} className="mr-3" />
                    <a href="#" className="text-xl font-bold">npm faves</a>
                </div>
                <div className='text-npmRed'>
                    <a href="#showcase" className="px-4 hover:text-red-400">Showcase</a>
                    <a href="#key-features" className="px-4 hover:text-red-400">Key Features</a>
                    <a href="#about" className="px-4 hover:text-red-400">About</a>
                    <ButtonLink
                        icon={FaChrome}
                        defaultHover
                        href="https://chromewebstore.google.com/detail/npm-faves/lgcedkogdjoickahfdegicgmbkloaaem">
                        Get npm faves
                    </ButtonLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
