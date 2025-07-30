# k-convert

## Install

```sh
npm i k-convert
```

## Usage

```sh
const kconvert = require("k-convert");
//or
import kconvert from 'k-convert';
```

And then, you are able to convert float numbers to the k-metric:

```javascript
kconvert.convertTo(420500);
//'420.5k'
```

Or convert strings using the k-metric to float numbers:

```javascript
kconvert.convertFrom("23.2k");
//23200
```
