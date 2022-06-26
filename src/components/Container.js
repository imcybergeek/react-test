import Tag from './Tag';
let Container = ({data}) => {
    return <>
    {data.map((curr)=><div className='container'>
        <img src="https://m.media-amazon.com/images/I/611zFJPgriL._SL1200_.jpg"></img>
        <div className='subcontainer'>
            <h3>{curr.name}</h3>
            <div className='tags'>
            {curr.tags.map((text)=>
            <div style={{background:"lightcoral", height: "50px", textAlign:"center", lineHeight:"20px", paddingLeft:"5px"}}>{text}</div>)}
            </div>
        </div>
        <div style={{paddingLeft:"20px"}}>
            <p>{curr.location[0]}</p>
            <p>{curr.location[1]}</p>
        </div>
        <div style={{paddingLeft:"20px"}}>
            <p>$6500.00</p>
            <p>$5,738.00</p>
            <p>+195 Shipping</p>
        </div>
        <div className='buttons'>
            <button>Add To Cart</button>
            <br></br>
            <button>Make Offer</button>
        </div>
    </div>)}
    </>
}

export default Container