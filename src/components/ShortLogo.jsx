import "./Styles/logo.css"

const ShortLogo=({logo,text})=>{
    return(
        <>
        <div className="logo-container">
            <img src={logo} alt="img" />
            <h2>{text}</h2>
        </div>
        </>
    )
}

export default ShortLogo