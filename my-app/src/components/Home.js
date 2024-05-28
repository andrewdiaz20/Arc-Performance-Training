import React from "react"
import Navbar from "./NavBar";

function Home() {
    return (
        <body>
            <Navbar />
            <main>
                <div className='homeCss'>
                    <h1>ARC Performance Training</h1>
                    <p>Welcome Students!</p>
                </div>
            </main>
            <h1 className="ServicesCss">Services</h1>
            <section className='homecss2'>
                <div>
                    <h1>Upcoming Classes</h1>
                </div>
                <div>
                    <h1>About page</h1>
                </div>
            </section>
            <section>
                <h1>Upcoming classes</h1>
            </section>
        </body>
    )
}

export default Home;