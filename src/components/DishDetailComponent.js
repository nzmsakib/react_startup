import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function RenderDish({dish}) {
    return (
        <FadeTransform in transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
            <Card>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
}

 function RenderComments({comments, postComment, dishId}) {
    const comment = comments.map((cmnt) => {
        return (
            <Fade in>
                <div key={cmnt.id} className="mb-2">
                    <p>{cmnt.comment}</p>
                    <p>-- {cmnt.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmnt.date)))}</p>
                </div>
            </Fade>
        );
    });

    return (
        <div>
            <Stagger in>{comment}</Stagger>
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    );
}
    
const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish == null)
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
                        postComment={props.postComment}
                        dishId={props.dish.id} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;