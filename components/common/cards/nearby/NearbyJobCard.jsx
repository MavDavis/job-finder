import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageUrl } from "../../../../utils/index";
import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageUrl(job?.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1W7diNGXJfMicpY9eXHKV4sqz05H.jpg",
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job?.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
