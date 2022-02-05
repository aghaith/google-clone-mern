import React from 'react';
import dots from 'image/dots-menu.svg';
import search from 'image/discover-icon.svg';
import googledev from 'image/google-dev.svg';
import mic from 'image/google-mic-icon.svg';

import './App.css';

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="menu">
          <ul className='list'>
            <li>Gmail</li>
            <li>Images</li>
            <li><img src={dots} width="20" /></li>
          </ul>
          <div className='account'>A</div>
        </div>
      </nav>
      <div className='text-center'>
        <img src={googledev} className='google-dev' />
        <div className='d-flex name'>
          <div className='letter-a'>a</div>
          <div className='letter-b'>b</div>
          <div className='letter-b-second'>b</div>
          <div className='letter-a'>a</div>
          <div className='letter-s'>s</div>
          <div className='letter-g'>g</div>
        </div>
        <div className='search-field d-flex'>
          <div className='me-auto'>
            <img src={search} className='search-icon' />
          </div>
          <div className='w-100'>
            <input 
              className='w-100 h-100 search-input' 
              onChange={(e) => (e.target.value)}  
            />
          </div>
          <div className='ms-auto'>
            <img src={mic} className='google-mic' width="40" />
          </div>
        </div>
        <div className="button-box col-lg-12">
          <button className="google-search-btn btn-custom">Google Search</button>
          <button className="btn-custom">I'm Feeling Lucky</button>
        </div>
        <div className='languages'>
          Google offered in: <span>العربية Français հայերեն</span>
        </div>
      </div>
      <div className="footer">
        <div className="country">
          Lebanon
        </div>
        <div className='footer-content'>
          <div>
            <ul className="list">
              <li>About</li>
              <li>Advertising</li>
              <li>Business</li>
              <li>How Search works</li>
            </ul>
          </div>
          <div>
            <ul className='list'>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
