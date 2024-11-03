import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoutesParams } from "./router";
import React from "react";
import { View, StatusBar, Text } from "react-native";
import styles from "./styles";
type Props = NativeStackScreenProps<RoutesParams , "Details">;
export default function Details({route, navigation} : Props) {
    const {content, title} = route.params;

    React.useEffect(() => {
        navigation.setOptions({title});
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"dark-content"} />
            <Text>{content}</Text>
        </View>
    );
}