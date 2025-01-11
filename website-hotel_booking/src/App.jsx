import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-page">

      <div className="header">
        <img src="https://oriolelandscaping.com/wp-content/uploads/2024/10/oriole-royal-hotel-8-1024x683.jpg" alt="" className="header-bg"/>

        <nav className="navigationbar">
          <div className="page-logo">
            <a href=""><img src="./assets/logo.png" alt="" /></a>
          </div> 

          <div className="page"><a href="">Rooms</a></div>
          <div className="page"><a href="">Travel</a></div>
          <div className="page"><a href="">Promotions</a></div>
          <div className="page"><a href="">Gallery</a></div>
          <div className="page"><a href="">About</a></div>
          <div className="page"><a href="">Contact</a></div>

          <div className="menu"><a href="">Menu</a></div>

        </nav>
        <h1>"Hotel Booking"</h1>

      </div>

      <div className="container">

        <div className="card">
          <div className="profile">
            <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/67/2023/07/13044925/VHB-Photo-Library-Website-Deluxe-Suite-44.jpg" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $100</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/67/2023/07/13044925/VHB-Photo-Library-Website-Deluxe-Suite-44.jpg" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $100</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/67/2023/07/13044925/VHB-Photo-Library-Website-Deluxe-Suite-44.jpg" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $100</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/67/2023/07/13044925/VHB-Photo-Library-Website-Deluxe-Suite-44.jpg" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $100</div>
          </div>
        </div>

        <div className="card">
          <div className="profile">
            <img src="https://baiyokesky.baiyokehotel.com/images/new_gallery/gallery-68" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $150</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://baiyokesky.baiyokehotel.com/images/new_gallery/gallery-68" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $150</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://baiyokesky.baiyokehotel.com/images/new_gallery/gallery-68" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $150</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://baiyokesky.baiyokehotel.com/images/new_gallery/gallery-68" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $150</div>
          </div>
        </div>

        <div className="card">
          <div className="profile">
            <img src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $200</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $200</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $200</div>
          </div>
        </div>
        <div className="card">
          <div className="profile">
            <img src="https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000" alt="" className="profile-img"/>
          </div>
          <div className="card-content">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="card-status">
            <button>Book</button>
            <div>Price : $200</div>
          </div>
        </div>
      </div>

      <div className="register">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/395350083.jpg?k=3e5a58c488dfb43483ff4aac45a85952dd96d3329a224c853ea2fb3c17da16f2&o=&hp=1" alt="" className="register-bg"/>
              <div className="register-detail">
                <div className="improtant">
                  STOREIS DELOVERED STARTER
                  <h2>Sign up for exclusive offers from us</h2>
                </div>
                  Wil be used in website with our <u>Privacy Policy</u>
                <div className="register-website">
                  <a href="#">www.DownloadHotel.com</a>
                </div>
              </div>
        </div>

      <div className="footer">
        <div className="footer-left">
          <div className="footer-link"><a href="#"><b>About</b></a></div>
          <div className="footer-link"><a href="#"><b>About Us</b></a></div>
          <div className="footer-link"><a href="#"><b>Oue eomms</b></a></div>
          <div className="footer-link"><a href="#"><b>Contact Us</b></a></div>
        </div>

        <div className="footer-mid">
        <div className="footer-link"><a href="#"><b>Reservation</b></a></div>
        <div className="footer-link"><a href="#"><b>Request invoice</b></a></div>
        <div className="footer-link"><a href="#"><b>Find a reservation</b></a></div>
        <div className="footer-link"><a href="#"><b>Accomudication</b></a></div>
        <div className="footer-link"><a href="#"><b>Destination</b></a></div>
        </div>

        <div className="footer-right">
          <div>
            <b>Opening hours</b><br/>
            Lorem ipsum dolor sit amet consectetur.
          </div>
          <div>
            <b>Address</b><br/>
            Lorem ipsum dolor sit amet consectetur.
          </div>

        </div>
      </div>
    </div> 
  )
}

export default App
