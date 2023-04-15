import './App.css';

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
    </div>
  );
}

export default App;
