import resumeStyle from '../../styles/Resume.module.css'


const R_WorkHist = () => {
    return (
        <div className={resumeStyle.card}>
            <h2>Work History</h2>
            <ul>
                <li>Job 1</li>
                <li>Job 2</li>
                <li>Job 3</li>
            </ul>
        </div>
    );
}

export default R_WorkHist;