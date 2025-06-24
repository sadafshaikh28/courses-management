import React, { useEffect } from 'react'
import { Card, CardBody, CardTitle, CardText, Button, Container } from 'reactstrap';

function Home()
{
    useEffect(()=>{
        document.title="Home | LearnCode With Durgesh";
    },[])
    return(
        <div>
            <Container>
                <Card className="my-3">
                    <CardBody>
                        <CardTitle tag="h1">Learn to Code</CardTitle>
                        <CardText>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</CardText>
                        <Button color="primary">Learn More</Button>
                    </CardBody>
                </Card>
            </Container>

                
        </div>

    )
}

export default Home;