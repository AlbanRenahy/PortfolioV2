import { useCallback, useContext, useState } from 'react';

import { AppContext } from '../../store/AppContext';

import NavigationButton from './NavigationButton/NavigationButton';

import styles from './Navigation.module.sass';


const Navigation: React.FC = () => {

    const [mobileNavigationVisibility, setMobileNavigationVisibility] = useState(false);

    // const { currentSection, setCurrentSection } = useContext(AppContext);

    const hamburgerHandler = () => {
        setMobileNavigationVisibility(!mobileNavigationVisibility);
    };

    type ButtonData = { name: string, id: string };

    const buttonsData: ButtonData[] = [{ name: 'alban', id: 'header' }, { name: 'projets', id: 'projects' },
    { name: 'compétences', id: 'skills' }, { name: 'contact', id: 'contact' }]
    const buttonsList = buttonsData.map((item, idx) => (<NavigationButton navigationVisibility={mobileNavigationVisibility} navigationVisibilitySetter={setMobileNavigationVisibility} name={item.name} id={item.id} key={idx} />))

    return (
        <nav className={mobileNavigationVisibility ? styles.navigation : styles['navigation--hidden']}>
            {buttonsList}
            <div className={mobileNavigationVisibility ? styles['hamburger--active'] : styles.hamburger} onClick={hamburgerHandler}> <div className={styles.hamburger_icon}></div></div>
        </nav >
    );
};

export default Navigation;