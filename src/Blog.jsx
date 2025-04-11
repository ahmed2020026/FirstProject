import ViewPort from "./component/viewPort";
import IMG from "./assets/image/about.jpg";
import Card from "./component/card";
import P1 from './assets/image/list/p-1.png';
import P2 from './assets/image/list/p-2.png';
import P4 from './assets/image/list/p-4.png';
import P5 from './assets/image/list/p-5.png';
import P6 from './assets/image/list/p-6.png';
import P7 from './assets/image/list/p-7.png';

export default function Blog() {
    return (
        <>
            <div className="about">
                <ViewPort IMG = {IMG} type = "Blog" content = "Blog Grid - Our Blogs"/>
                <div className="container" style={{paddingTop: "55px" , paddingBottom: "55px"}}>
                    <div className="cards" style={{padding: "10px"}}>
                        <Card img = {P1} title = {"Red Carpet Real Estate"} text = {"210 Zirak Road, Canada"} price = {"3700"} type = {"Apartment"}/>
                        <Card img = {P2} title = {"Fairmount Properties"} text = {"5698 Zirak Road, NewYork"} price = {"9750"} type = {"Condos"}/>
                        <Card img = {P4} title = {"The Real Estate Corner"} text = {" 5624 Mooker Market, USA"} price = {"5860"} type = {"Offices"}/>
                        <Card img = {P5} title = {"Herringbone Realty"} text = {" 5621 Liverpool, London"} price = {"4750"} type = {"Homes & Villas"}/>
                        <Card img = {P6} title = {"Brick Lane Realty"} text = {"210 Montreal Road, Canada"} price = {"4850"} type = {"Commercial"}/>
                        <Card img = {P7} title = {"Banyon Tree Realty"} text = {"210 Zirak Road, Canada"} price = {"2743"} type = {"Apartment"}/>
                    </div>
                </div>
            </div>
        </>
    )
}