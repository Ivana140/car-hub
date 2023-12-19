import styled from "styled-components/native";
import { useState } from "react";
import colors from "../constants/Colors";
import { Text } from "react-native";

interface TextInputProps {
  children?: string;
  placeholder: string;
  onPress?: () => void;
  onPressIn?: () => void;
  value?: string;
  onChangeText?: (text: string) => void;
  editable?: boolean;
  numericInput?: boolean;
}

const MainContainer = styled.View``;

const TextContainer = styled.View`
  padding-left: 7px;
`;

const TextInputContainer = styled.View`
  border: 1px solid ${colors.gray_dar_color};
  border-radius: 10px;
`;

const Input = styled.TextInput`
  padding: 10px;
  font-size: 16px;
  color: ${colors.dark_blue_color};
`;

function InputComponent({
  children = "",
  placeholder,
  onPress,
  onPressIn,
  value,
  onChangeText,
  editable,
  numericInput,
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  const handlePressIn = () => {
    if (onPressIn) {
      onPressIn();
    }
  };

  return (
    <MainContainer>
      <TextContainer>
        <Text>{children}</Text>
      </TextContainer>

      <TextInputContainer
        style={{
          borderColor: isFocused
            ? colors.car_primary_color
            : colors.car_primary_color,
        }}
      >
        <Input
          keyboardType={numericInput ? "numeric" : "default"}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          onTouchStart={handlePress}
          onChangeText={onChangeText}
          editable={editable}
          onPressIn={handlePressIn}
        />
      </TextInputContainer>
    </MainContainer>
  );
}

export default InputComponent;
