import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
// import  {icons} from "../../constants";

// logo
import home from '.././../assets/logo/home.png'
import profile from '.././../assets/logo/profile.png'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text
                className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
                style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    );
};


const TabLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#36A546",
                    tabBarInactiveTintColor: "#CDCDE0",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#161622",
                        borderTopWidth: 1,
                        borderTopColor: "#232533",
                        height: 63,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        width: '100%'
                    },
                }}
            >
                <Tabs.Screen
                    name='dashboard'
                    options={{
                        title: 'Dashboard',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={home}
                                color={color}
                                name="Dashboard"
                                focused={focused}
                            />
                        ),
                    }}

                />

                <Tabs.Screen
                    name='employeeListView'
                    options={{
                        title: 'Employe List',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={profile}
                                color={color}
                                name="Employe List"
                                focused={focused}
                            />
                        ),
                    }}

                />
            </Tabs>
        </>
    )
}

export default TabLayout