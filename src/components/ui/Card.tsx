import classes from "./Card.module.css";

const Card: React.FC<{ children: React.ReactNode }> = (props) => {
  return <div className="bg-white rounded-md shadow-2xl">{props.children}</div>;
};

export default Card;
