import React, { Component } from 'react'
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle,CardText} from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);

    }
    renderDish(dish)
        {
            if(dish != null){
               return(
                <div className="col-md-5 col-12 m-1">
                    <Card>
                        <CardImg top width="100%"  src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>   
               )
            }else{
                return(
                    <div></div>
                )
            }
        }
     
        renderComments(dish){
            if(dish != null){
                console.log(dish.comments)
              return(dish.comments.map((comment)=>{
                    return(
                             <ul key={dish.comments.id} className="list-unstyled">
                                <li>{comment.comment}</li>
                                <li>--{comment.author}</li>
                             </ul>
                    )
                })
              )
               
             }else{
                 return(
                     <div></div>
                 )
             }
        }
    render(){
      
        
        return(
            <div className="row">
                {this.renderDish(this.props.dish)}
                <div className="col-md-5 col-12 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dish)}
                </div>
               
            </div>
            
        )

    }
}

export default DishDetail;