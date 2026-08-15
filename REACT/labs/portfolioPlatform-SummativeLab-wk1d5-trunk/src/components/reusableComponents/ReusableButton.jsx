
export default function ReusableButton(props) {
    //CREATE REQUIRED PROPS 
    const {onClick, type, buttonName, style}=props
    
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                style={style}
            >{buttonName}</button>
        </>
    )
}