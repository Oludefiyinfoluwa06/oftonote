import { Stack } from 'expo-router'

const ScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name='home'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='add'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='[id]'
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='edit/[id]'
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

export default ScreenLayout;