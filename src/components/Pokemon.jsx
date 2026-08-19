function Pokemon({ name, id }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="card">
      <span className="id">P{String(id).padStart(3, '0')}</span>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default Pokemon;