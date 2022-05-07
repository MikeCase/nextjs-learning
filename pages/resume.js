import Head from 'next/head'
import resumeStyles from '../styles/Resume.module.css'
import ResumeLayout from '../components/resume/ResumeLayout'
import ResumeHeader from '../components/resume/ResumeHeader'
import R_Objective from '../components/resume/R_Objective'
import R_Skills from '../components/resume/R_Skills'
import R_Education from '../components/resume/R_Education'
import R_WorkHist from '../components/resume/R_WorkHist'


export default function Resume(props) {
    // const user_data = props.user_data;
    // const objective = props.objective;
    console.log(props)
    // console.log({user_data})
    return(
        <ResumeLayout>
            <ResumeHeader props={props.user_data} />
            <hr className={resumeStyles.hr}/>
            <R_Objective props={props.objective}/>
            <hr className={resumeStyles.hr}/>
            <R_Skills />
            <hr className={resumeStyles.hr}/>
            <R_Education />
            <hr className={resumeStyles.hr}/>
            <R_WorkHist />
        </ResumeLayout>
    )
}


export const getServerSideProps = async (_ctx) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/3")
    const user_data = await res.json()
    const objective_data = await fetch("https://jsonplaceholder.typicode.com/posts/8")
    const objective = await objective_data.json()
    return {
        props:{
            user_data,
            objective,
        }
    }
}
