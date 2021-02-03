
import './preview.styles.scss'


const PreviewCollection = ({title, items}) => {
    return (
        <div className='Preview-collection'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className="preview">
{
    items
    //* display only 4
    .filter((x,i) => i < 4)
    .map(x => (
        <div key={x.id}>{x.name}</div>
    ))
}

            </div>
        </div>
    )
}

export default PreviewCollection
