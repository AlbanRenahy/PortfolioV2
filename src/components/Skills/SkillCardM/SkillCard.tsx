import classes from './SkillCard.module.sass';

import { ReactComponent as FrontendIcon } from '../../../media/icons/adjustments.svg';
import { ReactComponent as BackendIcon } from '../../../media/icons/tools-2.svg';
import { ReactComponent as GraphicIcon } from '../../../media/icons/tools.svg';

interface MyProps {
    position: 'first' | 'second' | 'third',
};

const SkillCard: React.FC<MyProps> = (props: MyProps) => {

    type CardData = Record<MyProps['position'], { title: string, icon: JSX.Element, skills: string[] }>;

    const cardData: CardData = {
        first: { title: 'frontend', icon: <FrontendIcon className={classes[`icon_image_${props.position}`]} />, skills: ['html', 'css', 'sass', 'tailwind', 'bootstrap', 'javascript', 'typescript', 'react', 'redux'] },
        second: { title: 'backend', icon: <BackendIcon className={classes[`icon_image_${props.position}`]} />, skills: ['node.js', 'next.js', 'java', 'mongodb'] },
        third: { title: 'soft skills', icon: <GraphicIcon className={classes[`icon_image_${props.position}`]} />, skills: ['rigor', 'team work', 'adaptability', 'communication', 'self learning', 'accountability'] }
    };

    return (
        <div className={classes.card}>
            <div className={`${classes.front} ${classes[`front_${props.position}`]}`}>
                <h2 className={classes[`title_${props.position}`]}>{cardData[props.position].title}</h2>
            </div>
            <div className={classes[`back_${props.position}`]}>
                <h2 className={`${classes[`title_${props.position}`]} ${classes.title_skewed}`}>{cardData[props.position].title}</h2>
                <ul className={classes.skills}>
                    {cardData[props.position].skills.map((skill, idx) => <li className={classes.skill} key={idx}>{skill}</li>)}
                </ul>
                <div className={classes.icon}>
                    {cardData[props.position].icon}
                </div>
            </div>
        </div>
    );
};

export default SkillCard;