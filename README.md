# ImmutableBiMap.js
JavaScript immutable bidirectional map implementation. 

## How to use
```javascript
const pair_array = [
  ['a', 5], 
  ['e', 2],
  ['o', 6],
  ['x', 4]
];

const immutableBiMap = new ImmutableBiMap(pair_array);

immutableBiMap.get('a'); // => 5
immutableBiMap.get('e'); // => 2
immutableBiMap.get(6); // => 'o'
immutableBiMap.get(4); // => 'x'

immutableBiMap.get(2); // => 'e'

immutableBiMap.has(2); // => true
immutableBiMap.has('e'); // => true

immutableBiMap.has('z'); // => false

immutableBiMap.pair_count(); // => 4
```

caution: duplicate values are not allowed.