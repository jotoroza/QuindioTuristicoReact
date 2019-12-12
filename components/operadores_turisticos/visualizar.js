import React, { Component } from 'react';
import { 
    Container, 
    Content, 
    Footer, 
    FooterTab, 
    Button, 
    Text, 
    View, 
    H1, 
    Item, 
    Input,
    List,
    ListItem
} from 'native-base';
import Firebase from '../FireBase';

export default class OperadoresTuristicosVisualizar extends Component {
    static navigationOptions = {
        title: 'Quidio Turistico',
    };
    constructor(props) {
        super(props);
        this.refFireBase = Firebase.firestore().collection('operadores_turisticos');
        this.state = {
            hoteles: []
        };
    };
    componentDidMount() {
        return this.refFireBase.onSnapshot(querySnapshot => {
            const list = [];
            querySnapshot.forEach(doc => {
                const identi = { id: doc.id };
                var element = Object.assign(identi, doc.data());
                list.push(element);
            });
            this.setState({
                hoteles: list,
            });
        });
    }
    borrarHotel = (id) => {
        const hoteles = this.state.hoteles;
        this.refFireBase.doc(id)
          .delete()
          .then(() => {
            this.setState({
                hoteles: hoteles.filter((hotel) => hotel.id !== id)
            });
        });
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Content>
                    <View style={{marginTop: 20}}></View>
                    <View style={{alignItems: "center"}}>
                        <H1>Operadores Turisticos</H1>
                    </View>
                    <View style={{marginTop: 30}}></View>
                    <Item success>
                        <Input placeholder='Buscar'/>
                    </Item>
                    <View style={{ marginTop: 10 }}></View>
                    <List>
                        {this.state.hoteles.map((hotel, index) => (
                            <ListItem
                                onPress={() => {
                                    this.props.navigation.navigate('VerOperadoresTuristicos', {
                                        itemId: hotel.id,
                                    });
                                }}
                            >
                                <Text>{hotel.nombre}</Text>
                            </ListItem>
                        ))}
                    </List>
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
