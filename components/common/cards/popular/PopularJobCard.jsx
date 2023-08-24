import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageUrl } from "../../../../utils/index";
import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, handleCardPress, selectedJob }) => {
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
              : `https://picsum.photos/640/360`,
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
