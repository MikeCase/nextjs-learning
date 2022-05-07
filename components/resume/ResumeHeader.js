import resumeStyles from '../../styles/Resume.module.css'


const ResumeHeader = ({props}) => {
    const user_name = props.name.toString();
    const user_email = props.email.toString();
    const user_phone = props.phone.toString();
    // console.log(props.address.street.toString());

    return (
        <>
            <h2>Contact Info</h2>
            <ul>
                <li>
                    Name: {user_name}
                </li>
                <li>
                    Email: {user_email}
                </li>
                <li>
                    Phone #: {user_phone}
                </li>
            </ul>
        </>
    );
}

export default ResumeHeader;