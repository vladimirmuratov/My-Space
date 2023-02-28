import {useStore} from "../store";
import {CardAnimalPage} from "../components/CardAnimalPage";

export const CatScreen = () => {
    const {cats, fetchCats, loading} = useStore(state => state)
    const url = cats[0].url

    const handlePress = () => fetchCats()

    return <CardAnimalPage url={url} loading={loading} onPress={handlePress}/>
}
