import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text, View } from 'native-base';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Quidio Turistico',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                    <View style={{marginTop: 30}}></View>
                    <Button block bordered success
                        // onPress={() => navigate('AgregarMedico')}
                    >
                        <Text>Sitios Turisticos</Text>
                    </Button>
                    <View style={{marginTop: 30}}></View>
                    <Button block bordered warning
                        onPress={() => navigate('HotelScreen')}
                    >
                        <Text>Hoteles</Text>
                    </Button>
                    <View style={{marginTop: 30}}></View>
                    <Button block bordered info
                        // onPress={() => navigate('ListarMedicos')}
                    >
                        <Text>Operadores Turisticos</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>React Native</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
