export default function Gallery(props){
    return (
        <>
            <div className="subGallery">
                <img src={props.img} alt="img" style={{maxWidth: "100%" , borderRadius: "10px"}}/>
                <div>
                    <p>{props.name}</p>
                </div>
            </div>
        </>
    )
}