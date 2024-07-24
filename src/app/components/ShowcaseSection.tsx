const ShowcaseSection: React.FC = () => {
    return (
        <section id="showcase" className="py-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8"></h2>
                <div className="flex flex-wrap justify-center md:justify-between">
                    <div className="w-full md:w-1/3 p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src="/images/showcase-content-script.gif" alt="Showcase 1" className="w-full" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src="/images/showcase-navigation.gif" alt="Showcase 2" className="w-full" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src="/images/showcase-clipboard.gif" alt="Showcase 3" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
