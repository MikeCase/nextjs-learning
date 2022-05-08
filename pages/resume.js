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
    console.log(props.skills)
    // console.log({user_data})
    return(
        <ResumeLayout>
            <ResumeHeader props={props.user_data} />
            <hr className={resumeStyles.hr}/>
            <R_Objective props={props.objective}/>
            <hr className={resumeStyles.hr}/>
            <R_Skills skills={props.skills}/>
            <hr className={resumeStyles.hr}/>
            <R_Education props={props.education}/>
            <hr className={resumeStyles.hr}/>
            <R_WorkHist work_hists={props.work_hist}/>
        </ResumeLayout>
    )
}


export const getServerSideProps = async (_ctx) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/3")
    const user_data = await res.json()
    const objective_data = await fetch("https://jsonplaceholder.typicode.com/posts/8")
    const objective = await objective_data.json()
    const edu_data = await fetch("https://jsonplaceholder.typicode.com/todos")
    const education = await edu_data.json()
    const skill_data = await fetch("http://127.0.0.1:8000/skills")
    const skills = await skill_data.json()
    const work_data = await fetch("https://jsonplaceholder.typicode.com/users")
    const work_hist = await work_data.json()
    return {
        props:{
            user_data,
            objective,
            education,
            skills,
            work_hist,

        }
    }
}
