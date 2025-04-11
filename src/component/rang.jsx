export default function Range(props){
    return (
        <>
            <div className="image" style={{width:"300px"}}>
                <div> <i className={props.img}></i> </div>
                <h2>{props.title} M</h2>
                <p>{props.cont}</p>
            </div>
        </>
    )
}