import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';

export default function CustomHeader(props){
  console.log(props)
  return(
    <Header>
      <Left>
        {props.leftBtn ?
          <Button transparent onPress={() => props.onPressRight()}>
            {props.leftBtn}
          </Button>
          : null
        }
      </Left>
      <Body>
        <Title>{props.title}</Title>
      </Body>
      <Right>
        {props.rightBtn ?
          <Button transparent onPress={() => props.onPressLeft()}>
            {props.rightBtn}
          </Button>
          : null
        }
      </Right>
    </Header>
  )
}
