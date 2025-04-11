import { useState } from "react"

export default function Card(props){
    const [active , setActive] = useState(false);
    function toggle(e){
        setActive(e);
    }
    return (
        <div className="card">
            <img src={props.img} alt="card_img" />
            <div className="card_body">
                <div>
                    <p>For Sale</p>
                    <i className="fa-solid fa-heart" onClick={() => toggle(!active)} style={{color: active ? "red" : "#ccc"}}></i>
                </div>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
            </div>
            <div className="card_footer">
                <p className="price">{props.price} $</p>
                <p>{props.type}</p>
            </div>
        </div>
    )
}