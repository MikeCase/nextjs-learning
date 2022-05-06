import Head from 'next/head'
import ResumeLayout from '../components/resume/ResumeLayout'
import ResumeHeader from '../components/resume/ResumeHeader'
import R_Objective from '../components/resume/R_Objective'
import R_Skills from '../components/resume/R_Skills'
import R_Education from '../components/resume/R_Education'
import R_WorkHist from '../components/resume/R_WorkHist'


export default function Resume() {
    return(
        <ResumeLayout>
            <ResumeHeader />
            <br/>
            <R_Objective />
            <br />
            <R_Skills />
            <br />
            <R_Education />
            <br />
            <R_WorkHist />
        </ResumeLayout>
    )
}