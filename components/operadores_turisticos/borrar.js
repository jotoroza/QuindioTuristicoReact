import React, { Component } from 'react';
import { Alert } from "react-native";
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Text,
    Form,
    Item,
    Input,
    Label,
    View,
    H1
} from 'native-base';
import Firebase from '../FireBase';

export default class OperadoresTuristicosBorrar extends Component {
    static navigationOptions = {
        title: 'Quidio Turistico',
    };
    constructor() {
        super();
        this.refFireBase = Firebase.firestore().collection('operadores_turisticos');
        this.state = {
            id: '',
            nombre: '',
            direccion: '',
            sitioweb: '',
            correo: '',
            telefono: '',
            celular: ''
        };
    };
    borrarHotel = (id) => {
        Alert.alert(
            'Confirmacion',
            'Esta seguro que desea borrar el item seleccionado ?',
            [
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'Si', onPress: () => {
                    console.log('OK Pressed');
                    this.refFireBase.doc(id)
                        .delete()
                        .then(() => {
                            this.setState({
                                nombre: '',
                                direccion: '',
                                sitioweb: '',
                                correo: '',
                                telefono: '',
                                celular: ''
                            });
                            this.props.navigation.goBack();
                        });
                }},
            ],
            { cancelable: false }
        )
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
                    <H1 style={{ textAlign: "center" }}>Borrar Operador Turistico</H1>
                    <View style={{ marginTop: 10 }}></View>
                    <Text style={{ textAlign: "center" }}>Los campos marcados con <Text style={{ color: "red" }}>*</Text> son obligatorios</Text>
                    <Form model='hotel'>
                        <Item floatingLabel>
                            <Label>Nombre <Text style={{ color: "red" }}>*</Text></Label>
                            <Input
                                type="text"
                                name="txtNombre"
                                id="txtNombre"
                                value={this.state.nombre}
                                onChangeText={(value) => this.setState({ nombre: value })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Direccion <Text style={{ color: "red" }}>*</Text></Label>
                            <Input
                                type="text"
                                name="txtDireccion"
                                id="txtDireccion"
                                value={this.state.direccion}
                                onChangeText={(value) => this.setState({ direccion: value })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Sitio Web <Text style={{ color: "red" }}>*</Text></Label>
                            <Input
                                type="text"
                                name="txtSitioweb"
                                id="txtSitioweb"
                                value={this.state.sitioweb}
                                onChangeText={(value) => this.setState({ sitioweb: value })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Correo <Text style={{ color: "red" }}>*</Text></Label>
                            <Input
                                type="text"
                                name="txtCorreo"
                                id="txtCorreo"
                                value={this.state.correo}
                                onChangeText={(value) => this.setState({ correo: value })}
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label>Telefono <Text style={{ color: "red" }}>*</Text></Label>
                            <Input
                                type="numeric"
                                name="txtTelefono"
                                id="txtTelefono"
                                value={this.state.telefono}
                                onChangeText={(value) => this.setState({ telefono: value })}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Celular <Text style={{ color: "red" }}>*</Text></Label>
                            <Input
                                type="numeric"
                                name="txtCelular"
                                id="txtCelular"
                                value={this.state.celular}
                                onChangeText={(value) => this.setState({ celular: value })}
                            />
                        </Item>
                        <View style={{ marginTop: 30, marginBotton: 60, paddingLeft: 125, paddingRight: 125 }}>
                            <Button rounded danger
                                type="submit"
                                id="btnEditar"
                                name="btnEditar"
                                onPress={() => this.borrarHotel(this.state.id)}
                            >
                                <Text>Borrar</Text>
                            </Button>
                        </View>
                        <View style={{marginTop: 30}}></View>
                    </Form>
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
