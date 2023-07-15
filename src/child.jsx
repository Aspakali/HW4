function child ({
    image,
    productName,
    price,
    description}
){
    return(
        <>
        <img src={image}></img>
        <h1> productName:{productName}</h1>
        <h2>price:{price}</h2>
        <p>desc:{description}</p>
        
        </>
    )
}
export default  child;