import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
    //存储数据的地方
    state: () => {
        return {
        sum: 1,
        n: 1,
        };
    },
  //里边放的都是动作函数
    actions: {
        //方法
        increment(value: number = 1) {
            if (typeof value !== 'number' || isNaN(value)) {
                console.error('Invalid input: value must be a number');
                return;
            }

            if (this.sum + value > 100) {
                console.warn('Sum would exceed 100, capping at 100');
                this.sum = 100;
            } else {
                this.sum += value;
            }
        },
        subtract(value: number = 1) {
            if (typeof value !== 'number' || isNaN(value)) {
                console.error('Invalid input: value must be a number');
                return;
            }

            if (this.sum - value < 0) {
                console.warn('Sum would be less than 0, setting to 0');
                this.sum = 0;
            } else {
                this.sum -= value;
            }
        },
    },

    getters: {
        //计算属性
        doubleCount: (state) => state.sum * 2,
    },
});