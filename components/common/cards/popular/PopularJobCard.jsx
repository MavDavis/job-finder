import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

import { checkImageUrl } from "../../../../utils/index";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob }) => {
  const router = useRouter();

  const handleCardPress = (item) => router.push(`/job-details/${item.job_id}`);
  return (
    <TouchableOpacity
      onPress={() => {
        handleCardPress(item);
      }}
      style={styles.container(selectedJob, item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageUrl(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1W7diNGXJfMicpY9eXHKV4sqz05H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName}>{item?.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item?.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
