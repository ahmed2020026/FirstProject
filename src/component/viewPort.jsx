export default function ViewPort(props){
    return (
        <>
            <div className="viewPort" style={{ backgroundImage: `url(${props.IMG})` }}>
                <div className="view container">
                    <p>{props.type}</p>
                    <h1>{props.content}</h1>
                </div>
            </div>
        </>
    )
}