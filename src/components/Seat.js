import '../css/Seat.css';
const Seat=(props)=>{
    const handleClick=()=>{
        props.onClick(props.id);
        console.log("Seat clicked");
    }
    return(
        <>
            <button className={`seat-${props.selected}`} onClick={handleClick}></button>
</>
    )
}
export default Seat;