import React, { useState } from "react";
import { View } from "react-native";
import CameraComponent from "./Camera";
import styled from "styled-components/native";
import InputComponent from "../../components/Input";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";
import Button from "../../components/Button";

const MainContainer = styled.View`
  display: flex;
  padding: 20px;
`;

const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function RentOut() {
  const [name, setName] = useState("");
  const [carClass, setCarClass] = useState("");
  const [cmpg, setCmpg] = useState("");
  const [transmission, setTransmission] = useState("");
  const [fuelType, SetFuelType] = useState("");
  const [cylinders, SetCylinders] = useState("");

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("class", carClass);
    formData.append("cmpg", cmpg);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload-cars",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Car uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading car:", error);
    }
  };

  return (
    <MainContainer>
      <ScrollView>
        <InputContainer>
          <CameraComponent />
          <InputComponent
            placeholder="Enter car model..."
            value={name}
            onChangeText={setName}
          >
            Car model
          </InputComponent>
          <InputComponent
            placeholder="Enter class..."
            value={carClass}
            onChangeText={setCarClass}
          >
            Class
          </InputComponent>
          <InputComponent
            placeholder="enter Combination mpg..."
            value={cmpg}
            onChangeText={setCmpg}
          >
            Combination mpg
          </InputComponent>
          <InputComponent
            placeholder="Enter fuel type..."
            value={fuelType}
            onChangeText={SetFuelType}
          >
            Fuel type
          </InputComponent>
          <InputComponent
            placeholder="Enter transmission..."
            value={transmission}
            onChangeText={setTransmission}
          >
            Transmission
          </InputComponent>
          <InputComponent
            placeholder="Enter Cylinders..."
            value={cylinders}
            onChangeText={SetCylinders}
          >
            Cylinders
          </InputComponent>
        </InputContainer>
        <Button onPress={handleSubmit}>Submit</Button>
      </ScrollView>
    </MainContainer>
  );
}

export default RentOut;
