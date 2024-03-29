import React, { ReactSVG, useContext } from 'react';

import { AppContext } from '../../../store/AppContext';

import styles from './NavigationButton.module.sass';
import { clsx } from 'clsx';

type MyProps = { id: string, name: string, navigationVisibility: boolean, navigationVisibilitySetter: React.Dispatch<React.SetStateAction<boolean>> };

const NavigationButton: React.FC<MyProps> = ({ id, name, navigationVisibility, navigationVisibilitySetter }) => {


    const { setNavigateTo, currentSection, setCurrentSection } = useContext(AppContext);


    const onClickHandler = () => {
        setCurrentSection(id)
        if (window.matchMedia('(orientation: landscape)').matches) {
            setNavigateTo(name);
            navigationVisibilitySetter(true)
            setTimeout(() => {
                window.location.href = `#${id}`;
            }, 1100);
            setTimeout(() => {
                navigationVisibilitySetter(false);
            }, 1200)
        } else {
            window.location.href = `#${id}`;
            setTimeout(() => {
                navigationVisibilitySetter(false);
            }, 200)
        }
    };

    return (
        <button className={clsx(styles.button, !navigationVisibility && styles['button--hidden'], currentSection === id && styles['button--active'])} onClick={onClickHandler}>
            <span className={styles.text}>{name}</span>
        </button >
    );
};

export default NavigationButton;