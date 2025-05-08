import React from "react";
import { Box, Text, HStack, VStack, Image, Pressable, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons';

const Header = (props) => {
    const navigation = useNavigation();
    return(
        <Box
            bgColor='#FFFFFF'
            px={4}
            py={4}
            borderBottomWidth={1}
            borderBottomColor='#00000012'
        >
            <HStack
                justifyContent='space-between'
            >
                <HStack>
                    {props.backButton && (
                        <Pressable 
                            onPress={() => navigation.goBack()}
                            mr={8}
                            justifyContent='center'
                        >
                            <Icon 
                                as={FontAwesome5}
                                name='arrow-left'
                                size={6}
                                color='#E98818'
                            />
                        </Pressable>
                    )}
                    <VStack>
                        <Text
                            color='#E98818'
                            fontSize={20}
                            fontWeight='bold'
                        >
                            {props.headText1}
                        </Text>
                        <Text
                            color='#444444'
                            fontSize={15}
                            fontWeight='bold'
                        >
                            {props.headText2}
                        </Text>
                    </VStack>
                </HStack>
                <Box
                    justifyContent='center'
                >
                    <Pressable
                        onPress={() => navigation.navigate('Search')}
                    >
                        <Image 
                            source={require('../assets/cooking.png')}
                            width={36}
                            height={36}
                            resizeMode='contain'
                            alt="headerIMG"
                        />
                    </Pressable>
                </Box>
            </HStack>
        </Box>
    );
};

export default Header;