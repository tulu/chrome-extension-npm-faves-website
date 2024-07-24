import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-gray-600 py-6">
            <div className="container mx-auto px-6 flex justify-center items-center">
                <Image src="/images/npm-faves-logo.png" alt="npm faves Logo" width={40} height={40} className="mr-2" />
                <span className="text-xl font-bold">npm faves</span>
            </div>
        </footer>
    );
};

export default Footer;
