import Box from "./component/box";
import H1 from './assets/image/hero/h1.png';
import H2 from './assets/image/hero/h2.png';
import H3 from './assets/image/hero/h3.png';
import H4 from './assets/image/hero/h4.png';
import H5 from './assets/image/hero/h6.png';
import P1 from './assets/image/list/p-1.png';
import P2 from './assets/image/list/p-2.png';
import P4 from './assets/image/list/p-4.png';
import P5 from './assets/image/list/p-5.png';
import P6 from './assets/image/list/p-6.png';
import P7 from './assets/image/list/p-7.png';
import Tea_1 from './assets/image/customer/team-1.jpg';
import Tea_2 from './assets/image/customer/team-2.jpg';
import Tea_3 from './assets/image/customer/team-3.jpg';
import Tea_4 from './assets/image/customer/team-4.jpg';
import Tea_5 from './assets/image/customer/team-5.jpg';
import Tea_6 from './assets/image/customer/team-5.jpg';
import City_1 from './assets/image/location/city-1.png';
import City_2 from './assets/image/location/city-2.png';
import City_3 from './assets/image/location/city-3.png';
import City_4 from './assets/image/location/city-4.png';
import City_5 from './assets/image/location/city-5.png';
import City_6 from './assets/image/location/city-6.png';
import Card from "./component/card";
import Range from "./component/rang";
import Gallery from "./component/gallery";
import Profile from "./component/profile";
import Package from "./component/package";


export default function Home() {
    return (
        <>
            <section className="section_1">
                <div style={{textAlign:"center"}} className="container">
                    <h1>Search Your Next Home</h1>
                    <p>Find new & fratured property located in your local city.</p>
                    <form action="">
                        <div>
                            <label htmlFor="location">Location</label>
                            <input type="text" name = "location" />
                        </div>
                        <div>
                            <label htmlFor="Property">Property Type</label>
                            <input type="text" name = "Property"/>
                        </div>
                        <div>
                            <label htmlFor="Price">Price Range</label>
                            <input type="text" name = "Price"/>
                        </div>
                        <button>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </section>

            <section className="section_2">
                <div className="container">
                    <h1 className="header">Featured Property Types</h1>
                    <p className="contHeader">Find All Type of Property.</p>
                    <div className="content">
                        <Box img={H1} title = "Family House" content = "122 Property"/>
                        <Box img={H2} title = "House & Villa" content = "155 Property"/>
                        <Box img={H3} title = "Apartment" content = "300 Property"/>
                        <Box img={H4} title = "Office & Studio" content = "80 Property"/>
                        <Box img={H5} title = "Villa & Condo" content = "80 Property"/>
                    </div>
                </div>
            </section>

            <section className="section_3">
                <div className="container">
                    <h1 className="header">Recent Property Listed</h1>
                    <p className="contHeader">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    
                    <div className="cards">
                        <Card img = {P1} title = {"Red Carpet Real Estate"} text = {"210 Zirak Road, Canada"} price = {"3700"} type = {"Apartment"}/>
                        <Card img = {P2} title = {"Fairmount Properties"} text = {"5698 Zirak Road, NewYork"} price = {"9750"} type = {"Condos"}/>
                        <Card img = {P4} title = {"The Real Estate Corner"} text = {" 5624 Mooker Market, USA"} price = {"5860"} type = {"Offices"}/>
                        <Card img = {P5} title = {"Herringbone Realty"} text = {" 5621 Liverpool, London"} price = {"4750"} type = {"Homes & Villas"}/>
                        <Card img = {P6} title = {"Brick Lane Realty"} text = {"210 Montreal Road, Canada"} price = {"4850"} type = {"Commercial"}/>
                        <Card img = {P7} title = {"Banyon Tree Realty"} text = {"210 Zirak Road, Canada"} price = {"2743"} type = {"Apartment"}/>
                    </div>
                </div>
            </section>

            <section className="section_4" style={{backgroundColor: "rgb(18, 41, 71)" , color: "#fff"}}>
                <div className="container">
                    <p style={{textAlign: "center"}}>Our Awards</p>
                    <p style={{textAlign: "center",width: "700px", maxWidth: "100%" , marginRight: "auto" , marginLeft:"auto"}}>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</p>
                    <div className="range">
                        <Range img = "fa-solid fa-trophy" title = "32" cont = "Blue Burmin Award"/>
                        <Range img = "fa-solid fa-calendar" title = "43" cont = "Mimo X11 Award"/>
                        <Range img = "fa-solid fa-lightbulb" title = "51" cont = "Australian UGC Award"/>
                        <Range img = "fa-solid fa-heart" title = "42" cont = "IITCA Green Award"/>
                    </div>
                </div>
            </section>

            <section className="section_5" style={{paddingTop: "100px"}}>
                <div className="container">
                    <h1 className="header">Recent Property Listed</h1>
                    <p className="contHeader">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <div className="Gallery">
                        <Gallery img = {City_1} name = "New Orleans, Louisiana"/>
                        <Gallery img = {City_2} name = "Jerrsy, United State"/>
                        <Gallery img = {City_3} name = "Liverpool, London"/>
                        <Gallery img = {City_4} name = "NewYork, United States"/>
                        <Gallery img = {City_5} name = "Montreal, Canada"/>
                        <Gallery img = {City_6} name = "California, USA"/>
                    </div>
                </div>
            </section>

            <section className="section_6" style={{paddingTop: "100px"  , backgroundColor: "#eee"}}>
                <div className="container">
                    <h1 className="header">Our Featured Agents</h1>
                    <p className = "contHeader">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className="customers">
                        <Profile num = "50" img = {Tea_1} loca = "Liverpool, Canada" name = "Sargam S. Singh"/>
                        <Profile num = "70" img = {Tea_2} loca = "Montreal, Canada" name = "Harijeet M. Siller"/>
                        <Profile num = "80" img = {Tea_3} loca = "Denever, USA" name = "Anna K. Young"/>
                        <Profile num = "51" img = {Tea_4} loca = "Briarwood Drive" name = "Michael P. Grimaldo"/>
                        <Profile num = "42" img = {Tea_5} loca = "2272 Briarwood Drive" name = "Michael P. Grimaldo"/>
                        <Profile num = "38" img = {Tea_6} loca = "Montreal, USA" name = "Adam K. Jollio"/>
                    </div>
                </div>
            </section>

            <section className="section_7" style={{paddingTop: "100px" , backgroundColor: "#fff"}}>
                <div className="container">
                    <h1 className="header">Select Your Package</h1>
                    <p className="contHeader">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
                    <div className="packages">
                        <Package type = "Basic" price = "29" feature = "per user, per month" Uptime = "99.5%" BW = "120GB" CS = "5GB"/>
                        <Package type = "Standard" price = "49" feature = "per user, per month" Uptime = "99.5%" BW = "150GB" CS = "10GB"/>
                        <Package type = "Platinum" price = "79" feature = "2 user, per month" Uptime = "99.5%" BW = "200GB" CS = "5GB"/>
                    </div>
                </div>
            </section>
        </>
    )
}