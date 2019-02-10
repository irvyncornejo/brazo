import React, { Component } from 'react';
import './App.css';
import {Button, Icon} from 'react-materialize'
import {Row, Col, Chip, Tag,Collapsible,CollapsibleItem} from 'react-materialize';
const pStyle = {
  fontSize: '20px',
  textAlign: 'left',
  color:'#282c34'
};
class Instrucciones extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col s={12}>
          <Collapsible accordion defaultActiveKey={0} style={pStyle}>
            <CollapsibleItem header='Uno' icon='face'>
            El uso de las elementos <img alt = 'Servo'src = 'https://drive.google.com/uc?export=view&id=15uT2sztOEQjG9jGnLZ8JQE_vv0komqi9' width ={200} height = {110}/>
            hjdshkfjsdhfujsfhsufhusfhushufs
            </CollapsibleItem>
            <CollapsibleItem header='Dos' icon='code'>
            El uso de las elementos <img alt = 'Servo'src = 'https://drive.google.com/uc?export=view&id=15uT2sztOEQjG9jGnLZ8JQE_vv0komqi9' width ={200} height = {110}/>
             hjdshkfjsdhfujsfhsufhusfhushufs
            </CollapsibleItem>
            <CollapsibleItem header='Tres' icon='build'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
          </Collapsible>
        </Col>
      </Row>






</div>

    );
  }
}

export default Instrucciones;
