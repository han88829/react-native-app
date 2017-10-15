import React, { Component } from 'react';
import { Text } from "react-native";

class Home extends Component {
    // 导航头部
    static navigationOptions = {
        title: "注册",
        header: null  //隐藏导航条
    };

    render() {
        return (
            <Text style={{ flex: 1, textAlign: "centerFF" }}>
                hello react-native！
            </Text>
        );
    }
}

export default Home;