import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='index' options={{
            headerShown: false
          }}
        />
      </Stack>
    </>
  );
}

