import React from "react";
import { Box, Text, Image, Pressable } from "native-base";

const CategoryCard = (props) => {
    return(
        <Box
            marginX={15}
            marginTop={15}
            borderRadius={10}
            bgColor='#FFFFFF'
            shadow='1'
        >
            <Pressable
                onPress={props.onPress}
            >
                <Image 
                    source={props.categoryItem}
                    alt='categoryIMG'
                    height={125}
                    width='100%'
                    resizeMode='cover'
                    borderTopRadius={10}
                />
                <Box
                    height={50}
                    justifyContent='center'
                >
                    <Text
                    fontWeight='bold'
                    fontSize={18}
                    marginX={15}
                    letterSpacing='2xl'
                    >
                        {props.categoryTitle}
                    </Text>
                </Box>
            </Pressable>
        </Box>
    )
}
export default CategoryCard;