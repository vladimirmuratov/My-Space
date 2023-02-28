import {useStore} from "../store";
import {CardAnimalPage} from "../components/CardAnimalPage";

export const DogScreen = () => {
    const {dogs, fetchDogs, loading} = useStore(state => state)
    const url = dogs[0].url

    const handlePress = () => fetchDogs()

    return <CardAnimalPage url={url} loading={loading} onPress={handlePress}/>
}
