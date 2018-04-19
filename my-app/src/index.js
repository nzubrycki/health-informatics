import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Collapse } from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">MIMIC-III Subject Visualisation</h1>
             </header>
        </div>
    );
  }
}

class Demographics extends Component {
    render() {
        return(
            <Container>
                <Card className="Demographics">
                    <CardBody>
                        <CardTitle>Subject 366</CardTitle>
                        <br/>
                        <Row>
                            <Col>
                                <CardSubtitle>Ethnicity:</CardSubtitle>
                                <CardText>Hispanic/Latino</CardText>
                                <CardSubtitle>Gender:</CardSubtitle>
                                <CardText>Male</CardText>
                            </Col>
                            <Col>
                                <CardSubtitle>Speaks:</CardSubtitle>
                                <CardText>English</CardText>
                                <CardSubtitle>Date of Birth:</CardSubtitle>
                                <CardText>May 5th 2112</CardText>   
                            </Col> 
                            <Col>
                                <CardSubtitle>Religion:</CardSubtitle>
                                <CardText>Catholic</CardText>
                            </Col>
                        </Row>                       
                    </CardBody>
                </Card> 
            </Container>
        );
    }
}

class Admission extends Component {
    render() {
        return(
            <Container>
                <Card className="Admission">
                    <CardBody>
                        <CardTitle>Admission 134462</CardTitle>
                        <br/>
                        <Row>
                            <Col>
                                <CardSubtitle>Duration:</CardSubtitle>
                                <CardText>November 18 - November 22</CardText>
                                <CardSubtitle>Insurance:</CardSubtitle>
                                <CardText>Medicare</CardText>
                            </Col>
                            <Col>
                                <CardSubtitle>Diagnosis:</CardSubtitle>
                                <CardText>Sepsis</CardText>
                                <CardSubtitle className="Emergency">Emergency</CardSubtitle>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}

class ICUstay extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return(
            <Container>
                <Card className="ICUstay">
                    <CardBody>
                        <CardTitle>ICU Stay 255905</CardTitle>
                        <br/>
                        <Row>
                            <Col>
                                <CardSubtitle>First Care Unit:</CardSubtitle>
                                <CardText>MICU</CardText>
                                <CardSubtitle>Last Care Unit:</CardSubtitle>
                                <CardText>MICU</CardText>
                            </Col>
                            <Col>
                                <CardSubtitle>First Ward ID:</CardSubtitle>
                                <CardText>23</CardText>
                                <CardSubtitle>Last Ward ID:</CardSubtitle>
                                <CardText>23</CardText>
                            </Col>
                            <Col>
                                <CardSubtitle>Length of Stay:</CardSubtitle>
                                <CardText>2.1721</CardText>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>View Prescriptions During ICU Stay</Button>
                            </Col>
                            <Collapse isOpen={this.state.collapse}>
                                <Card>
                                    <CardBody>
                                        <CardSubtitle>November 19</CardSubtitle>
                                            <CardText>
                                                Acetaminophen,
                                                Doxycycline Hyclate,
                                                CeftriaXONE,
                                                D5W,
                                                Iso-Osmotic Dextrose,
                                                HydrOXYzine HCl,
                                                HydrOXYzine HCl,
                                                Magnesium Sulfate,
                                                Calcium Gluconate,
                                                NS,
                                                NS,
                                                Neutra-Phos,
                                                CeftriaXONE,
                                                Iso-Osmotic Dextrose,
                                                Hydrocortisone Cream 1%,
                                                Clobetasol Propionate 0.05% Ointment,
                                                Desonide 0.05% Cream,
                                                Artificial Tears,
                                                Ipratropium Bromide Neb,
                                                Docusate Sodium (Liquid),
                                                Senna,
                                                DiphenhydrAMINE HCl,
                                                Acetaminophen (Liquid),
                                                Pantoprazole Sodium,
                                                Vial,
                                                Sarna Lotion,
                                                HydrOXYzine HCl
                                            </CardText>
                                        <CardSubtitle>November 20</CardSubtitle>
                                            <CardText>
                                                NS,
                                                NS,
                                                NS,
                                                Levofloxacin,
                                                NS,
                                                Metronidazole,
                                                Benzonatrate
                                            </CardText>
                                        <CardSubtitle>November 21</CardSubtitle>
                                            <CardText>
                                            Fluticasone Propionate 110mcg,
                                            Triamcinolone Acetonide 0.1% Ointment,
                                            Hydrocortisone Cream 2.5%,
                                            Levofloxacin
                                            </CardText>
                                    </CardBody>
                                 </Card>
                             </Collapse>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        );
    }
}


ReactDOM.render(
    <div>
        <Header />
        <br/>
        <Container>
            <Row>
                <Col>
                <Demographics />
                </Col>
                <Col>
                <Admission />
                </Col>
            </Row>
            <br/>
            <Row>
                <ICUstay />
            </Row>
        </Container>
    </div>, document.getElementById('root')
);
registerServiceWorker();
