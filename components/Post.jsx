import styled from "styled-components";

const PostView = styled.View`
  margin-top: 22px;
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(200, 100, 110, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 18px;
  font-weight: 200;
  color: rgba(0,0,0,0.4)
  margin-top: 2px;
`;

const PostDetails = styled.View`
justify-content: center;
flex:1;
`;

const truncateTitle = (str) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + '...';
  }
  return str;
}

export const Post = ({ title, imageUrl, createdAt }) => {
  return <PostView>
    <PostImage
      source={{
        uri: imageUrl,
      }}
    />
    <PostDetails>
      <PostTitle>{truncateTitle(title)}</PostTitle>
      <PostDate>{new Date(createdAt).toLocaleDateString}</PostDate>
    </PostDetails>
  </PostView>
}