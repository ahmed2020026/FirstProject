import ViewPort from "./component/viewPort"
import IMG from "./assets/image/services.jpg";
import Box from "./component/box";
import H1 from './assets/image/hero/h1.png';
import H2 from './assets/image/hero/h2.png';
import H3 from './assets/image/hero/h3.png';
import H4 from './assets/image/hero/h4.png';
import H5 from './assets/image/hero/h6.png';

export default function Services() {
    return (
        <>
            <div className="about">
                <ViewPort IMG = {IMG} type = "Services" content = "Services -All Services"/>
                <div className="container" style={{padding: "50px 10px"}}>
                    <div className="content">
                        <Box img={H1} title = "Family House" content = "122 Property"/>
                        <Box img={H2} title = "House & Villa" content = "155 Property"/>
                        <Box img={H3} title = "Apartment" content = "300 Property"/>
                        <Box img={H4} title = "Office & Studio" content = "80 Property"/>
                        <Box img={H5} title = "Villa & Condo" content = "80 Property"/>
                    </div>
                </div>
            </div>
        </>
    )
}