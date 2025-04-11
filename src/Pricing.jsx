import ViewPort from "./component/viewPort";
import IMG from "./assets/image/princing.jpg";
import Package from "./component/package";

export default function Blog() {
    return (
        <>
            <div className="about">
                <ViewPort IMG = {IMG} type = "30 days money back guarantee" content = "No Extra Fees. Friendly Support"/>
                <div className="container" style={{paddingTop: "55px" , paddingBottom: "55px"}}>
                    <div className="packages" style={{paddingRight: "15px", paddingLeft: "15px"}}>
                        <Package type = "Basic" price = "29" feature = "per user, per month" Uptime = "99.5%" BW = "120GB" CS = "5GB"/>
                        <Package type = "Standard" price = "49" feature = "per user, per month" Uptime = "99.5%" BW = "150GB" CS = "10GB"/>
                        <Package type = "Platinum" price = "79" feature = "2 user, per month" Uptime = "99.5%" BW = "200GB" CS = "5GB"/>
                    </div>
                </div>
            </div>
        </>
    )
}