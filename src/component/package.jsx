export default function Package(props){
    return (
        <>
            <div className="package">
                <div className="head">
                    <h1 style={{textAlign: "center" , marginBottom: "15px"}}>{props.type}</h1>
                    <h1 style={{textAlign: "center" , marginBottom: "5px" , fontSize: "55px"}}><span>$</span>{props.price}</h1>
                    <p style={{textAlign: "center" , marginBottom: "15px", color: "#666"}}>{props.feature}</p>
                </div>
                <div className="body">
                    <ul>
                        <li>
                            <i className="fa-solid fa-check"></i> {props.Uptime} Uptime Guarantee
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i> {props.BW} CDN Bandwidth
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i> {props.CS} Cloud Storage
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i> Personal Help Support
                        </li>
                        <li>
                            <i className="fa-solid fa-check"></i> Enterprise SLA
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <button>Start {props.type}</button>
                </div>
            </div>
        </>
    )
}