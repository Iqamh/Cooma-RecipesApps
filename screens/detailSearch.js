import React, { Component } from 'react';
import { Box, Text, HStack, Image, Pressable, FlatList, Skeleton, VStack, Icon } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { Header } from '../components';

class DetailSearch extends Component{
    constructor(props){
        super(props);

        this.state = {
            recipeList: [],
            searchIsLoading: true,
        }
    }

    getRecipesSearch = () => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=fdc9be43076c4562a8ac6077724bb115&query=${this.props.route.params.query}`)
        .then((response) => response.json())
        .then((json) => this.setState({ recipeList: json.results }))
        .catch((error) => console.error(error))
        .finally(() => this.setState({ searchIsLoading: false }))
    }

    componentDidMount = () => {
        this.getRecipesSearch();
    }

    renderItem = ({ item }) => {
        const { navigation } = this.props;
        return(
            <HStack
                marginY={2}
                alignItems='center'
                justifyContent='center'
            >
                <Pressable
                    alignItems='center'
                    marginLeft={4}
                    marginRight={2}
                    onPress={() => navigation.navigate('Recipe', {id: item.id})}
                    shadow='4'
                >
                    <Image 
                        source={{uri: item.image}}
                        resizeMode='cover'
                        width={150}
                        height={150}
                        borderRadius={12}
                        alt='searchIMG'
                    />
                    <Box
                        position='absolute'
                        justifyContent='center'
                        alignItems='center'
                        bottom={2}
                        right={2}
                        left={2}
                        height={50}
                        borderRadius={12}
                        bgColor='#FFFFFF'
                        opacity={70}
                    >
                        <Text
                            fontSize={10}
                            fontWeight='medium'
                            textAlign='center'
                        >
                            {item.title}
                        </Text>
                    </Box>
                </Pressable>
            </HStack>
        )
    }

    render(){
        const {
            recipeList,
            searchIsLoading,
        } = this.state;
        return (
            <Box
                flex={1}
                bgColor='#FFFFFF'
            >
                <Header 
                    headText1="Can't find your food?"
                    headText2="Let's search again Chef!"
                    backButton={true}
                />
                {this.props.route.params.query === null || this.props.route.params.query === '' ? (
                        <Box
                            flex={1}
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Icon 
                                as={FontAwesome5}
                                name='atom'
                                size={200}
                                color='coolGray.200'
                            />
                            <Text
                                color='coolGray.200'
                                fontSize={18}
                                fontWeight='semibold'
                            >
                                Query cannot be empty!
                            </Text>
                        </Box>
                ) : (
                    searchIsLoading ? (
                        <VStack
                            marginY={2}
                            marginX={2}
                        >
                            <HStack
                                marginY={2}
                                justifyContent='center'
                            >
                                <Skeleton startColor='warning.100' size={150} borderRadius={12} marginX={2} />
                                <Skeleton startColor='warning.100' size={150} borderRadius={12} marginX={2} />
                            </HStack>
                            <HStack
                                marginY={2}
                                justifyContent='center'
                            >
                                <Skeleton startColor='warning.100' size={150} borderRadius={12} marginX={2} />
                                <Skeleton startColor='warning.100' size={150} borderRadius={12} marginX={2} />
                            </HStack>
                            <HStack
                                marginY={2}
                                justifyContent='center'
                            >
                                <Skeleton startColor='warning.100' size={150} borderRadius={12} marginX={2} />
                                <Skeleton startColor='warning.100' size={150} borderRadius={12} marginX={2} />
                            </HStack>
                            <HStack
                                marginY={2}
                                justifyContent='center'
                            >
                                <Skeleton startColor='warning.100' size={150} borderRadius={12} marginX={2} />
                                <Skeleton startColor='warning.100' size={150} borderRadius={12} marginX={2} />
                            </HStack>
                        </VStack>
                    ) : (
                        <FlatList 
                            data={recipeList}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={this.renderItem}
                            numColumns={2}
                        />
                    )
                )}
            </Box>
        )
    }
}

export default DetailSearch;