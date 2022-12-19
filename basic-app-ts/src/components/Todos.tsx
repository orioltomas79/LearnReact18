import TodoItem from "./TodoItem";
import Todo from "../models/Todo";
import classes from "./Todos.module.css";

interface TodosProps {
  items: Todo[];
}

const Todos = ({ items }: TodosProps) => {
  let todosContent: JSX.Element = <p>There are no todos</p>;

  if (items.length > 0) {
    todosContent = (
      <ul className={classes.todos}>
        {items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    );
  }

  return <div>{todosContent}</div>;
};

export default Todos;
