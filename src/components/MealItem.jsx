const MealItem = ({ strMealThumb, strMeal, onClick, idMeal }) => {
 return (
  <div className="mx-2 my-4 w-40 h-52 flex flex-col items-start text-ellipsis overflow-hidden">
   <img src={strMealThumb} alt={strMeal} className="w-40 cursor-pointer" onClick={() => onClick(idMeal)} />
   <p className="font-lato">{strMeal}</p>
  </div>
 );
};

export default MealItem;