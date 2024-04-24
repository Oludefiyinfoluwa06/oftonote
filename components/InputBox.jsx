import { TextInput } from 'react-native';

const InputBox = ({ placeholder, secureTextEntry, value, onChangeText, multiline }) => {
    return (
        <TextInput
            placeholder={placeholder}
            className='w-full p-[8px] px-4 rounded-[10px] border border-slate-200'
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
            multiline={multiline}
        />
    );
}

export default InputBox;