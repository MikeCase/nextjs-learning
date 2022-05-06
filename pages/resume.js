import Head from 'next/head'
import ResumeLayout from '../components/resume/ResumeLayout'
import ResumeHeader from '../components/resume/ResumeHeader'
import R_Objective from '../components/resume/R_Objective'
import R_Skills from '../components/resume/R_Skills'


export default function Resume() {
    return(
        <div>
            <ResumeLayout>
                <ResumeHeader />
                <br/>
                <R_Objective />
                <br />
                <R_Skills />
            </ResumeLayout>
        </div>
    )
}