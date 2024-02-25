import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

function DetailComponent() {
  let { id } = useParams();
  const [detailProduct, setDetailProduct] = useState(null);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setDetailProduct(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      {detailProduct && (
        <div className="detail-container">
          <div className="detail-img-container">
            <img
              src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692281993/Croma%20Assets/Communication/Mobiles/Images/275650_qqyx7b.png?tr=w-720"
              alt="no"
            />
            <div className="icon-container">
              <FaRegHeart className="heart-icon" size={20} />
              <FiShare2 className="share-icon" size={20} />
            </div>
          </div>
          <div className="details-container">
            <p>{detailProduct && "Redmi 13C 5G (8GB RAM, 256GB, Startrail Green)"}</p>
            <p>5(1 Rating)</p>
            <p>₹14,499.00</p>

            <div className="with-inc-container">

            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
export default DetailComponent;
