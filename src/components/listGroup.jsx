
const ListGroup = ({ items }) => {
    return (<ul className='list-group'>
        <li className='list-group-item active'>Genres</li>
        {items.map(item => <li key={item._id} className='list-group-item'>{item.name}</li>)}
    </ul>);
}

export default ListGroup;