import { ImageSourcePropType } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
import colors from "../constants/Colors"

export type Car = {  
 _id: number
 model: String
 price: String
 image: ImageSourcePropType
 featuresCard:String
 cylinders: number
 drive:String
 fuel_type:String
 city_mpg:number
 imageData: Buffer  
}



// export const cars: Car[] = [
//       {
//             id: 1,
//             type: "BMW M3",
//             price: "$52/Day",
//             image: require('../assets/Cars/blue_car.png'),
//             featuresCard:"Manual        AWD             12MPG",
//             cylinders:3,
//             drive:"AWD",
//             fuelType:"Gas",
//             mpg:30
//             //features: "Android AutoAntilock BrakesApple CarPlayAudio Controls On Steering WheelAuxiliary InputBackup CameraBlind Spot MonitorBluetoothBrake AssistChild Safety LocksCooled Driver SeatDual Climate ControlHD RadioHeated Steering",

//         },
//             {
//             id: 2,
//             type: "Mercedes-AMG",
//             price: "$56/Day",
//             image: require('../assets/Cars/grey_car.png'),
//             featuresCard:"Automatic         AWD            13MPG",
//             cylinders:4,
//             drive:"AWD",
//             fuelType:"Diesel",
//             mpg:32
//             //features: "Android AutoAntilock BrakesApple CarPlayAudio Controls On Steering WheelAuxiliary InputBackup CameraBlind Spot MonitorBluetoothBrake AssistChild Safety LocksCooled Driver SeatDual Climate ControlHD RadioHeated Steering",

//         },
//             {
//             id: 3,
//             type: "Mercedes-AMG",
//             price: "$57/Day",
//             image: require('../assets/Cars/yellow_car.png'),
//             featuresCard:"Automatic        AWD             14MPG",
//             cylinders:4,
//             drive:"AWD",
//             fuelType:"Diesel",
//             mpg:32
//             //features: "Android AutoAntilock BrakesApple CarPlayAudio Controls On Steering WheelAuxiliary InputBackup CameraBlind Spot MonitorBluetoothBrake AssistChild Safety LocksCooled Driver SeatDual Climate ControlHD RadioHeated Steering",

//         }
//     ]
