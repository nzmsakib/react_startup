import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    renderDish(dish) {
        if (dish == null) {
            return (
                <div></div>
            );
        } else {
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
    }

    render() {

        const comment = this.props.selectedDish.comments.map((cmnt) => {
            return (
                <div key={cmnt.id} className="mb-2">
                    <p>{cmnt.comment}</p>
                    <p>-- {cmnt.author}, {cmnt.date}</p>
                </div>
            );
        })

        return (
            <div className="row">
                <div className="col-12 col-md-5">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5">
                    <h2>Comments</h2>
                    {comment}
                </div>
            </div>
        );
    }
}

export default DishDetail;