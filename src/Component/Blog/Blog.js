import React from "react";

import "./Blog.css";
import pic from "../../images/2.jpg";
import pic1 from "../../images/4.jpg";
const Blog = () => {
  return (
    <div className="blog">
      <div className="">Recent</div>
      <div className="row">
        <div className="col-md-3">
          <div class="card" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" style={{ width: "18rem" }}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" style={{ width: "18rem" }}>
            <img src={pic} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div class="card" style={{ width: "18rem" }}>
            <img src={pic1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
