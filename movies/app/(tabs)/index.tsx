import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center"
    >
      <Text className="text-5xl text-accent font-bold">Is it working?.</Text>
      <Link
      href="/onboarding">onboarding</Link>
      <Link href="/movie/avengers">Avengers Movie</Link>
    </View>
  );
}
