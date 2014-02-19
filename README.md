# pretty-inspect

Easy object inspection.

## Why?

Because I was tired of copying this code around.

## Usage

Here's a full example of how to use `pretty-inspect`:

```js
var inspect = require('pretty-inspect'),
    ilog    = inspect.log;

var obj = {
    'this': 'is',
    very: 'handy',
    a: 1,
    b: 2,
    c: 3,
    d: 'This is a very long value',
    e: {
        f: {
            g: {
                h: {
                    key: 'not shown if you limit depth to lower than 4'
                }
            }
        }
    }
};

// inspect.log() writes to the console
ilog(obj);

// while inspect() only returns the string and you need to log it yourself
console.log(inspect(obj));

ilog(obj, 3);        // limit to object depth 3
ilog(obj, 10, true); // show object in multiline form
```

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
