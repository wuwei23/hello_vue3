import { defineStore } from "pinia";
import axios from 'axios'
import {nanoid} from 'nanoid'

export const useLoveTalkStore = defineStore("loveTalk", {
    //存储数据的地方
    state: () => {
    return {
        talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  },
  actions: {
    async getNewLoveTalk(){
        let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //请求回来的字符串包装成对象
        let obj = {id:nanoid(),title:result.data.content}
        console.log(result.data.content)
        //对象放到数组中
        this.talkList.unshift(obj)
    }
  },
});