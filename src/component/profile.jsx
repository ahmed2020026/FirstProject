export default function Profile(props){
    return (
        <>
            <div className="profile">
                <div className="head">
                    <span className="list">{props.num} Listings</span>
                </div>
                <div className="body">
                    <img src={props.img} alt="img" />
                    <div className="text">
                        <p className="location">{props.loca}</p>
                        <h4 className="name">{props.name}</h4>
                    </div>
                    <div className="social">
                        <i style={{"--c" : "#00f"}} className="fa-brands fa-facebook-f"></i>
                        <i style={{"--c" : "#00f"}} className="fa-brands fa-linkedin-in"></i>
                        <i style={{"--c" : "#0ff"}} className="fa-brands fa-twitter"></i>
                        <i style={{"--c" : "#f0f"}} className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className="foot">
                    <button>
                        <i className="fa-solid fa-envelope"></i>message
                    </button>
                    <button style={{backgroundColor: "#000"}}>
                        <i className="fa-solid fa-phone" ></i>
                    </button>
                </div>
            </div>
        </>
    )
}