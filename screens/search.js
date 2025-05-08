import React, { Component }from 'react';
import { Box, Icon, Input, Pressable, Text, ScrollView } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { Header, CategoryCard} from '../components';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchRecipe: '',
        };
    }
    render(){
        const { searchRecipe } = this.state;
        const { navigation } = this.props;
        return (
            <Box
                flex={1}
                bgColor='#FFFFFF'
            >
                <Header 
                    headText1="Don't be confused Chef!"
                    headText2="Let's go, find your food."
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Box
                        flexDirection='row'
                        height={50}
                        alignItems='center'
                        marginX={4}
                        marginTop={15}
                        paddingX={4}
                        bgColor='#FDFDFD'
                        borderColor='#F7D4A2'
                        borderWidth={2}
                        borderRadius={50}
                    >
                        <Icon
                            as={FontAwesome5}
                            name='search'
                            size={4}
                        />
                        <Input
                            marginLeft={2}
                            borderWidth={0}
                            placeholderTextColor='#757575'
                            placeholder='Search Recipes'
                            variant='unstyled'
                            onChangeText={(char) => this.setState({ searchRecipe: char })}
                            value={searchRecipe}
                        />
                        <Pressable
                            right={20}
                            height={50}
                            width={20}
                            bgColor='#F7D4A2'
                            justifyContent='center'
                            alignItems='center'
                            borderRightRadius={50}
                            onPress={() => {
                                navigation.navigate('DetailSearch', { query: searchRecipe });
                                this.setState({ searchRecipe: '' });
                            }}
                        >
                            <Text>
                                Search
                            </Text>
                        </Pressable>
                    </Box>
                    <CategoryCard
                        categoryItem={require('../assets/rice.png')}
                        categoryTitle='Rice'
                        onPress={() => navigation.navigate('DetailSearch', { query: 'Rice' })}
                    />
                    <CategoryCard 
                        categoryItem={require('../assets/noodle.png')}
                        categoryTitle='Noodle'
                        onPress={() => navigation.navigate('DetailSearch', { query: 'Noodle' })}
                    />
                    <CategoryCard 
                        categoryItem={require('../assets/meat.png')}
                        categoryTitle='Meat'
                        onPress={() => navigation.navigate('DetailSearch', { query: 'Meat' })}
                    />
                    <CategoryCard 
                        categoryItem={require('../assets/poultry.png')}
                        categoryTitle='Poultry'
                        onPress={() => navigation.navigate('DetailSearch', { query: 'Poultry' })}
                    />
                    <CategoryCard 
                        categoryItem={require('../assets/seafood.png')}
                        categoryTitle='Seafood'
                        onPress={() => navigation.navigate('DetailSearch', { query: 'Seafood' })}
                    />
                    <CategoryCard 
                        categoryItem={require('../assets/vegetable.png')}
                        categoryTitle='Vegetable'
                        onPress={() => navigation.navigate('DetailSearch', { query: 'Vegetable' })}
                    />
                    <Box 
                        marginBottom={15}
                    />
                </ScrollView>
            </Box>
        )
    }
}

export default Search;