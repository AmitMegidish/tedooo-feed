import React from 'react';
import styles from './Header.module.css';
import TedoooLogo from '../../assets/tedooo-logo.svg';
import SearchIcon from '../../assets/search.svg';
import UserAvatar from '../../assets/user-avatar.svg';
import Home from '../../assets/nav/home.svg';
import Message from '../../assets/nav/message-circle.svg';
import Bell from '../../assets/nav/bell.svg';
import Link from '../Link/Link';

const navLinks = [
    {
        name: "Home",
        icon: Home
    },
    {
        name: "Messaging",
        icon: Message
    },
    {
        name: "Notifications",
        icon: Bell
    },
];

const Header: React.FC = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoAndSearch}>
                <img src={TedoooLogo} alt="tedooo logo" />
                <div className={styles.search}>
                    <img src={SearchIcon} alt="search icon" />
                    <input placeholder='Search' type="text" />
                </div>
            </div>
            <div className={styles.navContainer}>
                <div className={styles.linksContainer}>
                    {navLinks.map(({ name, icon }, i) => (
                        <Link
                            key={name}
                            index={i}
                            name={name}
                            icon={icon}
                        />
                    ))}
                </div>
                <img src={UserAvatar} width={40} height={40} alt="user's avatar" />
            </div>
        </div>
    );
};

export default Header;