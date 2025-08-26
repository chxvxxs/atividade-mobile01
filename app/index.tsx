import { Text, View } from "react-native";
import Profile from "./components/Profile";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile text1="Matheus Chaves" text2="Dev Back-End" url="https://media.licdn.com/dms/image/v2/D4D03AQF6tZZGWjjE4g/profile-displayphoto-scale_400_400/B4DZgU5Z.nGQAg-/0/1752697250248?e=1759363200&v=beta&t=nNE-ZphxvcOxP2-mGE5XvpnUUrgBvZJX_p3fROK0IuQ"/>
    </View>
  );
}
