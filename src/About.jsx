import ViewPort from "./component/viewPort";
import IMG from "./assets/image/about.jpg";
import IMG_2 from "./assets/image/1.jpg";
export default function About() {
    return (
        <>
            <div className="about">
                <ViewPort IMG = {IMG} type = "About Us" content = "About Us - Who We Are?"/>
                <div className="container display" style={{paddingTop: "55px" , paddingBottom: "55px"}}>
                    <div style={{padding: "0px 25px 0 0"}}>
                        <h1 className="">Our Agency Story</h1>
                        <p className="" style={{marginBottom: "25px" , color: "#999"}}>Check out our company story and work process</p>
                        <div className="textContent">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p style={{marginTop: "25px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                        </div>
                        <button>More About US</button>
                    </div>
                    <div>
                        <img src={IMG_2} alt="" style={{maxWidth: "100%"}}/>
                    </div>
                </div>
            </div>
        </>
    )
}