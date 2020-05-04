import React, { useLayoutEffect } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Content, List, ListItem, Left, Thumbnail, Text, Body, Right, Button, Icon } from 'native-base';
import { CustomHeader } from '../../components'

function PostDetails({navigation}){
  const post = navigation.getParam('post')
  return (
    <Container style={{backgroundColor: post.type ? "rgba(28, 205, 99, 0.5)" : "transparent"}}>
      <CustomHeader leftBtn={<Icon name='arrow-back' />} onPressRight={() => navigation.goBack()} />
      <Content>
        <Thumbnail style={styles.image} square source={{uri: post.picture}} />
        <Text style={styles.title}>{post.title}</Text>
        <Body>
          <Text note style={styles.description}>{post.description}</Text>
        </Body>
        <Button style={styles.btn} onPress={() => {}}>
          <Text style={styles.btn_title}>Go to User details</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 20
  },
  title: {
    color: '#222',
    fontSize: 24,
    fontWeight: '500',
    paddingVertical: 16,
    alignSelf: 'center'
  },
  description: {
    paddingHorizontal: 16,
    textAlign: 'center',
    lineHeight: 22
  },
  btn: {
    margin: 16,
    marginTop: 50
  },
  btn_title: {
    flex: 1,
    textAlign: 'center'
  }
})

export default PostDetails
