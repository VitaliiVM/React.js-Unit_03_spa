import {Link} from 'react-router-dom';


function Category(props) {
    let data = props.categoryData;
    const listItem = data.map(item => <li key={item.link}><Link to={item.link}>{item.text}</Link></li>);
    return (
        <>
            <h1>Category</h1>
            <div className="cat">
                <ul className="navigation-cat">
                    {listItem}
                </ul>
            </div>
        </>
    );
}

export default Category;