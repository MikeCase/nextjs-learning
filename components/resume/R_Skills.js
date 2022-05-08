import resumeStyles from '../../styles/Resume.module.css'

const R_Skills = ({skills}) => {
    return (
        <>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, idx) => (
                    // eslint-disable-next-line react/jsx-key
                    <li key={idx}>{skill.name}</li>
                ))}
            </ul>
        </>
    );
}

export default R_Skills;