import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  
const ProfileForm = (props) => {
    return (
    <div>
        <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
            <CardTitle>______'s Profile</CardTitle>
            <CardSubtitle>Username</CardSubtitle>
            <CardText>User Content</CardText>
            <Button>Contact Me!</Button>
        </CardBody>
        </Card>
      </div>
    );
  };

export default ProfileForm;