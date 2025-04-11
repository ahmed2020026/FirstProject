import ViewPort from "./component/viewPort";
import IMG from "./assets/image/princing.jpg";

export default function Contact() {
    return (
        <>
            <div className="about">
                <ViewPort IMG = {IMG} type = "Contact Us" content = "Get Helps & Friendly Support"/>
                <div className="container" style={{paddingTop: "55px" , paddingBottom: "55px"}}>
                    <h1 className="header" style={{marginBottom: "25px"}}>Contact Us</h1>
                    <form action="" className="forms">
                        <div className="formInput">
                            <input type="text" name = "first" required placeholder="First Name"/>
                        </div>
                        <div className="formInput">
                            <input type="text" name = "last" required placeholder="Last Name"/>
                        </div>
                        <div className="formInput">
                            <input type="text" name = "email" required placeholder="Gmail"/>
                        </div>
                        <div className="formInput">
                            <textarea name="content"></textarea>
                        </div>
                        <input type="submit" value="Submit Request" style={{marginTop: "15px"}}/>
                    </form>
                </div>
            </div>
        </>
    )
}