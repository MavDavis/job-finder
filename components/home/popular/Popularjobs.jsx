import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useFetch from "../../../hook/useFetch";
import styles from "./popularjobs.style";
import PopularJobsCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES } from "../../../constants";
const Popularjobs = () => {
  const { isLoading, error, data } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });
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
            data={data}
            renderItem={({ item }) => <PopularJobsCard item={item} />}
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
