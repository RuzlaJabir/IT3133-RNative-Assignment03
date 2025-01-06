import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Courses from "./Courses";
import Profile from "./Profile";
import Subjects from "./Subjects";

const Home = ({ route }) => {
  const { student } = route.params; // Retrieve the student data passed from Login.js

  const [index, setIndex] = useState(0); // Manages the active tab index
  const [routes] = useState([
    {
      key: "profile",
      title: "Profile",
      focusedIcon: "account",
      unfocusedIcon: "account-outline",
    },
    {
      key: "courses",
      title: "Courses",
      focusedIcon: "school",
      unfocusedIcon: "school-outline",
    },
    {
      key: "subjects",
      title: "Subjects",
      focusedIcon: "book-open",
      unfocusedIcon: "book-open-outline",
    },
  ]);

  // Maps each tab to its corresponding component
  const renderScene = BottomNavigation.SceneMap({
    profile: () => <Profile student={student} />,
    courses: () => <Courses student={student} />,
    subjects: () => <Subjects student={student} />,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;