import React from "react";
const Newsitem = (props) => {

    let { title, description, imageUrl, url, author, source } = props;

    // Handle source if it might be an object
    const sourceText = typeof source === 'object' && source !== null ? source.name : source;

    return (
      <div className="my-3">
        <div className="card">
          <div style={{
            display:"flex",
            justifyContent:"flex-end",
            position:"absolute",
            right:"0",
          }}>
          <span className="badge text-bg-danger">{sourceText}</span>
          </div>
          <img
            src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/2024-09-15t055303z-1057770746-rc2t0aau7gzj-rtrmadp-3-israel-palestinians-yemen-missiles.jpg?c=16x9&q=w_800,c_fill" : imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">By {!author ? "Unknown" : author}</small>
            </p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sn btn-primary">
              Read More
            </a>
            
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
