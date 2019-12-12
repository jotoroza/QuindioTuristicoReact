import React, { Component } from 'react';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Text,
    Item,
    Input,
    Label,
    View,
    H1
} from 'native-base';
import { 
    Linking 
} from 'react-native';
import Firebase from '../FireBase';

export default class VerSitiosTuristicos extends Component {
    static navigationOptions = {
        title: 'Quidio Turistico',
    };
    constructor() {
        super();
        this.refFireBase = Firebase.firestore().collection('sitios_turisticos');
        this.state = {
            nombre: '',
            direccion: '',
            sitioweb: '',
            correo: '',
            telefono: '',
            celular: ''
        };
    };
    componentDidMount() {
        const id = this.props.navigation.state.params.itemId;

        return this.refFireBase.doc(id).get().then(doc => {
            const list = [];
            if (doc.exists) {
                const identi = { id: doc.id };
                var element = Object.assign(identi, doc.data());
                list.push(element);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            list.forEach(doc => {
              this.setState({
                id: doc.id,
                nombre: doc.nombre,
                direccion: doc.direccion,
                sitioweb: doc.sitioweb,
                correo: doc.correo,
                telefono: doc.telefono,
                celular: doc.celular
              });
            });
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <View style={{ marginTop: 20 }}></View>
                    <View style={{alignItems: "center"}}>
                        <H1>{this.state.nombre}</H1>
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <Item floatingLabel>
                        <Label>Direccion <Text style={{ color: "red" }}>*</Text></Label>
                        <Input
                            disabled="true"
                            type="text"
                            name="txtDireccion"
                            id="txtDireccion"
                            value={this.state.direccion}
                            onChangeText={(value) => this.setState({ direccion: value })}
                        />
                    </Item>
                    <View style={{ marginTop: 20 }}></View>
                    <Item floatingLabel>
                        <Label>Sitio Web <Text style={{ color: "red" }}>*</Text></Label>
                        <Input
                            disabled
                            type="text"
                            name="txtSitioweb"
                            id="txtSitioweb"
                            value={this.state.sitioweb}
                            onChangeText={(value) => this.setState({ sitioweb: value })}
                        />
                    </Item>
                    <View style={{ marginTop: 20 }}></View>
                    <View style={{ marginTop: 10, marginBotton: 10, paddingLeft: 125, paddingRight: 125 }}>
                        <Button
                            style={{ marginLeft: 20 }}
                            danger
                            onPress={() => {Linking.openURL('http://'+this.state.sitioweb);}}
                        >
                            <Text>Ir</Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <Item floatingLabel>
                        <Label>Correo <Text style={{ color: "red" }}>*</Text></Label>
                        <Input
                            disabled="true"
                            type="text"
                            name="txtCorreo"
                            id="txtCorreo"
                            value={this.state.correo}
                            onChangeText={(value) => this.setState({ correo: value })}
                        />
                    </Item>
                    <View style={{ marginTop: 20 }}></View>
                    <View style={{ marginTop: 10, marginBotton: 10, paddingLeft: 125, paddingRight: 125 }}>
                        <Button
                            style={{ marginLeft: 20 }}
                            success
                            onPress={() => {Linking.openURL('mailto:'+this.state.correo+'?subject=Asunto&body=Mensaje ');}}
                        >
                            <Text>Correo</Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <Item floatingLabel>
                        <Label>Telefono <Text style={{ color: "red" }}>*</Text></Label>
                        <Input
                            disabled="true"
                            type="numeric"
                            name="txtTelefono"
                            id="txtTelefono"
                            value={this.state.telefono}
                            onChangeText={(value) => this.setState({ telefono: value })}
                        />
                    </Item>
                    <View style={{ marginTop: 20 }}></View>
                    <View style={{ marginTop: 10, marginBotton: 10, paddingLeft: 100, paddingRight: 100 }}>
                        <Button
                            style={{ marginLeft: 20 }}
                            warning
                            onPress={() => {Linking.openURL('tel:032'+this.state.telefono);}}
                        >
                            <Text>Telefono</Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: 20 }}></View>
                    <Item floatingLabel last>
                        <Label>Celular <Text style={{ color: "red" }}>*</Text></Label>
                        <Input
                            disabled
                            type="numeric"
                            name="txtCelular"
                            id="txtCelular"
                            value={this.state.celular}
                            onChangeText={(value) => this.setState({ celular: value })}
                        />
                    </Item>
                    <View style={{ marginTop: 20 }}></View>
                    <View style={{ marginTop: 10, marginBotton: 10, paddingLeft: 100, paddingRight: 100 }}>
                        <Button
                            style={{ marginLeft: 20 }}
                            info
                            onPress={() => {Linking.openURL('tel:'+this.state.celular);}}
                        >
                            <Text>Celular</Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: 20 }}></View>
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
