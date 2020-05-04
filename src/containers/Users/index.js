import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, Modal } from 'react-native'
import { getUsers } from '../../../fakeData'
import { Container, Content, List, ListItem, Left, Right, Icon, Text, Spinner } from 'native-base';
import { CustomHeader } from '../../components'
import UserDetails from '../UserDetails'

function Users({navigation}){
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    getUsersData()
  }, [])
  async function getUsersData(){
    const data = await getUsers()
    setUsers(data)
    setLoading(false)
  }
  if(loading){
    return(
      <Container style={{justifyContent: 'center'}}>
        <Spinner color='#2094de' />
      </Container>
    )
  }
  return (
    <Container>
      <Modal animationType="slide" visible={modalVisible}>
        <UserDetails data={user} closeModal={() => setModalVisible(false)} editUser={(user_update) => {
          setUsers([...users.slice(0, user.item_index), {...user, ...user_update}, ...users.slice(user.item_index + 1)])
          setModalVisible(false)
        }} />
      </Modal>
      <CustomHeader title={"Users"} rightBtn={<Icon name="ios-add" />} onPressLeft={() => setUsers([...users, {first_name: "User", last_name: `${users.length + 1}`}])} />
      <Content>
        <List>
          {users && Array.isArray(users) ? users.map((item, i) => {
            return(
              <ListItem key={i} onPress={() => { setModalVisible(true); setUser({...item, item_index: i}) }}>
                <Left>
                  <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
                  {item.admin ? <Text style={styles.admin}>admin</Text> : null}
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            )
          }) : null}
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#222",
    flex: 1
  },
  admin: {
    color: "red",
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginLeft: 16,
    padding: 2,
    fontSize: 10
  },
})

export default Users
