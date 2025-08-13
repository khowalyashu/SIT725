const foodItems = [
    { id: 1, name: 'Pizza', price: '$12' },
    { id: 2, name: 'Rice', price: '$8' },
    { id: 3, name: 'Salad', price: '$15' }
  ];
  
  const getAllFood = () => {
    return foodItems;
  };
  
  module.exports = {
    getAllFood
  };