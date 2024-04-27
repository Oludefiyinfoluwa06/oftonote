import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';

import InputBox from '../../../components/InputBox';
import { Button } from '../../../components/Button';
import { useNoteContext } from '../../../contexts/NotesContext';

import { Ionicons } from '@expo/vector-icons';

const Edit = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const { id } = useLocalSearchParams();

    const { getNote, updateNote } = useNoteContext();

    useEffect(() => {
        setLoading(true);
        
        const getThisNote = async () => {
            try {
                const res = await getNote(id);
                setTitle(res.title);
                setContent(res.content);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        getThisNote();
    }, [id, getNote]);

    const handleUpdateNote = async () => {
        try {
            await updateNote(id, title, content);
            router.push(`/${id}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView className='p-3'>
            <View className='flex-row items-center justify-start gap-3 mb-3'>
                <Ionicons name='arrow-back' size={25} onPress={() => router.back()} />
                <Text className='text-2xl font-bold'>Edit note</Text>
            </View>

            <View>
                <InputBox 
                    placeholder='Enter a title' 
                    secureTextEntry={false} 
                    value={title} 
                    onChangeText={(text) => setTitle(text)} 
                    multiline={false}
                />

                <View className='my-3'>
                    <InputBox 
                        placeholder='Enter a content' 
                        secureTextEntry={false} 
                        value={content} 
                        onChangeText={(text) => setContent(text)} 
                        multiline={true}
                    />
                </View>

                <Button title={loading ? 'Loading' : 'Edit Note'} onPress={handleUpdateNote} />
            </View>
        </SafeAreaView>
    );
}

export default Edit;