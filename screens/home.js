import React, { Component } from 'react';
import { Box, Text, Pressable, FlatList, Image, Skeleton, HStack } from 'native-base';
import { Header } from '../components';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            isContentLoading: true,
            isFetching: false,
            random: [],
            content: [],
            trivia: null
        }
    };

    fetchContent = () => {
        fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=305603e031a144c39d945919a3eebb2f&number=5')
        .then((response) => response.json())
        .then((json) => this.setState({content: json.results}))
        .catch((error) => console.error(error))
        .finally(() => this.setState({
            isContentLoading: false,
            isFetching: false
        }))
    };

    fetchTrivia = () => {
        fetch('https://api.spoonacular.com/food/trivia/random?apiKey=b9499485d1754612be82cfb805bfce19')
        .then((response) => response.json())
        .then((json) => this.setState({trivia: json.text}))
        .catch((error) => console.error(error))
        .finally(() => this.setState({
            isContentLoading: false,
            isFetching: false
        }))
    };

    fetchRandom = () => {
        fetch('https://api.spoonacular.com/recipes/random?apiKey=3011c26274d64d5193567218fc214778&number=3')
        .then((response) => response.json())
        .then((json) => this.setState({random: json.recipes}))
        .catch((error) => console.error(error))
        .finally(() => this.setState({
            isContentLoading: false,
            isFetching: false
        }))
    };

    componentDidMount = () => {
        this.fetchContent();
        this.fetchTrivia();
        this.fetchRandom();
    };

    renderItem = ({ item }) => {
        const { navigation } = this.props;
        return(
            <Pressable
                flexDirection='row'
                alignItems='center'
                padding={2}
                marginTop={3}
                borderRadius={12}
                bgColor='#FFFFFF'
                marginX={3}
                onPress={() => navigation.navigate('Recipe', {id: item.id})}
                shadow='4'
            >
                <Image 
                    source={{uri: item.image}}
                    resizeMode='cover'
                    alt='contentIMG'
                    width={75}
                    height={75}
                    borderRadius={12}
                />
                <Box
                    width='80%'
                    paddingX={7}
                >
                    <Text
                        fontSize={16}
                    >
                        {item.title}
                    </Text>
                </Box>
            </Pressable>
        )
    };

    randerTrivia = () =>{
        const { trivia } = this.state;
        return(
            <Box
                marginTop={6}
                marginX={18}
                borderRadius={10}
                bgColor='#ec9a3d2b'
            >
                <Box
                    flex={1}
                    paddingY={5}
                >
                    <Text
                    paddingX={5}
                    fontSize={14}
                    textAlign='center'
                    >
                        {trivia}
                    </Text>
                </Box>
            </Box>
        )
    };

    randerFyp = () => {
        const { random } = this.state;
        const { navigation } = this.props;
        return(
            <Box
                marginTop={18}
            >
                <Text
                    marginX={5}
                    fontSize={20}
                    fontWeight='bold'
                >
                    For You
                </Text>
                
                <FlatList 
                    data={random}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return(
                            <Pressable
                                height={350}
                                width={250}
                                marginTop={2}
                                marginRight={3}
                                marginLeft={3}
                                borderRadius={12}
                                onPress={() => navigation.navigate('Recipe', {id: item.id})}
                                shadow='4'
                            >
                                <Image
                                    source={{uri: item.image}}
                                    resizeMode='cover'
                                    height={350}
                                    width={250}
                                    borderRadius={12}
                                    alt='fypIMG'
                                />
                                <Box
                                position='absolute'
                                justifyContent='center'
                                bottom={3}
                                left={3}
                                right={3}
                                paddingX={4}
                                paddingY={8}
                                borderRadius={12}
                                height={120}
                                bgColor='#4d4d4dcc'
                                >
                                    <Text
                                        color='#FFFFFF'
                                        fontSize={14}
                                    >
                                        {item.title}
                                    </Text>
                                </Box>
                            </Pressable>
                        )
                    }}
                />
            </Box>
        )
    };

    onRefresh = () => {
        this.setState({isContentLoading: true}, () => {
            this.fetchContent();
            this.fetchRandom();
            this.fetchTrivia();
        })
    };

    render(){
        const {
            isContentLoading,
            isFetching,
            content,
        } = this.state;
        return (
            <Box
                flex={1}
                bgColor='#FFFFFF'
            >
                <Header 
                    headText1='Hi Chef!'
                    headText2="Let's cook something."
                />
                {isContentLoading ? (
                    <Box>
                        <Box
                            marginTop={6}
                            marginX={18}
                        >
                            <Skeleton startColor='#fa80721e' borderRadius={10} />
                            
                        </Box>
                        <Box
                            marginTop={8}
                        >
                            <Skeleton.Text startColor='coolGray.200' lines={1} width={120} marginLeft={5} />
                            <HStack
                                marginTop={2}
                            >
                                <Skeleton startColor='coolGray.200' size={350} width={250} borderRadius={10} marginLeft={3} marginRight={3} />
                                <Skeleton startColor='coolGray.200' size={350} width={250} borderRadius={10} marginLeft={3} marginRight={3} />
                            </HStack>
                        </Box>
                        <Box
                            marginTop={5}
                            marginX={5}
                        >
                            <Skeleton.Text startColor='orange.100' lines={1} width={120} />
                            <Skeleton startColor='orange.100' marginTop={2} borderRadius={10} size={150} width='100%' />
                        </Box>
                    </Box>
                ) : (
                    <FlatList 
                        data={content}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={
                            <Box>
                                {this.randerTrivia()}
                                {this.randerFyp()}
                                <Text
                                    marginTop={5}
                                    marginX={5}
                                    fontSize={20}
                                    fontWeight='bold'
                                >
                                    Latest
                                </Text>
                            </Box>
                        }
                        showsVerticalScrollIndicator={false}
                        renderItem={this.renderItem}
                        onRefresh={this.onRefresh}
                        refreshing={isFetching}
                        ListFooterComponent={
                            <Box 
                                marginBottom={5}
                            
                        />
                        }
                    />
                )}
            </Box>
        )
    }
};

export default Home;
