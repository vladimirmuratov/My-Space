import {useStore} from "../store";
import {CardAnimal} from "../components/CardAnimal";

export const CatScreen = () => {
    const {cats, fetchCats, loading} = useStore(state => state)
    const url = cats[0].url

    const handlePress = () => fetchCats()

    return <CardAnimal url={url} loading={loading} onPress={handlePress}/>
}
