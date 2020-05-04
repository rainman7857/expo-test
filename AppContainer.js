import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Posts, PostDetails, Users } from './src/containers'

const PostsStack = createStackNavigator({
  Posts,
  PostDetails
}, { defaultNavigationOptions: { headerShown: false } });
const UsersStack = createStackNavigator({
  Users,
}, { defaultNavigationOptions: { headerShown: false } });
const TabNavigator = createBottomTabNavigator({
  Posts: PostsStack,
  Users: UsersStack,
}, {
  tabBarOptions: {
    style: { height: 50 },
    activeBackgroundColor: "rgba(130, 68, 244, 0.2)",
    labelStyle: { color: "#222", fontSize: 14 },
    labelPosition: "beside-icon"
  }
});

export default createAppContainer(TabNavigator);
