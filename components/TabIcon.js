import React from "react";
import { Box, Icon } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';

const TabIcon = (props) => {
    return(
        <Box
            alignItems='center'
            justifyContent='center'
            height={80}
            width={50}
        >
            <Icon
                as={FontAwesome5}
                name={props.icon}
                size={8}
                color={props.focused ? '#E98818' : '#FACA93'}
            />

            {props.focused &&
                <Box 
                    position='absolute'
                    left={0}
                    right={0}
                    bottom={0}
                    height={130}
                    borderTopLeftRadius={5}
                    borderTopRightRadius={5}
                    backgroundColor='#E98818'
                />
            }
        </Box>
    );
};
export default TabIcon;