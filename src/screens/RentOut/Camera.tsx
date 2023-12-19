import React, { useState } from "react";
import { Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "../../components/Button";
import styled from "styled-components/native";

const MainContainer = styled.View`
  display: flex;
  align-items: center;
`;

const ImageEmptyContainer = styled.View`
  background-color: #e0e0e0;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export default function CameraComponent() {
  const [image, setImage] = useState("");

  const openCamera = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
        return;
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  return (
    <MainContainer>
      {image ? (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, borderRadius: 10 }}
        />
      ) : (
        <ImageEmptyContainer>
          <Text>No image provided</Text>
        </ImageEmptyContainer>
      )}
      <Button onPress={openCamera}>Take an image</Button>
    </MainContainer>
  );
}
