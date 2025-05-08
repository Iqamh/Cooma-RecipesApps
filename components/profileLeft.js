import React from "react";
import { Box, Avatar, Text, HStack, VStack } from "native-base";

const ProfileLeft = (props) => {
    return(
        <Box
            height={60}
            width={275}
            bgColor='#e6e6e6'
            marginLeft={6}
            marginY={3}
            borderRadius={5}
            justifyContent='center'
        >
            <HStack
                marginLeft={1}
            >
                <Avatar
                    bgColor={props.color}
                    source={{uri: props.uri}}
                >
                    {props.initial}
                </Avatar>
                <VStack
                    marginLeft={1}
                >
                    <Text
                        fontSize={16}
                        fontWeight='normal'
                    >
                        {props.name}
                    </Text>
                    <Text
                        fontSize={13}
                        fontWeight='light'
                    >
                        {props.nim}
                    </Text>
                </VStack>
            </HStack>
        </Box>
    )
};

export default ProfileLeft;