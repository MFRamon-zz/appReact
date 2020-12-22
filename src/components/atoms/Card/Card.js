const Card = (props) => {
    return (
      <div style={{backgroundColor: "red", minWidth: "200px"}}>
          <p>{props.name}</p>
      </div>
    );
}

export default Card;