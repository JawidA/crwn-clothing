import "./categories-style.scss";
import CategoryItem from "../category-item/category-item-component";

const CategoriesContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((item) => {
        return <CategoryItem key={item.id} cate={item} />;
      })}
    </div>
  );
};

export default CategoriesContainer;
