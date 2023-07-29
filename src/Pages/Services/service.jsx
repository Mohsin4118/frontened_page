import React from 'react'
import './service.scss'
import Card from '../../Components/Card/card'
import serImg from '../../assets/service.png'
import serimg1 from '../../assets/service1.png'
import serimg2 from '../../assets/services2.jpg'
import img1 from '../../assets/trade9.jpg'
import img2 from '../../assets/trade10.jpg'
import img3 from '../../assets/trade11.jpg'
import img4 from '../../assets/trade.png'
import img5 from '../../assets/trade2.png'
import img6 from '../../assets/trade3.png'
import img7 from '../../assets/trade4.png'
import img8 from '../../assets/trade5.png'
import img9 from '../../assets/trade6.png'
import img10 from '../../assets/trade7.png'
import img11 from '../../assets/trade8.png'
import img12 from '../../assets/trade13.png'
import img13 from '../../assets/trade14.png'
import img14 from '../../assets/trade15.png'
import img15 from '../../assets/trade12.png'
import img16 from '../../assets/trade16.png'
import img17 from '../../assets/trade17.png'
import img18 from '../../assets/trade1.png'
 
const service = () => {
  return (
    <div className='services'>
      <h1>SERVICES</h1>
      <div className="cards">
      <Card image={serImg} text={"Cost Estimation"} subtext={"(Labor & Material)"}/>
      <Card image={serimg1} text={`Quantities & Materials Takeoffs`} />
      <Card image={serimg2} text={`Construction Work Schedules`} />
      </div>
      <h1>OUR TRADES</h1>
      <div className="cards">
      <Card image={img1} text={"General Requirement"} />
      <Card image={img2} text={`Site Constructionn`} />
      <Card image={img3} text={`Concrete`} />
      </div>
      <div className="cards">
      <Card image={img6} text={" Mechanical"} />
      <Card image={img4} text={`HVAC`} />
      <Card image={img5} text={`Electrical`} />
      </div>
      <div className="cards">
      <Card image={img7} text={"Conveying Systems"} />
      <Card image={img8} text={`Special Constructionn`} />
      <Card image={img9} text={`Furnishings`} />
      </div>
      <div className="cards">
      <Card image={img10} text={"Equipment"} />
      <Card image={img11} text={`Specialties`} />
      <Card image={img12} text={`Metals`} />
      </div>
      <div className="cards">
      <Card image={img13} text={"Woods & Plastics"} />
      <Card image={img14} text={`Thermal & Moisture Protection`} />
      <Card image={img15} text={`Masonry`} />
      </div>
      <div className="cards">
      <Card image={img16} text={"Doors and Windows"} />
      <Card image={img17} text={`Finishes`} />
      <Card image={img18} text={`Plumbing`} />
      </div>
      <span className='txt'>If You Have Any Further Queries, You Can Call Us At +1347 480-1903 Or Email At<br/> Info@blueBookestimator.Com</span>
      <span className='txt'>Or You Can Upload Your Plans In The Link Below To Get A Quote In The Next 5 Minutes</span>
      <button>Upload Your Plan</button>
    </div>
  )
}

export default service
