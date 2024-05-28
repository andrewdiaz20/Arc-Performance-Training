import React from "react"
import Navbar from "./NavBar";

function Home() {
    return (
        <body>
            <main>
                <Navbar />
                <div>
                    <h1>ARC Performance Training</h1>
                    <p>Welcome Students!</p>
                    <button>Sign a Waiver</button>
                </div>
            </main>
            <section>
                <div>
                    <h1>Services</h1>
                </div>
                <div>
                    <h1>Upcoming Classes</h1>
                </div>
                <div>
                    <h1>About page</h1>
                </div>
            </section>
        </body>
    )
}

export default Home;