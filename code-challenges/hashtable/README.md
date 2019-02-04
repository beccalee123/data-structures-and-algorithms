# Hashtables
Implement a Hashtable

## Challenge
Implement a Hashtable with the following capabilities:
- a method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
- A method/function named Find that takes in the key and returns the value from key/value pair.
- A method/function named contains that takes in the key and returns if the key exists in the table already.
- A method/function named GetHash that takes in a key and returns the index in the array the key is stored.

## Approach & Efficiency
- I created the hashtable as an array of arrays so the items could be found quickly upon lookup
- The space/time is O(1) since a lookup can be done in a single pass 

## API
- `hash(key)` hashes the key before adding to the table
- `add(key, value)` hashes the key and adds the KVP to the hashtable at the hash-specified indicie
- `find(key)` takes in a key and returns a value from the kvp
- `contains(key)` returns a boolean representing whether or not a specified key can be found in the hashtable
- `getHash(key)` returns the indicie where the key is hashed