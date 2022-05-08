import resumeStyle from '../../styles/Resume.module.css'


const R_WorkHist = ({work_hists}) => {
    return (
        <>
            <h2>Work History</h2>
            <ul>
                {work_hists.map((work_hist, idx) => (
                    // eslint-disable-next-line react/jsx-key
                    <li key={idx}>{work_hist.company.name}</li>
                ))}
            </ul>
        </>
    );
}

export default R_WorkHist;