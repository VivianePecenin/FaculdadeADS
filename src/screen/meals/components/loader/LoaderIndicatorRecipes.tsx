import { ActivityIndicator } from "react-native"
import styles from "./Styled"

const LoaderIndicator = () => {
    return (
        <ActivityIndicator style={styles.loader}/>
    )
}

export default LoaderIndicator