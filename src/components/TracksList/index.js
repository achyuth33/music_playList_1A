const TracksList = props => {
  const {eachItem, onDeleteItem} = props

  const onDelete = id => {
    onDeleteItem(id)
  }

  return (
    <li key={eachItem.id} className="list-item">
      <div className="img-desc-container">
        <img className="image" src={eachItem.imageUrl} alt="track" />
        <div>
          <p>{eachItem.name}</p>
          <p>{eachItem.genre}</p>
        </div>
      </div>
      <div>
        <p>{eachItem.duration}</p>
        <button
          type="button"
          testid="delete"
          onClick={() => onDelete(eachItem.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TracksList
