import axios from "axios";
import {
  FlatList,
  StatusBar,
  View,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { Post } from "../components/Post";
import React from "react";

export const HomeScreen = () => {
  const [items, setItems] = React.useState();
  const [isLoading, setIsLoading] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://64415ab8792fe886a8a566c3.mockapi.io/articles/1")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error to get an article");
      })
      .finally(() => {
        setIsLoading(false);
      });

  };

  React.useEffect(fetchPosts, []);

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
            <Post
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
      {/* {items ? (
        items.map((obj) => (
          <Post
            title={obj.title}
            imageUrl={obj.imageUrl}
            createdAt={obj.createdAt}
          />
        ))
      ) : (
        <Post
          title="123"
          imageUrl="{obj.imageUrl}"
          createdAt="{obj.createdAt}"
        />
      )} */}
      <StatusBar theme="auto" />
    </View>
  );
}
