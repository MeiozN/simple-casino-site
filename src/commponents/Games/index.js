import styles from './Games.module.scss';
import React from 'react';
import axios from 'axios';

const FeaturedProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [productImg, setProductImg] = React.useState([]);
React.useEffect(() => {
  fetchProducts();
}, []);
const fetchProducts = () => {
  axios
    .get('https://rolletto.com/api/game/getgametemplates/1/1/1/')
    .then((res) => {
      console.log(res);
      setProducts(res.data.GameTemplateNameTranslations)
      setProductImg(res.data.GameTemplateImages)
    })
    .catch((err) => {
      console.log(err);
    });

};
return (
<div className={styles.gamess}>
    {products.map((product)=>(
        <div key={product.GameTemplateId} >
        <img src="" alt="gamewallpaper"/>
        <h3>{product.Value}</h3>
        <h6>provider</h6></div>))}
        </div>
)
}
export default FeaturedProducts
