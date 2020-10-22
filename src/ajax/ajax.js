export const getGoods = async () => {
  const response = await fetch('./src/ajax/goods.json');
  return await response.json();
}