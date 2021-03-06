import React, { Component } from "react";

// NativeBase Components
import { Text, Header, Container, Content, CardItem, Card } from "native-base";
import profileStore from "../../stores/profileStore";
import OrderItem from "./OrderItem";
import styles from "./styles";

class OrderDetails extends Component {
  state = {
    order: this.props.navigation.getParam("id")
  };
  render() {
    const id = this.props.navigation.getParam("id", 1);
    const order = profileStore.profile.past_items.find(
      order => id === order.id
    );
    const items = order.cart_item.map(item => (
      <OrderItem item={item} key={item.cake} />
    ));
    return (
      <Container style={styles.authContainer}>
        <Header transparent>
          <Text style={styles.authTitle}>Order Date: {order.date}</Text>
        </Header>
        <Content>{items}</Content>
      </Container>
    );
  }
}

export default OrderDetails;
