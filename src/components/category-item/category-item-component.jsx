import "./category-item-style.scss";
const CategoryItem = ({ cate }) => {
  const { title, imageUrl } = cate;

  return (
    <div className={`${title.toLowerCase()} category-container`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2 className="title">{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
