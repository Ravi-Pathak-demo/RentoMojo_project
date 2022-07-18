import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "@mui/material/Rating";
import Chip from "@mui/material/Chip";
import "./Card.css";

function GameCard(props) {
  return (
    <Card className="game-card">
      <Card.Header className="d-flex justify-content-between">
        <div className="card-style">{props?.data?.title}</div>
        <blockquote className="blockquote mb-2"></blockquote>
      </Card.Header>
      <Card.Body>
        <Card.Title className="card-title">
          <div>{props?.data?.platform}</div>
          <Chip size="small" label={props?.data?.genre} />
        </Card.Title>
        <Card.Text>
          <div className="d-flex align-items">
            <span>{props?.data?.score / 2}</span>
            <Rating
              precision={0.5}
              name="half-rating-read"
              readOnly
              defaultValue={props?.data?.score / 2}
              max={5}
            />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
