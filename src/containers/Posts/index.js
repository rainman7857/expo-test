import React, { useState, useEffect } from 'react';
import { getPosts } from '../../../fakeData'
import { Container, Content, List, ListItem, Thumbnail, Text, Spinner } from 'native-base';
import { CustomHeader } from '../../components'

function Posts({navigation}){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getPostsData()
  }, [])
  async function getPostsData(){
    const data = await getPosts()
    setPosts(data)
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
      <CustomHeader title={"Posts"} />
      <Content>
        <List>
          {posts && Array.isArray(posts) ? posts.map((item, i) => {
            return(
              <ListItem key={i}
                noIndent={item.type ? true : false}
                style={{backgroundColor: item.type ? "rgba(28, 205, 99, 0.5)" : "#fff"}}
                onPress={() => navigation.navigate('PostDetails', { post: item })}
              >
                <Thumbnail square source={{uri: item.picture}} />
                <Text style={{color: item.type ? "#fff" : "#222", paddingLeft: 16}}>{item.title}</Text>
              </ListItem>
            )
          }) : null}
        </List>
      </Content>
    </Container>
  );
}

export default Posts
