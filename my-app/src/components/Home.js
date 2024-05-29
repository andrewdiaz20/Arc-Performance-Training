import React from "react"
import Navbar from "./NavBar";

function Home() {
    return (
        <body>
            <img className='homeImg'src="Best-bouldering-melbourne.jpg"alt="woman climbing wall"/>
            <Navbar />
            <main>
                <div className='homeCss'>
                    <h1>ARC Performance Training</h1>
                    <p>Welcome Students!</p>
                </div>
            </main>
            <div>
            <h1 className="ServCss">Services</h1>
            </div>
            <section className='homecss2'>
                <div className="upBox">
                    <h1>Upcoming Classes</h1>
                    <h3>Tuesday</h3>
                    <p>rock-climbing: 5:00-7:00</p>
                    <h3>Wenseday</h3>
                    <p>Gym: 12:00-3:00</p>
                    <h3>Thursday</h3>
                    <p>Hiking: 12:00-3:00</p>
                </div>
                <div className="upBox">
                    <h1>About page</h1>
                    <p>dufhgDPIFUHdSVNUDSv</p>
                </div>
            </section>
            <section>
                <h1>Upcoming classes</h1>
            </section>
        </body>
    )
}

export default Home;