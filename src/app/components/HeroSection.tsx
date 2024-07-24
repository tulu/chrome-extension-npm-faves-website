import ButtonLink from './ButtonLink';
import { FaGithub, FaChrome } from 'react-icons/fa';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-white text-center py-20 mt-10">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl font-bold mb-4">npm faves</h1>
                <p className='text-3xl font-bold mb-6 text-slate-500'>Manage your favorite npm packages</p>
                <div className='flex items-center mx-auto gap-4 w-fit'>
                    <ButtonLink
                        icon={FaChrome}
                        defaultHover
                        href="https://chromewebstore.google.com/detail/npm-faves/lgcedkogdjoickahfdegicgmbkloaaem">
                        Get npm faves
                    </ButtonLink>

                    <ButtonLink
                        icon={FaGithub}
                        href="https://github.com/tulu/chrome-extension-npm-faves">
                        Source code
                    </ButtonLink>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
