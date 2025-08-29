import './OurCourseCards.css';

const OurCourseCards = ({ icon, title, subtitle }) => {
  return (
    <li className='our-course-cards'>
        <div className="our-course-image">
            <img src={icon} alt="" />
        </div>
        <div className="our-course-content">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
        <div className="our-course-details">
            <a href="#">View Course</a>
        </div>
    </li>
  )
}

export default OurCourseCards