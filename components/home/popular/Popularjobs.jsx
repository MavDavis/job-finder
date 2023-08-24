import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import PopularJobsCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES } from "../../../constants";
const Popularjobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator color={COLORS.primary} size="large" />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({ item }) => <PopularJobsCard item />}
            keyExtractor={(item) => item?.job_id}
            horizontal
            contentContainerStyle={{ columnGap: SIZES.medium }}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
