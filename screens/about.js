import React, { Component } from 'react';
import { Box, Text, Image, Pressable } from 'native-base';

class About extends Component{
    render(){
        const { navigation } = this.props;
        return (
            <Box
                flex={1}
                bgColor='#FFFFFF'
            >
                <Box
                    top={0}
                    left={0}
                    right={0}
                    height={250}
                    bgColor='#E98818'
                    alignItems='center'
                >
                    <Text
                        fontWeight='bold'
                        fontSize={24}
                        color='#FFFFFF'
                        marginY={7}
                    >
                        About Us
                    </Text>
                    <Box
                        height={260}
                        width={270}
                        bgColor='#F5F5F5'
                        borderRadius={10}
                        shadow='4'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Box>
                            <Text
                                marginBottom={7}
                                textAlign='center'
                                fontSize={20}
                                fontWeight='semibold'
                            >
                                COOMA
                            </Text>
                            <Text
                                fontSize={12}
                                textAlign='center'
                                marginX={5}
                            >
                                COOMA menyediakan berbagai resep masakan yang beragam jenis, mulai 
                                dari makanan ringan hingga makanan berat. Aplikasi ini memudahkan 
                                pengguna yang bingung untuk memasak makanan.
                            </Text>
                            <Text
                                marginTop={6}
                                textAlign='center'
                                fontWeight='extrabold'
                                fontSize={11}
                            >
                                API SUPPORTED BY: SPOONACULAR 
                            </Text>
                            <Text
                                marginTop={6}
                                textAlign='center'
                                fontWeight='extrabold'
                                fontSize={11}
                            >
                                v1.0.1
                            </Text>
                        </Box>
                    </Box> 
                    <Box
                        backgroundColor='#F5F5F5'
                        height={230}
                        width={270}
                        borderRadius={10}
                        marginTop={5}
                        shadow='4'
                    >
                        <Image 
                            source={require('../assets/team.png')}
                            resizeMode='cover'
                            width={270}
                            height={130}
                            borderRadius={10}
                            alt='teamIMG'
                        />
                        <Box
                            alignItems='center'
                            justifyContent='center'
                        >
                            <Text
                                textAlign='center'
                                fontSize={15}
                                fontWeight='semibold'
                                marginTop={2}
                                marginBottom={5}
                            >
                                Development Teams Profile
                            </Text>
                            <Pressable
                                bgColor='#D9D9D9'
                                width={190}
                                height={30}
                                borderRadius={30}
                                onPress={() => navigation.navigate('Profile')}
                            >
                                <Text
                                    textAlign='center'
                                    fontSize={15}
                                    fontWeight='semibold'
                                >
                                    See
                                </Text>
                            </Pressable>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default About;