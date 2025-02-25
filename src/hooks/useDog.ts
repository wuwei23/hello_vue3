import { reactive } from 'vue'
import axios from 'axios'

export default function useDog() {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4128.jpg'
    ])
    
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }
    return {dogList, getDog}
}
