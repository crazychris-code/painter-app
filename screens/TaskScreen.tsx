import * as React from 'react'
import { StyleSheet } from 'react-native'

import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Thumbnail,
  Body,
  Image,
  Button,
  Icon,
  Right
} from 'native-base'

export default function TaskScreen () {
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>GeekyAnts</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'Image URL' }} />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name='thumbs-up' />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name='chatbubbles' />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  body: {
    marginLeft: '70px'
  }
})
