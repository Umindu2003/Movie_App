import { Text, View, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function Onboarding() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl text-blue-500 font-bold mb-4">Onboarding Screen</Text>
      <Text className="text-gray-600 text-center mb-8 px-4">
        Welcome to our Movie App! Discover trending movies and save your favorites.
      </Text>
      <Link href="/(tabs)" asChild>
        <TouchableOpacity className="bg-blue-500 px-6 py-3 rounded-lg">
          <Text className="text-white text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}