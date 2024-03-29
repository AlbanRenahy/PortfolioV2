import { useRef, useEffect, useContext } from 'react';
import gsap from 'gsap';

import styles from './Header.module.sass';

import { AppContext } from '../../store/AppContext';

import { ReactComponent as Crystal } from '../../media/main_crystal.svg';

const Header: React.FC = (props) => {

    const { setCurrentSection } = useContext(AppContext);
    const crystalRef: React.MutableRefObject<null | SVGSVGElement> = useRef(null);

    useEffect(() => {
        const crystal = crystalRef.current;

        const crystalTL = gsap.timeline({ defaults: { ease: 'Expo.easeOut', transformOrigin: 'center' } });
        const [mainShardTL, lowerShardTL, leftShardTL, tinyShardTL, lowerLeftShardTL] = Array.from(Array(5), () => (gsap.timeline({ defaults: { ease: 'none', transformOrigin: 'center' }, repeat: -1 })))

        if (crystal) {
            const elementGetter = gsap.utils.selector(crystal);

            const [lowerShard, lowerLeftShard, leftShard, tinyShard, mainShard] = ['lower', 'lower-left', 'middle-left', 'middle-tiny', 'main'].map((element) => (elementGetter(`[id="main_crystal_svg__${element}"]`)));

            gsap.set(crystal, { autoAlpha: 0 });

            crystalTL.fromTo(crystal, { scale: 3, filter: ' grayscale(0) blur(10px)' }, { ease: 'bounce.out', duration: 1.6, scale: 1, delay: 3.1, filter: 'grayscale(0) blur(0px)', autoAlpha: 1 })
                .to(lowerShard, { duration: .4, delay: -.2, yPercent: '25', rotateZ: '-3deg' })
                .to(lowerLeftShard, { duration: .4, delay: -.4, yPercent: '20', xPercent: '-30', rotateZ: '-5deg' })
                .to(leftShard, { duration: .4, delay: -.4, yPercent: '-30', xPercent: '-95', rotateZ: '-18deg' })
                .to(tinyShard, { duration: .4, delay: -.4, xPercent: '-195', rotateZ: '-5deg' })
                .to([crystal, '#alban'], { ease: 'Expo.easeOut', duration: 1, delay: -.5, filter: 'grayscale(1)' })
                .to([crystal, '#alban'], { ease: 'bounce.out', duration: 2, delay: .6, filter: 'grayscale(0)' })
                .to(crystal, { duration: .1, filter: 'none' })

            mainShardTL.delay(crystalTL.duration() - .8)
                .to(mainShard, { duration: 2, xPercent: '-5', yPercent: '-4', rotateZ: '-2deg' })
                .to(mainShard, { duration: 2, xPercent: '0', yPercent: '-6', rotateZ: '0deg' })
                .to(mainShard, { duration: 2, xPercent: '5', yPercent: '-2', rotateZ: '2deg' })
                .to(mainShard, { duration: 2, xPercent: '0', yPercent: '0', rotateZ: '0deg' })

            lowerShardTL.delay(crystalTL.duration() - .4)
                .to(lowerShard, { duration: 2, yPercent: '35', rotateZ: '2deg' })
                .to(lowerShard, { duration: 2, yPercent: '40', rotateZ: '-4deg' })
                .to(lowerShard, { duration: 2, yPercent: '30', rotateZ: '3deg' })
                .to(lowerShard, { duration: 2, yPercent: '25', rotateZ: '-3deg' })

            leftShardTL.delay(crystalTL.duration() - .3)
                .to(leftShard, { duration: 2.4, yPercent: '-40', xPercent: '-125', rotateZ: '-26deg' })
                .to(leftShard, { duration: 2.4, yPercent: '-45', xPercent: '-100', rotateZ: '-16deg' })
                .to(leftShard, { duration: 2.4, yPercent: '-40', xPercent: '-84', rotateZ: '-6deg' })
                .to(leftShard, { duration: 2.4, yPercent: '-30', xPercent: '-95', rotateZ: '-18deg' })

            tinyShardTL.delay(crystalTL.duration() - .5)
                .to(tinyShard, { duration: 1.2, xPercent: '-225', yPercent: '-30', rotateZ: '-5deg' })
                .to(tinyShard, { duration: 1.2, xPercent: '-175', yPercent: '-4', rotateZ: '0deg' })
                .to(tinyShard, { duration: 1.2, xPercent: '-155', yPercent: '40', rotateZ: '5deg' })
                .to(tinyShard, { duration: 1.4, xPercent: '-175', yPercent: '60', rotateZ: '5deg' })
                .to(tinyShard, { duration: 1.2, xPercent: '-195', yPercent: '0', rotateZ: '-5deg' })

            lowerLeftShardTL.delay(crystalTL.duration() - .5)
                .to(lowerLeftShard, { duration: 1.5, yPercent: '40', xPercent: '-45', rotateZ: '-6deg' })
                .to(lowerLeftShard, { duration: 1.5, yPercent: '50', xPercent: '-35', rotateZ: '-2deg' })
                .to(lowerLeftShard, { duration: 1.5, yPercent: '30', xPercent: '-22', rotateZ: '3deg' })
                .to(lowerLeftShard, { duration: 1.5, yPercent: '20', xPercent: '-30', rotateZ: '-5deg' })
        };

        gsap.timeline({
            scrollTrigger: {
                trigger: '#header',
                onEnter: () => { setCurrentSection('header') },
                onEnterBack: () => { setCurrentSection('header') },
                start: 'top center',
                end: 'bottom center'
            }
        });

    }, []);

    return (
        <header className={styles.header} id="header">
            <Crystal className={styles.crystal} ref={crystalRef} />
            <div className={styles.hello_wrapper}>
                <div className={styles.hello}>
                    <div className={styles.overflow_wrapper}><p className={styles.line}>Bonjour!</p></div>
                    <div className={styles.overflow_wrapper}><p className={styles.line}>je suis</p></div>
                    <div className={styles.overflow_wrapper}><h1 className={styles.color} id='alban'><span></span><span>a</span><span>l</span><span>b</span><span>a</span><span>n</span></h1></div>
                    <div className={styles.overflow_wrapper}><p className={styles.line}>fullstack webdeveloper</p></div>
                </div>
            </div>

            {/* <div className={styles.hello_v2}> */}
            {/* <div className={styles.overflow_wrapper}><p className={styles.line}>cześć!</p></div>
                <div className={styles.overflow_wrapper}><p className={styles.line}>jestem</p></div> */}
            {/* <div className={styles.overflow_wrapper_v2}><h1 className={styles.color_v2}>vu<span>ka</span>in</h1></div> */}
            {/* <div className={styles.overflow_wrapper}><p className={styles.line}>fullstack webdeveloper</p></div> */}
            {/* </div> */}

        </header>
    );
}

export default Header;