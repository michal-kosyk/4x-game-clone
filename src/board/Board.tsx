import "./Board.css";

export default function Board() {
  const generateMap = (numberOfSquares: number) => {
    const result = [];
    for (let i = 0; i < numberOfSquares; i++) {
      result.push(<div className="board-square"></div>);
    }
    return result;
  };
  return <div className="board board--small">{generateMap(144)}</div>;
}
