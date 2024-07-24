
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
    icon?: IconType;
    defaultHover?: boolean;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children, icon: Icon, defaultHover = false }) => {
    return (
        <a
            href={href}
            target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center border border-npmRed py-2 px-4 rounded transition-colors duration-300 ${defaultHover ? 'bg-npmRed text-white' : 'text-npmRed hover:bg-npmRed hover:text-white'}`}
        >
            {Icon && <Icon className="mr-2" />}
            {children}
        </a>
    );
};

export default ButtonLink;
