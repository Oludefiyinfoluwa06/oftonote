import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RichTextEditor, { RichTextToolbar } from 'react-native-zss-rich-text-editor';

import InputBox from '../../components/InputBox';
import { useState } from 'react';

const Add = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const richTextEditorRef = useRef(null);

    return (
        <SafeAreaView className='p-3'>
            <Text className='text-2xl font-bold mb-3'>Add a note</Text>

            <View>
                <InputBox placeholder='Enter a title' secureTextEntry={false} value={title} onChangeText={(text) => setTitle(text)} />

                <RichTextToolbar
                    editor={richTextEditorRef}
                    selectedIconTint="#2095F2"
                    iconTint="#000"
                    style={styles.richTextToolbar}
                />

                <RichTextEditor
                    initialContentHTML=''
                    ref={richTextEditorRef}
                    onChangeText={setContent}
                    style={styles.richTextEditor}
                    editorStyle={styles.editorStyle}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    richTextEditor: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
    },
    richTextToolbar: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    editorStyle: {
        backgroundColor: '#fff',
        padding: 8,
        fontSize: 16,
    },
});

export default Add;