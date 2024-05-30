//Using Deno
import { assertEquals } from "https://deno.land/std@0.185.0/testing/asserts.ts";
import ImmutableBiMap from './ImmutableBiMap.js';

const pair_array = [
  ['a', 5], 
  ['e', 2],
  ['o', 6],
  ['x', 4]
];
const immutableBiMap = new ImmutableBiMap(pair_array);

Deno.test('size()', () => {
  assertEquals(immutableBiMap.size(), 8);
});

Deno.test('get()', () => {
  assertEquals(immutableBiMap.get('a'), 5);
  assertEquals(immutableBiMap.get('e'), 2);
  assertEquals(immutableBiMap.get('o'), 6);
  assertEquals(immutableBiMap.get('x'), 4);
  assertEquals(immutableBiMap.get(5), 'a');
  assertEquals(immutableBiMap.get(2), 'e');
  assertEquals(immutableBiMap.get(6), 'o');
  assertEquals(immutableBiMap.get(4), 'x');
});

Deno.test('has()', () => {
  assertEquals(immutableBiMap.has('a'), true);
  assertEquals(immutableBiMap.has('e'), true);
  assertEquals(immutableBiMap.has(6), true);
  assertEquals(immutableBiMap.has('w'), false);
  assertEquals(immutableBiMap.has('c'), false);
  assertEquals(immutableBiMap.has(9), false);
});

