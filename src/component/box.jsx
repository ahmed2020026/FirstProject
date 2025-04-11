export default function Box(props){
    return (
        <>
            <div className="box">
                <img src={props.img} alt="This" />
                <h4>{props.title}</h4>
                <p>{props.content}</p>
            </div>
        </>
    )
}