import styles from "./Item.module.css";

const Item = ({foodItem}) => {


    return  (
    <li  className={'${styles["ak-item"]}'}>
     <span className={styles["ak-span"]}>{foodItem}</span>
    </li>
    ) 

};

export default Item;