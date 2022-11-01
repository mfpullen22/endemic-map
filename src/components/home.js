import React from "react";
import Footer from "./footer";
import MapTabs from "./map_tabs";
import Hero from "./hero";
import Intro from "./intro";

function Home() {
    

    return (
        <div>
            <Hero />
            <MapTabs />
            <Intro />
            <Footer />
        </div>
    )
}

export default Home;