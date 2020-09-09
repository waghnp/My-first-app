import React, { Component } from 'react'
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle,CardText} from 'reactstrap';



  function RenderDish({dish})
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
     
      function RenderComments({dish}){
            if(dish != null){
              return(
                        dish.comments.map((comment)=>{
                            return(
                                    <ul key={dish.comments.id} className="list-unstyled">
                                        <li>{comment.comment}</li>
                                        <li>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
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
       function CommentHeading({dish}){
            if(dish != null){
                return(
                         <h4>Comments</h4>
                )
                 
               }else{
                   return(
                       <div></div>
                   )
               }
        }
 
      const DishDetail=(props)=>{
        return(
            <div className="container">
                <div className=" row" >
                 <RenderDish dish={props.dish}/>
                    <div className="col-md-5 col-12 m-1">
                        <CommentHeading dish={props.dish}/>
                        <RenderComments  dish={props.dish}/>
                    </div>
                </div>
            </div>
            
        )

      }
     
 

export default DishDetail;