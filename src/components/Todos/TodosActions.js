import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosCount,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Delete Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosCount}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}

export default TodosActions;
