import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
const index = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.replace("/auth/sign-in")}>
        <Text>index</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
