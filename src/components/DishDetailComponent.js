import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

 function RenderComments({comments}) {
    const comment = comments.map((cmnt) => {
        return (
            <div key={cmnt.id} className="mb-2">
                <p>{cmnt.comment}</p>
                <p>-- {cmnt.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmnt.date)))}</p>
            </div>
        );
    });

    return (
        <div>
            {comment}
        </div>
    );
}
    
const DishDetail = (props) => {
    if (props.dish == null)
        return (
            <div></div>
        );
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5">
                    <h2>Comments</h2>
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;