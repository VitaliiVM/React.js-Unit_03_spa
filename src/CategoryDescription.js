import {Link, useParams} from 'react-router-dom';

function CategoryDescription(){
    let {catName} = useParams();
    return(
        <>
            <Link to="/cat">Назад</Link>
            <div className="cat">
                <h1>Category: {catName}</h1>
            </div>

        </>
    );
}
export default CategoryDescription;