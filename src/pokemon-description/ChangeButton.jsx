const ChangeButton = ({handleClick}) => {
    return ( 
    <button style={{
        backgroundColor:"transparent",
        border:"0px",
        fontSize:"40px",
        cursor:"pointer"
    }} 
    onClick={handleClick}>➡️</button>
    );
}
export default ChangeButton;