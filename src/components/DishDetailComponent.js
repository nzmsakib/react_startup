import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";


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

 function RenderComments({comments, addComment, dishId}) {
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
            <CommentForm dishId={dishId} addComment={addComment} />
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5">
                    <h2>Comments</h2>
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;