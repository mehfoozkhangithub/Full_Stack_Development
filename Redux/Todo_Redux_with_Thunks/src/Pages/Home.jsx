import { TodosAdd } from '../components/TodosAdd';
import { TodosList } from '../components/TodosList';

export const Home = () => {
  return (
    <>
      <TodosAdd />
      <TodosList />
    </>
  );
};
