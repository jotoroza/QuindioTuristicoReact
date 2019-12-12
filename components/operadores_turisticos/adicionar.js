import React, { Component } from 'react';
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

export default class OperadoresTuristicosAdicionar extends Component {
    static navigationOptions = {
        title: 'Quidio Turistico',
    };
    constructor() {
        super();
        this.refFireBase = Firebase.firestore().collection('operadores_turisticos');
        this.state = {
            nombre: '',
            direccion: '',
            sitioweb: '',
            correo: '',
            telefono: '',
            celular: ''
        };
    };
    postData = async () => {
        if (this.state.nombre === undefined || this.state.nombre === '') {
            alert('Debe ingresar un nombre');
            return;
        } else if (this.state.direccion === undefined || this.state.direccion === '') {
            alert('Debe ingresar una direccion');
            return;
        } else if (this.state.sitioweb === undefined || this.state.sitioweb === '') {
            alert('Debe ingresar un sitioweb');
            return;
        } else if (this.state.correo === undefined || this.state.correo === '') {
            alert('Debe ingresar un correo');
            return;
        } else if (this.state.telefono === undefined || this.state.telefono === '') {
            alert('Debe ingresar un telefono');
            return;
        } else if (this.state.celular === undefined || this.state.celular === '') {
            alert('Debe ingresar un celular');
            return;
        }
        const hotel = {
            nombre: this.state.nombre,
            direccion: this.state.direccion,
            sitioweb: this.state.sitioweb,
            correo: this.state.correo,
            telefono: this.state.telefono,
            celular: this.state.celular
        };
        this.refFireBase
          .add(hotel)
          .then(docRef => {
            this.setState({
                nombre: '',
                direccion: '',
                sitioweb: '',
                correo: '',
                telefono: '',
                celular: ''
            });
            this.props.navigation.goBack();
          })
          .catch(error => {
            console.error('Error adding document: ', error);
          });
    };
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Content>
                    <View style={{ marginTop: 20 }}></View>
                    <H1 style={{ textAlign: "center" }}>Adicionar Operador Turistico</H1>
                    <View style={{ marginTop: 10 }}></View>
                    <Text style={{ textAlign: "center" }}>Los campos marcados con <Text style={{ color: "red" }}>*</Text> son obligatorios</Text>
                    <Form model='medico'>
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
                        <View style={{ marginTop: 30, marginBotton: 60, paddingLeft: 140, paddingRight: 120 }}>
                            <Button rounded info
                                type="submit"
                                id="btnEditar"
                                name="btnEditar"
                                onPress={this.postData}
                            >
                                <Text>Guardar</Text>
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
