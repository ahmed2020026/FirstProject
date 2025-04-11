import Logo from "../assets/image/logo-light.png"
export default function Footer(){
    return (
        <>
            <div>
                <div className="container" style={{paddingTop: "50px" , paddingBottom: "50px"}}>
                    <div className="child">
                        <div className="Dark_logo brand">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="cont">
                            <h2 style={{color: "#d7d7d7"}}>Do You Need Help With Anything?</h2>
                            <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
                            <div className="formInput">
                                <input type="text" placeholder="Email Address"/>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="child">
                        <div>
                            <h3>LAYOUTS</h3>
                            <ul>
                                <li>Home Page</li>
                                <li>About Page</li>
                                <li>Service Page</li>
                                <li>Property Page</li>
                                <li>Contact Page</li>
                                <li>Single Blog</li>
                            </ul>
                        </div>
                        <div>
                            <h3>ALL SECTIONS</h3>
                            <ul>
                                <li>Headers</li>
                                <li>Features</li>
                                <li>Attractive</li>
                                <li>Testimonials</li>
                                <li>Videos</li>
                                <li>Footers</li>
                            </ul>
                        </div>
                        <div>
                            <h3>COMPANY</h3>
                            <ul>
                                <li>About</li>
                                <li>Blog</li>
                                <li>Pricing</li>
                                <li>Affiliate</li>
                                <li>Login</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footerCoyRight" style={{padding: "25px 0" , borderTop: "1px solid rgba(153, 153, 153, 0.29)"}}>
                    <p style={{textAlign: "center" , color: "#999"}}>© 2021 RentUP. Designd By GorkCoder.</p>
                </div>
            </div>
        </>
    )
}