// type Dictionary = string | DictionaryObject;
// type DictionaryObject = { [K: string]: Dictionary };

// interface TypedTFunction<D extends Dictionary> {
//     <K extends keyof D>(args: K): D[K];
//     <K extends keyof D, K1 extends keyof D[K]>(...args: [K, K1]): D[K][K1];
//     <K extends keyof D, K1 extends keyof D[K], K2 extends keyof D[K][K1]>(
//         ...args: [K, K1, K2]
//     ): D[K][K1][K2];
//     // ... up to a reasonable key parameters length of your choice ...
// }