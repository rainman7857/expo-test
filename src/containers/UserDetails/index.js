import React, { useState } from 'react';
import { StyleSheet } from 'react-native'
import { Container, Content, Text, Button, Item, Form, Label, Input } from 'native-base';
import { CustomHeader } from '../../components'

function UserDetails({data, editUser, closeModal}){
  const [first_name, setFirstName] = useState(data.first_name)
  const [last_name, setLastName] = useState(data.last_name)
  const [email, setEmail] = useState(data.email)
  const [description, setDescription] = useState(data.description)
  return (
    <Container>
      <Content>
        {data.admin ? <Text style={styles.admin}>Admin</Text> : null}
        <Form>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input value={first_name} onChangeText={(text) => setFirstName(text)} />
          </Item>
          <Item floatingLabel>
            <Label>Last Name</Label>
            <Input value={last_name} onChangeText={(text) => setLastName(text)} />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input value={email} onChangeText={(text) => setEmail(text)} />
          </Item>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input value={description} onChangeText={(text) => setDescription(text)} />
          </Item>
        </Form>
        <Button style={[styles.btn, { backgroundColor: "rgb(247, 149, 136)"}]} onPress={() => editUser({first_name, last_name, email, description})}>
          <Text style={styles.btn_title}>Save</Text>
        </Button>
        <Button style={styles.btn} onPress={() => closeModal()}>
          <Text style={styles.btn_title}>Close</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({

  admin: {
    color: 'red',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 5,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    margin: 16
  },
  btn: {
    margin: 16,
    marginBottom: 0,
    backgroundColor: 'rgba(1, 83, 150, 0.7)',
  },
  btn_title: {
    flex: 1,
    textAlign: 'center'
  }
})

export default UserDetails
