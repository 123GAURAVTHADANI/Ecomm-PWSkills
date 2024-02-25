import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const dispatch= useDispatch();
  const navigate= useNavigate(null);
  return (
    <div className="card-content">
      <img src={"https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1692281993/Croma%20Assets/Communication/Mobiles/Images/275650_qqyx7b.png?tr=w-720"} className="card-img" />
      <div className="card-title">
        <h5>{item.title}</h5>
      </div>
      <p className="card-price">${item.price}</p>
      <div className="card-menu">
        <button onClick={async()=> await dispatch({type:'addToCart'})}>Add to Cart</button>
        <button onClick={async()=> await navigate(`/product/${item.id}`)}>View Product</button>
      </div>
    </div>
  );
}
function MainComponent() {
  const [fetchData, setFetchData] = useState([]);
  const dispatch= useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setFetchData(res.data);
    });
    // dispatch({type:'addToCart'})
  }, []);
  return (
    <main className="main">
     
      <Carousel
        showArrows={true}
        autoPlay={true}
        dynamicHeight={true}
        showIndicators={false}
        showStatus={false}
        stopOnHover={false}
        showThumbs={false}
      >
      
        <div>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708086815/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Feb/18%20Feb/Desktop/HP_Noise-TWS_18Feb2024_iwernx.jpg?tr=w-2048" />
         
        </div>
        <div>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708235920/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Feb/18022024/HP_AC_18Feb2024_yhz5of.jpg?tr=w-2048" />
        
        </div>
        <div>
          <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708086815/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Feb/18%20Feb/Desktop/HP_Noise-TWS_18Feb2024_iwernx.jpg?tr=w-2048" />
        
        </div>
      </Carousel>
      <div className="images-container"> 
       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1708328580/Croma%20Assets/CMS/HP_CromaUnboxed2024_CN_14Feb2024_danxig.gif?tr=w-1024"/>
       </span>
       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png?tr=w-1024"/>
       </span>
       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_TV_21Feb2023_repyuk.png?tr=w-1024"/>
       </span>

       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1700225992/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/CategoryNavigation_AudioSplit_Laptops_17Nov2023_wcqnvs.png?tr=w-1024"/>
       </span>

       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968094/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_AC_21Feb2023_azyacw.png?tr=w-1024"/>
       </span>
       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_S_M_21Feb2023_qllhag.png?tr=w-1024"/>
       </span>
       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/washingmachine_categoryicons_ktcdeu.png?tr=w-1024"/>
       </span>
       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1683281227/Croma%20Assets/CMS/LP%20Page%20Banners/2023/HP%20Category%20Navigation/grooming_categoryicons_oj7mrc.png?tr=w-1024"/>
       </span>
       <span>
        <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1676968095/Croma%20Assets/CMS/LP%20Page%20Banners/2023/01_HP_BUGS_LP_BUGS/FEB/21-02-2023/Category%20Navigation%20-%20Audio%20Split/CategoryNavigation_AudioSplit_Mobile_21Feb2023_y6hsfe.png?tr=w-1024"/>
       </span>
      </div>
      <div className="card-container">
        {fetchData &&
          fetchData.map((item) => {
            return <Card item={item} />;
          })}
      </div>
    </main>
  );
}
export default MainComponent;
