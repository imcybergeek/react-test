let Container = ({ data }) => {
  return (
    <>
      {data.map((curr) => (
        <div className="container">
          <div style={{display:"flex",width:"50rem"}}><img src={curr.img} alt="Please enable internet to see images"></img>
          <div className="subcontainer">
            <h3>{curr.name}</h3>
            <div className="tags">
              {curr.tags.map((tag) => (
                <div
                  style={{
                    background: tag.color,
                    textAlign: "center",
                    lineHeight: "20px",
                    padding: "5px",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    marginLeft: "10px",
                    borderRadius: 5,
                  }}
                >
                  {tag.text}
                </div>
              ))}
            </div>
          </div></div>
          <div style={{display:"flex",width:"50rem"}}>
            <div style={{border:"1px solid lightgrey"}}></div>
          <div
            className="location"
            style={{
              lineHeight: "5px",
            }}
          >
            <p>{curr.location[0]}</p>
            <p>{curr.location[1]}</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              {[...Array(5)].map(() => (
                <img
                  src="https://icon-library.com/images/star-rating-icon/star-rating-icon-4.jpg"
                  style={{ height: "15px", width: "15px" }}
                  alt="*"
                ></img>
              ))}
              <p style={{ paddingLeft: "5px" }}>{`(${curr.review})`}</p>
            </div>
          </div>
          <div
            className="pricing"
          >
            <p style={{ color: "red" }}>
              <s>{curr.pricing[0] !== "" ? `$${curr.pricing[0]}` : ""}</s>
            </p>
            <p>{`$${curr.pricing[1]} AUD`}</p>
            <p>{`+${curr.pricing[2]} Shipping`}</p>
          </div>
          <div className="buttons">
            <button>Add To Cart</button>
            <button>Make Offer</button>
          </div></div>
        </div>
      ))}
    </>
  );
};

export default Container;
