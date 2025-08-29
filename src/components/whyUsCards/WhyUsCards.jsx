import './WhyUsCards.css'

const WhyUsCards = ({ icon, title, subtitle }) => {
  return (
    <li className='why-us-cards'>
        <div className="icon">
            <img src={icon} alt="" />
        </div>
        <h4>Belajar dari Nol, Tanpa Minder</h4>
        <p>Cocok untuk pemula yang merasa tidak punya pengalaman</p>
    </li>
  )
}

export default WhyUsCards