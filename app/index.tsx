import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-5xl text-blue-500 font-bold">Welcome!</Text>
      <Link href="/onboarding" asChild>
        <TouchableOpacity className="mt-4">
          <Text className="text-blue-500 text-lg">Go to Onboarding</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}