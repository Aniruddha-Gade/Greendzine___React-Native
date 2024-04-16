import { ActivityIndicator, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            disabled={isLoading}
        >
            <LinearGradient
                colors={['rgba(0, 255, 37, 0.5)', 'rgba(0, 0, 0, 1)', 'rgba(54, 165, 70, 0.5)']}
                style={styles.background}
                className={`bg-primar ani rounded-xl w-[238px] h-[42px] flex flex-row justify-center items-center border-2 border-[#8CFF0026] ${containerStyles} ${isLoading ? "opacity-50" : ""
            }`}
            >
                {/* background: transparent 
                linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%)
                 0% 0% no-repeat padding-box; */}
                <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
                    {title}
                </Text>

                {isLoading && (
                    <ActivityIndicator
                        animating={isLoading}
                        color="#fff"
                        size="small"
                        className="ml-2"
                    />
                )}
            </LinearGradient>

        </TouchableOpacity>
    );
};

export default CustomButton;


const styles = StyleSheet.create({
    background: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'transparent',
    },
});