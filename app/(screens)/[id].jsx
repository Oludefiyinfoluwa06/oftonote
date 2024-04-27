import { useEffect, useState } from 'react';

import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { useNoteContext } from '../../contexts/NotesContext';

const Note = () => {
    const [note, setNote] = useState({});
    const { id } = useLocalSearchParams();

    const { getNote, deleteNote } = useNoteContext();

    useEffect(() => {
        const getThisNote = async () => {
            try {
                const res = await getNote(id);
                setNote(res);
            } catch (error) {
                console.log(error);
            }
        }

        getThisNote();
    }, [id, getNote]);

    return (
        <SafeAreaView className='p-3'>
            <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center justify-start gap-4'>
                    <Ionicons name='arrow-back' size={20} onPress={() => {
                        router.push('/home');
                    }} />
                    <Text className='text-2xl font-bold'>{note.title}</Text>
                </View>
                <View className='flex-row items-center justify-end gap-4'>
                    <Ionicons name='pencil' size={20} onPress={() => {
                        router.push(`/edit/${id}`);
                    }} />
                    <Ionicons name='trash' size={20} onPress={() => {
                        deleteNote(id);
                        router.push('/home');
                    }} />
                </View>
            </View>

            <Text className='mt-2'>{note.content}</Text>
        </SafeAreaView>
    );
}

export default Note;