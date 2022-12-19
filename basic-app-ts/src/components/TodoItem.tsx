import classes from "./TodoItem.module.css";

interface TodoItemsProps {
  text: string;
}

const TodoItem = ({ text }: TodoItemsProps) => {
  return <li className={classes.item}>{text}</li>;
};

export default TodoItem;
