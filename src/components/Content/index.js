import React from 'react';
import { Animated } from 'react-native';
import {
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

import Menu from '~/components/Menu';


export default function Header() {

  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event([
      { nativeEvent: { translationY: translateY } }
    ], 
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {

  }


  return (
    <Container>

      <Menu 
        translateY={translateY}
      />

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
      >
        <Card
          style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp',
              }),
            }]
          }}
        >
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 201.324,42</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de $32,00 recebida de Alan Lima hoje às 10:22h
            </Annotation>
          </CardFooter>
        </Card>
      </PanGestureHandler>

    </Container>
  );
}
