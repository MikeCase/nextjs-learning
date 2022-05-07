import resumeStyles from '../../styles/Resume.module.css'


const R_Objective = ({props}) => {
    const objective = props.body.toString();

    return (

        <>
            <h2>Objective</h2>
            <p>{objective}</p>
        </>
    );
}

export default R_Objective;