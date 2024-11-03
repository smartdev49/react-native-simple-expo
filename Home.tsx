import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RoutesParams } from "./router";
import { View, StatusBar,Text, Button } from "react-native";
import styles from "./styles";
type Props = NativeStackScreenProps<RoutesParams>;

export default function Home({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text>Home Screen</Text>
            <Button
                title="Settings" onPress={()=>navigation.navigate('Settings')} />
            <Button
                title="First Item"
                onPress={() =>
                navigation.navigate("Details", {
                    title: "First Item",
                    content: "First Item Content",
                    stock: 1,
                })} />
        </View>
    )
}