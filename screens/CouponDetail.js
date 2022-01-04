import React from "react";

import { StyleSheet, Text, View } from "react-native";

const CouponDetail = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.bold}>Coupon detail page</Text>
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

export default CouponDetail;
