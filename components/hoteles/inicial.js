import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text, View, H1, Icon } from 'native-base';

export default class HotelScreen extends Component {
    static navigationOptions = {
        title: 'Quidio Turistico',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                    <View style={{marginTop: 20}}></View>
                    <View style={{alignItems: "center"}}>
                        <H1>Hoteles</H1>
                    </View>
                    <View style={{marginTop: 30}}></View>
                    <Button block success iconLeft
                        onPress={() => navigate('HotelVisualizar')}
                    >
                        <Icon name='search' />
                        <Text>Visualizar</Text>
                    </Button>
                    <View style={{marginTop: 30}}></View>
                    <Button block info iconLeft
                        onPress={() => navigate('HotelAdicionar')}
                    >
                        <Icon name='add-circle' type="MaterialIcons" />
                        <Text>Adicionar</Text>
                    </Button>
                    <View style={{marginTop: 30}}></View>
                    <Button block warning iconLeft
                        onPress={() => navigate('HotelModificar')}
                    >
                        <Icon name='edit' type="AntDesign" />
                        <Text>Modificar</Text>
                    </Button>
                    <View style={{marginTop: 30}}></View>
                    <Button block danger iconLeft
                        onPress={() => navigate('HotelEliminar')}
                    >
                        <Icon name='delete' type="AntDesign" />
                        <Text>Borrar</Text>
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
