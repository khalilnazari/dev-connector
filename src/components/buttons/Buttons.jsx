import './buttons.scss'; 
import {Link} from 'react-router-dom'
import {IoIosArrowRoundBack} from 'react-icons/io'

const PrimaryLink = ({url, text}) => (
    <Link to={url} className="primary-link">{text}</Link>
)


const PrimaryButton = ({bgColor, textColor, text}) => (
    <button className='primaryBtn' style={{backgroundColor:bgColor, color:textColor}}>{text}</button>
)

const IconButton =({bgColor, textColor, icon}) => (
    <button className='iconButton' style={{backgroundColor:bgColor, color:textColor}}>{icon}</button>
)


const BackButton = ({url}) => (
    <Link to={url} className='BackButton'><IoIosArrowRoundBack className='BackButton-icon'/> Back</Link>
)

export {
    PrimaryLink, 
    PrimaryButton, 
    IconButton, 
    BackButton
}

