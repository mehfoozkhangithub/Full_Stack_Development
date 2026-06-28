export const Add = ({ props }) => {
  const { count, add } = props;
  const sum = count + add;
  return <div>Add {sum}</div>;
};
