import { FaPlusSquare, FaSearch, FaListAlt, FaInfoCircle, FaSyncAlt, FaClipboard, FaBoxes, FaFileAlt } from 'react-icons/fa';

const KeyFeaturesSection: React.FC = () => {
    const features = [
        { text: "Add favorite packages from npmjs.com", icon: <FaPlusSquare /> },
        { text: "Search packages in npmjs.com", icon: <FaSearch /> },
        { text: "View faved packages list", icon: <FaListAlt /> },
        { text: "View package information", icon: <FaInfoCircle /> },
        { text: "Sync information with registry.npmjs.org", icon: <FaSyncAlt /> },
        { text: "Copy to clipboard install snippet", icon: <FaClipboard /> },
        { text: "Manage collections of packages", icon: <FaBoxes /> },
        { text: "Download collection's package.json", icon: <FaFileAlt /> },
    ];

    return (
        <section id="key-features" className="py-10 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto w-fit">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3 max-w-md text-right">
                            <div className="text-npmRed text-lg mt-1">
                                {feature.icon}
                            </div>
                            <p className="text-lg text-gray-700">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyFeaturesSection;
