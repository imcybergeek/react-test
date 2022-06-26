import Tag from './Tag';
let Container = ({data}) => {
    return <>
    {data.map((curr)=><div className='container'>
        <img src={curr.img}></img>
        <div className='subcontainer'>
            <h3>{curr.name}</h3>
            <div className='tags'>
            {curr.tags.map((tag)=>
            <div style={{background:tag.color, height: "50px", textAlign:"center", lineHeight:"20px", paddingLeft:"5px", paddingRight:"5px"}}>{tag.text}</div>)}
            </div>
        </div>
        <div className='location' style={{paddingLeft:"35rem", position:"absolute"}}>
            <p>{curr.location[0]}</p>
            <p>{curr.location[1]}</p>
        </div>
        <div className='pricing' style={{paddingLeft:"60rem", position:"absolute"}}>
            <p style={{color:"red"}}><s>{curr.pricing[0]!==""?`$${curr.pricing[0]}`:''}</s></p>
            <p>{`$${curr.pricing[1]} AUD`}</p>
            <p>{`+${curr.pricing[2]} Shipping`}</p>

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