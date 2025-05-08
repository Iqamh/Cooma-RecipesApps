import React, { Component } from 'react';
import { Box, Text, Pressable, FlatList, Image, Icon, HStack, Skeleton, VStack } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

class Recipe extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            recipesIsLoading: true,
            ingredients: [],
            instructions: [],
            informationImg: null,
            recipeTitle: null,
            readyRecipe: null,
        }
    }
    getRecipeInformation = () => {
        fetch(`https://api.spoonacular.com/recipes/${this.props.route.params.id}/information?apiKey=42b74fc66e604a6e87234f5ad983c75f`)
        .then((response) => response.json())
        .then((json) => this.setState({
            ingredients: json.extendedIngredients,
            instructions: json.analyzedInstructions[0].steps,
            informationImg: json.image,
            recipeTitle: json.title,
            readyRecipe: json.readyInMinutes
        }))
        .catch((error) => console.error(error))
        .finally(() => this.setState({ recipesIsLoading: false }))
    }
        
        componentDidMount = () => {
            this.getRecipeInformation();
        }

        renderItemIngredients = ({ item }) => {
        return(
            <HStack
                paddingX={25}
                marginY={2}
                justifyContent='center'
                alignItems='center'
            >
                <Box
                    justifyContent='center'
                    alignItems='center'
                    height={50}
                    width={50}
                    borderRadius={5}
                    bgColor='#FFFFFF'
                >
                    <Image 
                        source={{uri: 'https://spoonacular.com/cdn/ingredients_100x100/'+item.image}}
                        height={50}
                        width={50}
                        alt='recipeIMG'
                        resizeMode='contain'
                    />
                </Box>
                <Box
                    flex={1}
                    paddingX={5}
                >
                    <Text
                        fontSize={14}
                    >
                        {item.original}
                    </Text>
                </Box>
            </HStack>
        )
    }
    
    backgroundRecipe = () => {
        const { 
            informationImg,
            recipeTitle,
            readyRecipe
        } = this.state;
        return(
            <Box
            alignItems='center'
            >
                <Image 
                    source={{uri: informationImg}}
                    resizeMode='contain'
                    height={300}
                    width='100%'
                    alt='bgIMG'
                    />
                <Box
                    position='absolute'
                    bottom={10}
                    left={30}
                    right={30}
                    height={20}
                    >
                    <Box
                        flex={1}
                        borderRadius={12}
                        bgColor='#02020292'
                        alignItems='center'
                        justifyContent='center'
                        >
                        <Text
                            color='white'
                            fontSize={16}
                            fontWeight='bold'
                            textAlign='center'
                            >
                            {recipeTitle}
                        </Text>
                        <Text
                            color='#e0e0e0'
                            fontSize={10}
                            >
                            {readyRecipe} mins
                        </Text>
                    </Box>
                </Box>
            </Box>
        )
    }

    headButton = () => {
        const { navigation } = this.props;
        return(
            <Box
                position='absolute'
                top={0}
                left={0}
                right={0}
                height={90}
                flexDirection='row'
                alignItems='flex-end'
                justifyContent='space-between'
                paddingX={8}
                paddingBottom={5}
            >
                <Pressable
                    alignItems='center'
                    justifyContent='center'
                    height={25}
                    width={25}
                    borderRadius={18}
                    borderWidth={1}
                    borderColor='#c3c3c3'
                    bgColor='#02020280'
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        as={FontAwesome5}
                        name='chevron-left'
                        size={3}
                        color='#c3c3c396'
                    />
                </Pressable>
            </Box>
        )
    }
    
    renderItemStep = () => {
        const { instructions } = this.state;
        return(
            <Box
                marginTop={18}
            >
                <Text
                    paddingX={25}
                    fontSize={20}
                    fontWeight='bold'
                >
                    Instructions
                </Text>
                <FlatList 
                    data={instructions}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.number}
                    renderItem={({ item, index }) => {
                        return(
                            <Box
                                marginY={2}
                                paddingX={25}
                            >
                                <HStack
                                    height={50}
                                    alignItems='center'
                                >
                                    <Box
                                        width={35}
                                        height={35}
                                        bgColor='#faaca35b'
                                        marginRight={5}
                                        borderRadius={20}
                                        justifyContent='center'
                                        alignItems='center'
                                    >
                                        <Text
                                            fontSize={14}
                                            fontWeight='semibold'
                                        >
                                            {item.number}
                                        </Text>
                                    </Box>
                                    <Text
                                        fontSize={16}
                                        flex={1}
                                    >
                                        {item.step}
                                    </Text>
                                </HStack>
                            </Box>
                        )
                    }}
                />
            </Box>
        )
    }
    
    render(){
        const {
            recipesIsLoading,
            ingredients
        } = this.state;
        return (
            <Box
                flex={1}
                bgColor='#FFFFFF'
            >
                {recipesIsLoading ? (
                    <Box>
                        <Skeleton startColor='danger.50' size={300} width='full' />
                        <VStack
                            marginTop={5}
                            marginX={5}
                        >
                            <Box>
                                <Skeleton.Text startColor='blueGray.200' lines={1} width={120} />
                                <HStack
                                    marginTop={2}
                                    alignItems='center'
                                >
                                    <Skeleton startColor='blueGray.100' size={50} borderRadius={5} />
                                    <Skeleton.Text startColor='blueGray.100' lines={1} width='80%' marginLeft={2} />
                                </HStack>
                                <HStack
                                    marginTop={2}
                                    alignItems='center'
                                >
                                    <Skeleton startColor='blueGray.100' size={50} borderRadius={5} />
                                    <Skeleton.Text startColor='blueGray.100' lines={1} width='80%' marginLeft={2} />
                                </HStack>
                            </Box>
                            <Box
                                marginTop={5}
                            >
                                <Skeleton.Text startColor='violet.100' lines={1} width={120} />
                                <HStack
                                    marginTop={2}
                                    alignItems='center'
                                >
                                    <Skeleton startColor='violet.50' size={50} borderRadius='full' />
                                    <Skeleton.Text startColor='violet.50' lines={2} width='80%' marginLeft={2} />
                                </HStack>
                                <HStack
                                    marginTop={2}
                                    alignItems='center'
                                >
                                    <Skeleton startColor='violet.50' size={50} borderRadius='full' />
                                    <Skeleton.Text startColor='violet.50' lines={2} width='80%' marginLeft={2} />
                                </HStack>
                                <HStack
                                    marginTop={2}
                                    alignItems='center'
                                >
                                    <Skeleton startColor='violet.50' size={50} borderRadius='full' />
                                    <Skeleton.Text startColor='violet.50' lines={2} width='80%' marginLeft={2} />
                                </HStack>
                            </Box>
                        </VStack>
                    </Box>
                ) : (
                    <FlatList 
                        data={ingredients}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <Box
                                top={0}
                            >
                                {this.backgroundRecipe()}
                                {this.headButton()}
                                <Text
                                    fontSize={20}
                                    fontWeight='bold'
                                    paddingX={25}
                                >
                                    Ingredients
                                    
                                </Text>
                            </Box>
                        }
                        renderItem={this.renderItemIngredients}
                        ListFooterComponent={
                            <Box
                                marginBottom={4}
                            >
                                {this.renderItemStep()}
                            </Box>
                        }
                    />
                )}
            </Box>
        )
    }
}

export default Recipe;