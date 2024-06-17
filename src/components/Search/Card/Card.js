import styles from './Card.module.css'

const Card = ({c}) => {
  return (
    <div className={styles.card}>
      <img src={c.imglink || 'https://shopify-digital-delivery.s3.amazonaws.com/product_img/main_img/14998134/pLG5lm9nLK.jpeg'} alt={c.name} />
      <h6>{c.name}</h6>
    </div>
  );
};
export default Card;