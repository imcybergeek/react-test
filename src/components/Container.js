import Tag from './Tag';
let Container = () => {
    return <>
    <div className='container'>
        <img src="https://m.media-amazon.com/images/I/611zFJPgriL._SL1200_.jpg"></img>
        <div className='subcontainer'>
            <h3>Nord Stage 3 88 Keys</h3>
            <div className='tags'>
            <div style={{background:"lightcoral", height: "20px", textAlign:"center"}}>Brand New</div>
            <div style={{background:"lightblue", paddingLeft:"5px"}}>Brand New</div>
            <div style={{background:"lightpink", paddingLeft:"5px"}}>Brand New</div>
            </div>
        </div>
        <div className='buttons'>
            <button>Add To Cart</button>
            <br></br>
            <button>Make Offer</button>
        </div>
    </div>
    </>
}

export default Container