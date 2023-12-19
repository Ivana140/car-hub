import React from "react";
import styled from "styled-components/native";
import colors from "../constants/Colors";
import { Text, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${colors.car_primary_color};
  border-radius: 10px;
  padding: 15px 40px;
  margin: 10px 0;
`;

const ButtonText = styled.Text`
  color: white;
  width: 100%;
  text-align: center;
`;

function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
}

export default Button;
