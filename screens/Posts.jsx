import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import axios from 'axios';
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
border-radius: 10px;
padding: 20px;
width: 50%;
height: 50%;
margin-bottom; 20px;
`;

const PostText = styled.Text`
font-size: 18px;
line-height: 24px;
`;


export const PostsScreen = ({ route }) => {
  const [data, setData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);

  const { id, title } = route.params;

  React.useEffect(() => {
    Navigation.setOptions({
      title,
    })
    axios
      .get("https://64415ab8792fe886a8a566c3.mockapi.io/articles/" + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error to get an article");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <View style={{ flex: 1, padding: 70, justifyContent: 'center', alignItems: 'center' }}>
      <Loading />
    </View>
  }

  return <View >
    <PostImage source={{ uri: data.imageUrl }} />
    <PostText>{data.title}</PostText>
  </View>
}
