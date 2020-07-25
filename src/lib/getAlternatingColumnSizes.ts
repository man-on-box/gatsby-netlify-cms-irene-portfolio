export const getAlternatingColumnSizes = () => {
  let columns = ["is-one-third", "is-two-thirds"];
  let returnIndex = 0;

  const incrementColumn = () => {
    returnIndex++;
    if (returnIndex >= columns.length) {
      returnIndex = 0;
      columns = [...columns.reverse()];
    }
  };

  const getColumnSizeClassName = () => {
    const columnClassName = columns[returnIndex];
    incrementColumn();
    return columnClassName;
  };

  return { getColumnSizeClassName };
};
