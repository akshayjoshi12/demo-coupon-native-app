import React from "react";

import { StyleSheet, Text, View } from "react-native";

const RedeemCoupon = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.bold}>Coupon redeem page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    screen : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
  bold: {
    fontWeight: "bold",
  },
});

export default RedeemCoupon;
