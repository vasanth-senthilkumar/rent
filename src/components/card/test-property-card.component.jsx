import React, {useState} from 'react';
import axios from 'axios';

import {save} from '../../utils/API';
import {deleteProp} from '../../utils/API';
// import save from '../../utils/API';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import houseandkeys from '../../Images/house-and-keys.jpg';

const TestPropertyCard = (props) => {

    const [cardData, setCardData] = useState(props.streetAddr)
        // this.state = {
        //     street: '',
        //     beds: '',
        //     baths: '',
        //     rent: '',
        //     daysListed: ''
        // }

    const handleSave = () =>{

        axios({
            url: 'https://floating-brushlands-57576.herokuapp.com/api/properties/save',
            method: 'POST',
            data: cardData
        })
            .then(() => {
                console.log('Data has been sent to the server');
                this.resetUserInputs();
                // this.getPropertySearch(); 
        })
            .catch(() => {
            console.log('Internal server error');
        });
    };

    const handleDelete = (data) => {
        console.log(data);
        deleteProp(data.streetAddr._id)
            .then(() => {
                console.log('Property has been deleted!');
            })
            .catch(() => {
                console.log('Internal server error');
            })
    }

        return (

            <Card style={{ width: '18rem' }} className="m-3 text-muted border-0 shadow p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src={houseandkeys} />
                <Card.Body>
                    <Card.Title>
                        <h3 className="text-center">{props.streetAddr.addressLine1} </h3>
                    </Card.Title>

                    
                        <Row>
                            <Col>
                                <Card.Text className="text-left">
                                    Bed: {props.streetAddr.bedrooms}
                                </Card.Text>
                            </Col>
                            <Col>
                                <Card.Text className="text-left">
                                    Bath: {props.streetAddr.bathrooms}
                                </Card.Text>
                            </Col>
                        </Row>
                            <hr/>
                        <Row>
                            <Col>
                                <Card.Text className="text-left">
                                    Rent: ${props.streetAddr.price} 
                                    <br/>
                                    DOM: {props.streetAddr.daysOnMarket}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row className="">
                            <Button className="align-bottom p-3 m-4" variant="info" onClick={() => handleSave(props)} className="font-weight-bold">+</Button>{' '}
                            <Button className="align-bottom p-3 m-4" variant="danger" onClick={() => handleDelete(props)} className="font-weight-bold">X</Button>{' '}
                        </Row>

                </Card.Body>
            </Card>

        )

};

export default TestPropertyCard;