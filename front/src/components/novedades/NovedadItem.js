import React from "react";
import Card from 'react-bootstrap/Card';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="fondo">
            <div className="novedades">
                <Card style={{ width: '35rem' }}>
                    <br></br>
                    <Card.Img variant="top" src={imagen} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {subtitle}
                        </Card.Text>
                        <p class="section-subheading text-muted">{body}
                            <a target="_blank" class="btn btn-outline-info" href="http://localhost:3001/contacto"> Aqui<i class="fas fa-sing-out-alt"></i></a></p>
                    </Card.Body>
                </Card>
            </div>
            <br></br>
        </div>

    );
}

export default NovedadItem;