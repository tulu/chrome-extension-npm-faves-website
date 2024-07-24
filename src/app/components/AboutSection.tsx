const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-10 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">About</h2>
                <p className="text-lg text-gray-700 mb-4">
                    As developers we start new projects every now and then and probably we use the same node packages over and over. These are great pieces of code that by using them allow us to focus on our main problems to solve.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    The issue is that once we start the project we need to take the packages from somewhere. We may copy them from another package.json file, clone a template repo or maybe we already have the npm install snippet stored in a file.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Another common issue is when you find a great package that you want to try but then you forget about it. This happens to me a lot.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    The idea behind npm faves is to keep track of your favorite npm packages directly in the browser as an extension.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
