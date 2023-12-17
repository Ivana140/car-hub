import { View, ViewStyle } from "react-native";
import styles from "./CarDetails.style";

type ColorProps = {
    selected: boolean,
    style: ViewStyle
}
const ColorComponent = ({selected, style}: ColorProps) => {
    return(
        <View style={[styles.circle, selected && styles.border, style]}/>
    );
}

export default ColorComponent;