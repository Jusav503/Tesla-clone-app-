import React from "react";
import { View, Text, FlatList } from "react-native";
import CartItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

const CartList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CartItem car={item} />}
      />
    </View>
  );
};

export default CartList;
