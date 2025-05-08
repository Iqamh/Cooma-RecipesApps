import React from "react";
import { Box, Avatar, Text, HStack, VStack } from "native-base";

const ProfileRight = (props) => {
    return(
        <Box
            height={60}
            width={275}
            bgColor='#D9D9D9'
            marginY={3}
            borderRadius={5}
            justifyContent='center'
            alignItems='flex-end'
            top={20}
            right={6}
        >
            <HStack
                marginRight={1}
            >
                <VStack
                    marginRight={1}
                >
                    <Text
                        fontSize={16}
                        fontWeight='normal'
                        textAlign='right'
                    >
                        {props.name}
                    </Text>
                    <Text
                        fontSize={13}
                        fontWeight='light'
                        textAlign='right'
                    >
                        {props.nim}
                    </Text>
                </VStack>
                <Avatar
                    bgColor={props.color}
                    source={{uri: props.uri}}
                >
                    {props.initial}
                </Avatar>
            </HStack>
        </Box>
    )
};

export default ProfileRight;