import CollectionItem from '../CollectionItem/collection-item.component'
import './collection-preview.styles.scss'



const CollectionPreview = ({title, items}) => {
    return (
        <div className='preview-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
{
    items
    //* display only 4
    .filter((x,i) => i < 4)
    .map((item) => (
        <CollectionItem key={item.id} item={item} />
    ))
}

            </div>
        </div>
    )
}

export default CollectionPreview;
