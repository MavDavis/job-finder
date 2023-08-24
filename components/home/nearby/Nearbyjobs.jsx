import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import useFetch from "../../../hook/useFetch";
import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { COLORS, SIZES } from "../../../constants";
const Nearbyjobs = () => {
  const { isLoading, error, data } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
          data.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
