import React, { Component } from "react";
import { Box, Text, Pressable, Icon, Center } from "native-base";
import { FontAwesome5 } from '@expo/vector-icons';
import { ProfileLeft, ProfileRight } from "../components";

class Profile extends Component{
    headButton = () =>{
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
                justifyContent='flex-start'
                marginLeft={5}
                paddingBottom={8}
            >
                <Pressable
                    alignItems='center'
                    justifyContent='center'
                    onPress={() => navigation.goBack()}
                >
                    <Icon
                        as={FontAwesome5}
                        name='chevron-left'
                        size={4}
                        color='#FFFFFF'
                    />
                </Pressable>
            </Box>
        )
    }

    render(){
        return(
            <Box
                flex={1}
                bgColor='#FFFFFF'
            >
                <Box
                    left={0}
                    top={0}
                    bgColor='#E98818'
                    height={400}
                    width={245}
                    paddingTop={12}
                >
                    {this.headButton()}
                    <Text
                        fontWeight='bold'
                        fontSize={24}
                        color='#FFFFFF'
                        marginLeft={10}
                        marginBottom={8}
                    >
                        Our Teams
                    </Text>
                    <ProfileLeft 
                        color='indigo.200'
                        uri={'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTc5OTQ2MzAyODc0NzQ5/chris-hemsworth-leaving-acting-2019-ftr.jpg'}
                        initial='IQ'
                        name='Iqbal Abd. Muhbir Hadi Anam'
                        nim='1204200117'
                    />
                    <ProfileLeft 
                        color='lightBlue.300'
                        uri={'https://phantom-marca.unidadeditorial.es/2d2ef26a888c2b1583e6e7ebf2e61b90/resize/1320/f/jpg/assets/multimedia/imagenes/2022/10/16/16659422008903.jpg'}
                        initial='AD'
                        name='Adelia Desi Agnesita'
                        nim='1204202045'
                    />
                </Box>
                <Box
                    position='absolute'
                    right={0}
                    bottom={0}
                    height={400}
                    width={275}
                    bgColor='#d12f06'
                >
                    <ProfileRight 
                        color='green.200'
                        uri={'https://static.wikia.nocookie.net/p__/images/3/35/X-Men_Apocalypse_Cyclops_Image_2_.jpg/revision/latest?cb=20171204080240&path-prefix=protagonist'}
                        initial='RI'
                        name='Rifky Cahya Putra'
                        nim='1204200058'
                    />
                    <ProfileRight 
                        color='amber.200'
                        uri={'https://ichef.bbci.co.uk/news/976/cpsprodpb/64BC/production/_118488752_gadotreuters.jpg'}
                        initial='WI'
                        name='Winda Ratu Septiani'
                        nim='1204200141'
                    />
                    <ProfileRight 
                        color='red.200'
                        uri={'https://www.cheatsheet.com/wp-content/uploads/2021/09/Jacob-Batalon.jpg'}
                        initial='AF'
                        name='Adam Fakhri Hisyam'
                        nim='1204200003'
                    />
                </Box>
            </Box>
        )
    }
}

export default Profile;