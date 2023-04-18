import './App.css';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="home-container">
      <div className='home-info'>
        Sharif Home Services offers several different
        ways to keep your home looking and working amazing.
        Our goal is to turn your inconvenience into more
        time for yourself. While more services are being
        considered for the future, our current areas of
        expertise are as follows:
      </div>
      <ul className='home-list'>
        <li className='list-item'>Lawn Mowing & Edging</li>
        <li className='list-item'>Mulch, Gravel, & Dirt Laying</li>
        <li className='list-item'>Pressure Washing</li>
        <li className='list-item'>Leaf Pickup and Removal</li>
        <li className='list-item'>Spring Cleanup</li>
        <li className='list-item'>Fall Cleanup</li>
      </ul>
      <div className='home-info'>
        Sharif Home Services is based in Ocean County, NJ
        and for the time being, will only be able to complete
        services within this county. If you or someone you know
        that lives outside this area would like to use our services,
        please <Link to='/contact-us' className='home-contact-link'>contact us</Link> and we
        will assess to see if we are able to help.
      </div>
      <div className='pic-info'>
        Below are some before and after pictures of past jobs:
      </div>
      <div className='pic-container'>
        <div className='before-pics'>
          <div className='pic-title'>Before</div>
          <img src='https://i.imgur.com/2Cm6S4T.jpg' alt='Backyard Filled With Leaves' className='pic' />
          <img src='https://i.imgur.com/TkiHFqk.jpg' alt='Overgrown Shrubs' className='pic' />
          <img src='https://i.imgur.com/bJZY5zV.jpg' alt='Garden Before Being Mulched' className='pic' />
          <img src='https://i.imgur.com/GsDbSTq.jpg' alt='Backyard With Large Debris Pile' className='pic' />
        </div>
        <div className='after-pics'>
          <div className='pic-title'>After</div>
          <img src='https://i.imgur.com/pSOduvk.jpg' alt='Backyard Leaves Cleaned' className='pic' />
          <img src='https://i.imgur.com/h95Ay8M.jpg' alt='Shrubs Cleaned Up' className='pic' />
          <img src='https://i.imgur.com/43ch0CU.jpg' alt='Newly Mulched Garden' className='pic' />
          <img src='https://i.imgur.com/K1po0Mc.jpg' alt='Backyard Debris Pile Cleaned' className='pic' />
        </div>
      </div>
    </div>
  );
}

export default App;
