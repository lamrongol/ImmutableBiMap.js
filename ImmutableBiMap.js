//duplicate values(not keys) will cause a problem
export default class ImmutableBiMap {
    constructor(pair_array) {
        this.normal_map = new Map();

        for(let i = 0; i < pair_array.length; i++) {
            this.normal_map.set(pair_array[i][0], pair_array[i][1]);
            this.normal_map.set(pair_array[i][1], pair_array[i][0]);
        }
    }

    get(key){
        return this.normal_map.get(key);
    }

    has(key){
        return this.normal_map.has(key);
    }

    size(){
        return this.normal_map.size;
    }
}
