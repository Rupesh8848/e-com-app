import "./Category-item.scss"

export default function CategoryItem(props){
    const {id, title, imageUrl} = props.categories
    return (
        <div className="category-container">
              <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
              }} />
              <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
              </div>
            </div>
    )
}