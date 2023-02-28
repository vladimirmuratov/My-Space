import {useStore} from "../store";
import {CardAnimal} from "../components/CardAnimal";

export const DogScreen = () => {
    const {dogs, fetchDogs, loading} = useStore(state => state)
    const url = dogs[0].url

    const handlePress = () => fetchDogs()

    return <CardAnimal url={url} loading={loading} onPress={handlePress}/>
}
