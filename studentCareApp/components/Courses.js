import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-paper";
import { courses } from "../data/StudentsDb";

const Courses = ({ student }) => {
  const course = courses.find((c) => c.id === student.course_id); // Find the course corresponding to the student

  return (
    <View style={styles.view}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <Card style={{ margin: 20 }}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.h1}>{course.name}</Text>
          <Text style={{ textAlign: "center" }}>
            Code: {course.course_code} | Dept: {course.department}
          </Text>

          <View
            style={{
              marginBlock: 20,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

          <Text style={{ fontWeight: "bold", marginTop: 20 }}>
            Course Information
          </Text>
          <Text>Code: {course.course_code}</Text>
          <Text>Department: {course.department}</Text>
          <Text>Duration: {course.duration}</Text>
          <Text>Description: {course.description}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
    textAlign: "center",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
});