import styles from "./Card.module.scss";

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <div className={styles.test} {...props}>
      {children}
    </div>
  );
};

export default Card;
