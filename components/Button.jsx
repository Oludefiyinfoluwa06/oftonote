import { TouchableOpacity, Text } from 'react-native'

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            className='w-full p-3 bg-blue-700 rounded-[10px] mt-3'
            onPress={onPress}
        >
            <Text className='text-white text-center'>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;