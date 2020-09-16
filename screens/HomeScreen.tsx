import * as React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Thumbnail,
  Body
} from 'native-base'
import { TaskParamList } from '../types'

const viewTasks = () => {
  alert('hej')
}

const HomeStack = createStackNavigator<TaskParamList>()

export default function HomeScreen () {
  return (
    <Container>
      <Content>
        <List>
          <ListItem avatar button={true} onPress={viewTasks}>
            <Left>
              <Thumbnail source={require('../assets/images/room1.jpg')} />
            </Left>
            <Body style={styles.body}>
              <Text>Kumar Pratik</Text>
              <Text note>14, Beverley Close, Barnes</Text>
            </Body>
          </ListItem>
          <ListItem avatar onPress={viewTasks}>
            <Left>
              <Thumbnail source={require('../assets/images/room2.jpg')} />
            </Left>
            <Body style={styles.body}>
              <Text>John Sims</Text>
              <Text note>1, Church Road, Barnes</Text>
            </Body>
          </ListItem>
          <ListItem avatar onPress={viewTasks}>
            <Left>
              <Thumbnail source={require('../assets/images/room3.jpg')} />
            </Left>
            <Body style={styles.body}>
              <Text>Lisa Jones</Text>
              <Text note>56, Richmond road, Richmond</Text>
            </Body>
          </ListItem>
          <ListItem avatar onPress={viewTasks}>
            <Left>
              <Thumbnail source={require('../assets/images/room4.jpg')} />
            </Left>
            <Body style={styles.body}>
              <Text>Philip McIntosh</Text>
              <Text note>44, Sheen Main Road, East Sheen</Text>
            </Body>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  body: {
    marginLeft: '70px'
  }
})
