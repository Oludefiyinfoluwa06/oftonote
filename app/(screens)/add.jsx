import { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import InputBox from '../../components/InputBox';
import { Button } from '../../components/Button';

const Add = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddNote = async () => {

    }

    return (
        <SafeAreaView className='p-3'>
            <Text className='text-2xl font-bold mb-3'>Add a note</Text>

            <View>
                <InputBox 
                    placeholder='Enter a title' 
                    secureTextEntry={false} 
                    value={title} 
                    onChangeText={(text) => setTitle(text)} 
                    multiline={false}
                />

                <View className='mt-3'>
                    <InputBox 
                        placeholder='Enter a content' 
                        secureTextEntry={false} 
                        value={content} 
                        onChangeText={(text) => setContent(text)} 
                        multiline={true}
                    />
                </View>

                <Button title='Add Note' onPress={handleAddNote} />
            </View>
        </SafeAreaView>
    );
}

export default Add;