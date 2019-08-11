export default {
    "title":"Flix Standard Library",
    "namespaces":{
        "Result":{
            "namespace":"Result",
            "defs":[{
                "name":"forall",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"r",
                    "type":"Result[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if `r` is `Ok(v)` and the predicate `f(v)` evaluates to `true` or if `r` is `Err(w)`.\n Otherwise returns `false`."
            },{
                "name":"replace",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"y",
                    "type":"a"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"a",
                "comment":"Returns `Ok(y)` if `r` is `Ok(x)`. Otherwise returns `r`."
            },{
                "name":"count",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"r",
                    "type":"Result[a, b]"
                }],
                "result":"Int32",
                "comment":"Returns `1` if `r` is `Ok(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `0`."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                },{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"z",
                    "type":"a"
                },{
                    "name":"r",
                    "type":"Result[a, b]"
                }],
                "result":"a",
                "comment":"Returns `f(z, v)` if `r` is `Ok(v)`. Otherwise returns `z`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b"
                },{
                    "name":"r",
                    "type":"Result[a, b]"
                }],
                "result":"a",
                "comment":"Returns `Ok(f(v))` if `r` is `Ok(v)`. Returns `Err(w)` if `r` is `Err(w)`."
            },{
                "name":"toOption",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"a",
                "comment":"Returns `Some(v)` if `r` is `Ok(v)`. Otherwise returns `None`."
            },{
                "name":"eq",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"r1",
                    "type":"Result[a, b]"
                },{
                    "name":"r2",
                    "type":"Result[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `r1` and `r2` and equal."
            },{
                "name":"getWithDefault",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[a, b]"
                },{
                    "name":"d",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns `v` if `r` is `Ok(v)`. Otherwise returns `d`."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"a",
                "comment":"Returns a one-element list of the value `v` if `r` is `Ok(v)`. Otherwise returns the empty list."
            },{
                "name":"toMap",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[(b, c), a]"
                }],
                "result":"a",
                "comment":"Returns a singleton map with the mapping `k -> v` if `o` is `Ok((k, v))`. Otherwise returns the empty map."
            },{
                "name":"find",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"a",
                "comment":"Returns `Some(v)` if `r` is `Ok(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `None`."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"a",
                "comment":"Returns a one-element set of the value `v` if `r` is `Ok(v)`. Otherwise returns the empty set."
            },{
                "name":"isOk",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` iff `r` is `Ok(v)`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                },{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b"
                },{
                    "name":"r",
                    "type":"Result[a, b]"
                },{
                    "name":"z",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns `f(v, z)` if `r` is `Ok(v)`. Otherwise returns `z`."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Result[b, c]"
                },{
                    "name":"r",
                    "type":"Result[a, b]"
                }],
                "result":"a",
                "comment":"Returns `f(v)` if `r` is `Ok(v)`. Returns `Err(w)` if `r` is `Err(w)`."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"r",
                    "type":"Result[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if `r` is `Ok(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `false`."
            },{
                "name":"withDefault",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e1"
                },{
                    "name":"e2"
                }],
                "fparams":[{
                    "name":"r1",
                    "type":"Result[b, a]"
                },{
                    "name":"r2",
                    "type":"Result[b, a]"
                }],
                "result":"a",
                "comment":"Returns `Ok(v)` if `r1` is `Ok(v)`. Otherwise returns `r2`."
            },{
                "name":"isErr",
                "tparams":[{
                    "name":"t"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` iff `r` is `Err(w)`."
            }]
        },
        "BufferedWriter":{
            "namespace":"BufferedWriter",
            "defs":[{
                "name":"new",
                "tparams":[],
                "fparams":[{
                    "name":"p",
                    "type":"Path"
                }],
                "result":"BufferedWriter",
                "comment":"Returns a new BufferedReader from the given Path `p`\n TODO: Consider choosing charsets and opening modes\n TODO: Currently this is opened for 'w' and truncates."
            }]
        },
        "Map":{
            "namespace":"Map",
            "defs":[{
                "name":"toList",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the map `m` as a list of key-value pairs."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Applies `f` to a start value `s` and all values in `m` going from right to left.\n That is, the result is of the form: `f(v1, ...f(vn-1, f(vn, s)))`."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Bool"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if at least one mapping in `m` satisfies the predicate `f`.\n Returns `false` if `m` is the empty map."
            },{
                "name":"insertWith",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"v",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Updates `m` with `k -> f(v, v1)` if `k -> v1` is in `m`.\n Otherwise, updates `m` with `k -> v`."
            },{
                "name":"reduceLeftWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b)"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Applies `f` to all mappings in `m` going from left to right until a single mapping `(k, v)` is obtained.  Returns `Some((k, v))`.\n That is, the result is of the form: `Some(f(...f(f(k1, v1, k2, v2), k3, v3)..., kn, vn))`\n Returns `None` if `m` is the empty map."
            },{
                "name":"intersectionWith",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the intersection of `m1` and `m2` where key collisions are resolved with the merge function `f`."
            },{
                "name":"reduceRightWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b)"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Applies `f` to all mappings in `m` going from right to left until a single mapping `(k, v)` is obtained.  Returns `Some((k, v))`.\n That is, the result is of the form: `Some(f(k1, v1, ...f(kn-2, vn-2, f(kn-1, vn-1, kn, vn))...))`\n Returns `None` if `m` is the empty map."
            },{
                "name":"filter",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns a map of all mappings `k -> v` in `m` where `v` satisfies the predicate `f`."
            },{
                "name":"getWithDefault",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"d",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns `v` if `k -> v` is in `m`.\n Otherwise, returns `d`."
            },{
                "name":"differenceWith",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> Option[a]"
                },{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the difference of `m1` and `m2`, i.e. `m1 - m2`.\n When a key `k` is in both `m1` and `m2`, the associated values are passed to the merge function `f`.\n If `f` returns `None` the mapping with `k` is thrown away (proper set difference).\n If `f` returns `Some(v)` the mapping `k -> v` is included in the result."
            },{
                "name":"isEmpty",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `m` is the empty map, i.e. `Map(Nil)`."
            },{
                "name":"findLeft",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Bool"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Optionally returns the first mapping of `m` that satisfies the predicate `f` when searching from left to right."
            },{
                "name":"isProperSubmapOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if all mappings in `m1` occur in `m2` and `m1 != m2`."
            },{
                "name":"find",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Bool"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Alias for `findLeft`."
            },{
                "name":"update",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Option[a]"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Updates `m` with `k -> v1` if `k -> v` is in `m` and `f(v) = Some(v1).\n Otherwise, returns `m`."
            },{
                "name":"count",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Bool"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Int32",
                "comment":"Returns the number of mappings in `m` that satisfy the predicate `f`."
            },{
                "name":"foldWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> c -> b -> c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Alias for `foldLeftWithKey`."
            },{
                "name":"insert",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"v",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Updates `m` with `k -> v`."
            },{
                "name":"findRight",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Bool"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Optionally returns the first mapping of `m` that satisfies the predicate `f` when searching from right to left."
            },{
                "name":"mapWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v1"
                },{
                    "name":"v2"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> c"
                },{
                    "name":"m",
                    "type":"Map[b, a]"
                }],
                "result":"a",
                "comment":"Returns a map with mappings `k -> f(k, v)` for every `k -> v` in `m`."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Alias for `reduceLeft`."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Applies `f` to all values in `m` going from left to right until a single value `v` is obtained.  Returns `Some(v)`.\n That is, the result is of the form: `Some(f(...f(f(v1, v2), v3)..., vn))`\n Returns `None` if `m` is the empty map."
            },{
                "name":"foldRightWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> c -> a -> a"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Applies `f` to a start value `s` and all key-value pairs in `m` going from right to left.\n That is, the result is of the form: `f(k1, v1, ...f(kn-1, vn-1, f(kn, vn, s)))`."
            },{
                "name":"memberOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `m` contains the key `k`."
            },{
                "name":"get",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns `Some(v)` if `k -> v` is in `m`.\n Otherwise returns `None`."
            },{
                "name":"forall",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Bool"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if all mappings in `m` satisfy the predicate `f`.\n Returns `true` if `m` is the empty map."
            },{
                "name":"intersection",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the left-biased intersection of `m1` and `m2`.\n That is, key collisions are resolved by taking the mapping from `m1`."
            },{
                "name":"adjustWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Updates `m` with `k -> f(k, v)` if `k -> v` is in `m`.\n Otherwise, returns `m`."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Applies `f` to a start value `s` and all values in `m` going from left to right.\n That is, the result is of the form: `f(...f(f(s, v1), v2)..., vn)`."
            },{
                "name":"filterWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Bool"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns a map of all mappings `k -> v` in `m` where `(k, v)` satisfies the predicate `f`."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Alias for `foldLeft`."
            },{
                "name":"differenceWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b -> Option[b]"
                },{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the difference of `m1` and `m2`, i.e. `m1 - m2`.\n When a key `k` is in both `m1` and `m2`, `k` and the associated values are passed to the merge function `f`.\n If `f` returns `None` the mapping with `k` is thrown away (proper set difference).\n If `f` returns `Some(v)` the mapping `k -> v` is included in the result."
            },{
                "name":"insertWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b -> b"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"v",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Updates `m` with `k -> f(k, v, v1)` if `k -> v1` is in `m`.\n Otherwise, updates `m` with `k -> v`."
            },{
                "name":"difference",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the difference of `m1` and `m2`, i.e. `m1 - m2`.\n That is, returns the map `m1` with the keys removed that are in `m2`."
            },{
                "name":"valuesOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the values of `m`."
            },{
                "name":"union",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the left-biased union of `m1` and `m2`.\n That is, key collisions are resolved by taking the mapping from `m1`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v1"
                },{
                    "name":"v2"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns a map with mappings `k -> f(v)` for every `k -> v` in `m`."
            },{
                "name":"singleton",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"v",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns the singleton map where key `k` is mapped to value `v`.\n `@{k -> v}` is syntactic sugar for `singleton` (`@{k -> v} = singleton(k, v)`)."
            },{
                "name":"foldLeftWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> c -> a"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Applies `f` to a start value `s` and all key-value pairs in `m` going from left to right.\n That is, the result is of the form: `f(...f(k2, f(k1, s, v1), v2)..., vn)`."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the map `m` as a set of key-value pairs."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Applies `f` to all values in `m` going from right to left until a single value `v` is obtained.  Returns `Some(v)`.\n That is, the result is of the form: `Some(f(v1, ...f(vn-2, f(vn-1, vn))...))`\n Returns `None` if `m` is the empty map."
            },{
                "name":"reduceWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b)"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Alias for `reduceLeftWithKey`."
            },{
                "name":"unionWith",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the union of `m1` and `m2` where key collisions are resolved with the merge function `f`."
            },{
                "name":"size",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Int32",
                "comment":"Returns the size of `m`."
            },{
                "name":"eq",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `m1` and `m2` and equal, i.e. they have the same mappings."
            },{
                "name":"keysOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the keys of `m`."
            },{
                "name":"empty",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[],
                "result":"a",
                "comment":"Returns the empty map.\n `@{}` is syntactic sugar for `empty` (`@{} = empty()`)."
            },{
                "name":"replace",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"(a, b)"
                },{
                    "name":"y",
                    "type":"(a, b)"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Replaces the mapping `fst(x) -> snd(x)` with `fst(y) -> snd(y)` if `fst(x) -> snd(x)` is in `m`.\n Otherwise, returns `m`.\n Note: The returned map may be smaller than `m`."
            },{
                "name":"unionWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b -> b"
                },{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the union of `m1` and `m2` where key collisions are resolved with the merge function `f`, taking both the key and values."
            },{
                "name":"isSubmapOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if all mappings in `m1` occur in `m2`."
            },{
                "name":"delete",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":""
            },{
                "name":"adjust",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Updates `m` with `k -> f(v)` if `k -> v` is in `m`.\n Otherwise, returns `m`."
            },{
                "name":"updateWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Option[b]"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Updates `m` with `k -> v1` if `k -> v` is in `m` and `f(k, v) = Some(v1).\n Otherwise, returns `m`."
            },{
                "name":"intersectionWithKey",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b -> b"
                },{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"a",
                "comment":"Returns the intersection of `m1` and `m2` where key collisions are resolved with the merge function `f`, taking both the key and values."
            }]
        },
        "List":{
            "namespace":"List",
            "defs":[{
                "name":"dropWhile",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `xs` without the longest prefix that satisfies the predicate `f`."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Applies `f` to all elements in `xs` going from right to left until a single value `v` is obtained.  Returns `Some(v)`.\n That is, the result is of the form: `Some(f(x1, ...f(xn-2, f(xn-1, xn))...))`\n Returns `None` if `xs` is empty."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from left to right.\n That is, the result is of the form: `f(...f(f(s, x1), x2)..., xn)`."
            },{
                "name":"mapWithIndex",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Int32 -> b"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the result of applying `f` to every element in `xs` along with that element's index.\n That is, the result is of the form: `f(x1, 0) :: f(x2, 1) :: ...`."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Applies `f` to all elements in `xs` going from left to right until a single value `v` is obtained.  Returns `Some(v)`.\n That is, the result is of the form: `Some(f(...f(f(x1, x2), x3)..., xn))`\n Returns `None` if `xs` is empty."
            },{
                "name":"intersperse",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `xs` with `a` inserted between every two adjacent elements."
            },{
                "name":"findRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from right to left."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the list `xs` as a set."
            },{
                "name":"isInfixOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `xs` is an infix of `ys`."
            },{
                "name":"repeat",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"a"
                },{
                    "name":"n",
                    "type":"Int32"
                }],
                "result":"a",
                "comment":"Returns a list with the element `a` repeated `n` times.\n Returns `Nil` if `n < 0`."
            },{
                "name":"rotateLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `xs` with its elements rotated `n` positions to the left.\n That is, returns a new list where the first `n mod length(xs)` elements in `xs`\n are the last `n mod length(xs)` elements of the new list."
            },{
                "name":"isSuffixOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `xs` is a suffix of `ys`."
            },{
                "name":"foldLeft2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c"
                },{
                    "name":"c",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Accumulates the result of applying `f` pairwise to the elements of `xs` and `ys`\n starting with the initial value `c` and going from left to right."
            },{
                "name":"flatten",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[List[a]]"
                }],
                "result":"a",
                "comment":"Returns the concatenation of the elements in `xs`."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Alias for `foldLeft`."
            },{
                "name":"slice",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"b",
                    "type":"Int32"
                },{
                    "name":"e",
                    "type":"Int32"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the sublist of `xs` from index `b` (inclusive) to index `e` (exclusive).\n That is, an element at index `i` in `xs` is part of the returned sublist if and only if `i >= b` and `i < e`.\n Note: Indices that are out of bounds in `xs` are not considered (i.e. slice(b, e, xs) = slice(max(0,b), min(length(xs),e), xs))."
            },{
                "name":"foldRight2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c -> c"
                },{
                    "name":"c",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Accumulates the result of applying `f` pairwise to the elements of `xs` and `ys`\n starting with the initial value `c` and going from right to left."
            },{
                "name":"intercalate",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[List[a]]"
                }],
                "result":"a",
                "comment":"Returns the concatenation of the elements in `ys` with the elements of `xs` inserted between every two adjacent elements.\n That is, returns y1 :: x1 ... xn :: y2 :: ... yn-1 :: x1 :: ... :: xn :: yn :: Nil."
            },{
                "name":"transpose",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[List[a]]"
                }],
                "result":"a",
                "comment":"Returns the transpose of `xs`.\n Returns `xs` if the dimensions of the elements of `xs` are mismatched."
            },{
                "name":"unzip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[(a, b)]"
                }],
                "result":"a",
                "comment":"Returns a pair of lists, the first containing all first components in `xs`\n and the second containing all second components in `xs`."
            },{
                "name":"zipWith",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns a list where the element at index `i` is `f(a, b)` where\n `a` is the element at index `i` in `xs` and `b` is the element at index `i` in `ys`.\n If either `xs` or `ys` becomes depleted, then no further elements are added to the resulting list."
            },{
                "name":"scan",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Alias for `scanLeft`."
            },{
                "name":"findMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Option[b]"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the first non-None result of applying the partial function `f` to each element of `xs`.\n Returns `None` if every element of `xs` is `None`."
            },{
                "name":"range",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Int32"
                },{
                    "name":"e",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns a list of all integers between `b` (inclusive) and `e` (exclusive).\n Returns `Nil` if `b >= e`."
            },{
                "name":"rotateRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `xs` with its elements rotated `n` positions to the right.\n That is, returns a new list where the last `n mod length(xs)` elements in `xs`\n are the first `n mod length(xs)` elements of the new list."
            },{
                "name":"head",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `Some(x)` if `x` is the first element of `xs`.\n Returns `None` if `xs` is empty."
            },{
                "name":"isEmpty",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `xs` is the empty list, i.e. `Nil`."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"xs",
                    "type":"List[Char]"
                }],
                "result":"Str",
                "comment":"Returns the list of characters `xs` as a string."
            },{
                "name":"replace",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"y",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `xs` with every occurrence of `x` replaced by `y`."
            },{
                "name":"isPrefixOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `xs` is a prefix of `ys`."
            },{
                "name":"take",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the first `n` elements of `xs`.\n Returns `xs` if `n > length(xs)`.\n Returns `Nil` if `n < 0`."
            },{
                "name":"partition",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns a pair of lists `(ys, zs)`.\n `ys` contains all elements of `xs` that satisfy the predicate `f`.\n `zs` contains all elements of `xs` that do not satisfy the predicate `f`."
            },{
                "name":"scanLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Accumulates the result of applying `f` to `xs` going left to right.\n That is, the result is of the form: `s :: f(s, x1) :: f(f(s, x1), x2)  ...`."
            },{
                "name":"filter",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns a list of every element in `xs` that satisfies the predicate `f`."
            },{
                "name":"indexOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Int32",
                "comment":"Returns the position of `a` in `xs`.\n Returns -1 if `a` does not exist in `xs`."
            },{
                "name":"groupBy",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Partitions `xs` into sublists such that for any two elements `x` and `y` in a sublist, `f(x, y)` is true.\n A sublist is created by iterating through the remaining elements of `xs` from left to right and adding an\n element to the sublist if and only if doing so creates no conflicts with the elements already in the sublist."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> List[a]"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the result of applying `f` to every element in `xs` and concatenating the results."
            },{
                "name":"append",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `ys` appended to `xs`.\n The infix operator `:::` is an alias for `append` (`xs ::: ys = append(xs, ys)`)."
            },{
                "name":"last",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `Some(x)` if `x` is the last element of `xs`.\n Returns `None` if `xs` is empty."
            },{
                "name":"findLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from left to right."
            },{
                "name":"count",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Int32",
                "comment":"Returns the number of elements in `xs` that satisfy the predicate `f`."
            },{
                "name":"eq",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `xs` and `ys` and equal."
            },{
                "name":"subsequences",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns all subsequences of `xs` in lexicographical order by element indices in `xs`.\n That is, `xs` is the first subsequence and `Nil` is the last subsequence."
            },{
                "name":"fold2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c"
                },{
                    "name":"c",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Alias for `foldLeft2`."
            },{
                "name":"patch",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `ys` with the `n` elements starting at index `i` replaced with the elements of `xs`.\n If any of the indices `i, i+1, i+2, ... , i+n-1` are out of range in `ys` then no patching is done at these indices.\n If `xs` becomes depleted then no further patching is done.\n If patching occurs at index `i+j` in `ys`, then the element at index `j` in `xs` is used."
            },{
                "name":"filterMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Option[b]"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Collects the results of applying the partial function `f` to every element in `xs`."
            },{
                "name":"find",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Alias for `findLeft`."
            },{
                "name":"length",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Int32",
                "comment":"Returns the length of `xs`."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if at least one element in `xs` satisfies the predicate `f`.\n Returns `false` if `xs` is empty."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from right to left.\n That is, the result is of the form: `f(x1, ...f(xn-1, f(xn, s))...)`."
            },{
                "name":"memberOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `xs` contains the element `a`."
            },{
                "name":"scanRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Accumulates the result of applying `f` to `xs` going right to left.\n That is, the result is of the form: `... f(xn-1, f(xn, s)) :: f(xn, s) :: s`."
            },{
                "name":"reverse",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the reverse of `xs`."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Alias for `reduceLeft`."
            },{
                "name":"update",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `xs` with the element at index `i` replaced by `a`.\n Returns `xs` if `i < 0` or `i > length(xs)-1`."
            },{
                "name":"span",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns a pair of lists `(ys, zs)`.\n `ys` is the longest prefix of `xs` that satisfies the predicate `f`.\n `zs` is the remainder of `xs`."
            },{
                "name":"permutations",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns all permutations of `xs` in lexicographical order by element indices in `xs`.\n That is, `xs` is the first permutation and `reverse(xs)` is the last permutation."
            },{
                "name":"zip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns a list where the element at index `i` is `(a, b)` where\n `a` is the element at index `i` in `xs` and `b` is the element at index `i` in `ys`.\n If either `xs` or `ys` becomes depleted, then no further elements are added to the resulting list."
            },{
                "name":"map2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns a list where the element at index `i` is `f(a, b)` where\n `a` is the element at index `i` in `xs` and `b` is the element at index `i` in `ys`.\n If either `xs` or `ys` becomes depleted, then no further elements are added to the resulting list.\n Functionally equivalent to zipWith."
            },{
                "name":"takeWhile",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the longest prefix of `xs` that satisfies the predicate `f`."
            },{
                "name":"forall",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if all elements in `xs` satisfy the predicate `f`.\n Returns `true` if `xs` is empty."
            },{
                "name":"toMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[(a, b)]"
                }],
                "result":"a",
                "comment":"Returns the association list `xs` as a map.\n If `xs` contains multiple mappings with the same key, `toMap` does not\n make any guarantees about which mapping will be in the resulting map."
            },{
                "name":"flatMap2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> List[c]"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Concatenates the results of applying `f` pairwise to the elements of `xs` and `ys`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns the result of applying `f` to every element in `xs`.\n That is, the result is of the form: `f(x1) :: f(x2) :: ...`."
            },{
                "name":"drop",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"a",
                "comment":"Returns `xs` without the first `n` elements.\n Returns `Nil` if `n > length(xs)`.\n Returns `xs` if `n < 0`."
            }]
        },
        "Char":{
            "namespace":"Char",
            "defs":[{
                "name":"isLetter",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the given char `c` is a letter character."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Str",
                "comment":"Returns the character `c` as a string."
            },{
                "name":"isUpperCase",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the given char `c` is uppercase."
            },{
                "name":"isWhiteSpace",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the given char `c` is a white space character."
            },{
                "name":"toUpperCase",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Char",
                "comment":"Converts a letter to its uppercase version.\n\n Returns the original character if it does not have a uppercase version."
            },{
                "name":"isDigit",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the given char `c` is in the range 0...9."
            },{
                "name":"toLowerCase",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Char",
                "comment":"Converts a letter to its lowercase version.\n\n Returns the original character if it does not have a lowercase version."
            },{
                "name":"isOctDigit",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the given char `c` is in the range 0...7."
            },{
                "name":"isAscii",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the given char `c` is an ascii character."
            },{
                "name":"isLowerCase",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the given char `c` is lowercase."
            },{
                "name":"isHexDigit",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the given char `c` is in the range 0...F."
            }]
        },
        "Set":{
            "namespace":"Set",
            "defs":[{
                "name":"eq",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                },{
                    "name":"ys",
                    "type":"Set[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `xs` and `ys` and equal, i.e. they have the same elements."
            },{
                "name":"isEmpty",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `xs` is the empty set, i.e. `Set(Nil)`."
            },{
                "name":"singleton",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns the singleton set containing `x`.\n `#{x}` is syntactic sugar for `singleton` (`#{x} = singleton(x)`)."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Alias for `foldLeft`."
            },{
                "name":"subsets",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns all subsets of `xs`."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Applies `f` to all elements in `xs` going from left to right until a single value `v` is obtained.  Returns `Some(v)`.\n That is, the result is of the form: `Some(f(...f(f(x1, x2), x3)..., xn))`\n Returns `None` if `xs` is the empty set."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns the set `xs` as a list."
            },{
                "name":"difference",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                },{
                    "name":"ys",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns the difference of `xs` and `ys`, i.e. `xs - ys`."
            },{
                "name":"empty",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[],
                "result":"a",
                "comment":"Returns the empty set.\n `#{}` is syntactic sugar for `empty` (`#{} = empty()`)."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Alias for `reduceLeftOpt`."
            },{
                "name":"count",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Int32",
                "comment":"Returns the number of elements in `xs` that satisfy the predicate `f`."
            },{
                "name":"forall",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if all elements in `xs` satisfy the predicate `f`.\n Returns `true` if `xs` is the empty set."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> Set[a]"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns the result of applying `f` to every element in `xs` and taking the union."
            },{
                "name":"union",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                },{
                    "name":"ys",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns the union of `xs` and `ys`."
            },{
                "name":"insert",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Adds `x` to `xs`."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if at least one element in `xs` satisfies the predicate `f`.\n Returns `false` if `xs` is the empty set."
            },{
                "name":"map",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns the result of applying `f` to every element in `xs`.\n Note: The returned set may be smaller than `xs`."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from left to right.\n That is, the result is of the form: `f(...f(f(s, x1), x2)..., xn)`."
            },{
                "name":"partition",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns a pair of sets `(ys, zs)`.\n `ys` contains all elements of `xs` that satisfy the predicate `f`.\n `zs` contains all elements of `xs` that do not satisfy the predicate `f`."
            },{
                "name":"flatten",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[Set[a]]"
                }],
                "result":"a",
                "comment":"Returns the union of the elements in `xs`."
            },{
                "name":"delete",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Removes `x` from `xs`."
            },{
                "name":"toMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[(a, b)]"
                }],
                "result":"a",
                "comment":"Returns the association set `xs` as a map.\n If `xs` contains multiple mappings with the same key, `toMap` does not\n make any guarantees about which mapping will be in the resulting map."
            },{
                "name":"find",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Alias for `findLeft`."
            },{
                "name":"isSubsetOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                },{
                    "name":"ys",
                    "type":"Set[a]"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if every element in `xs` appears in `ys`."
            },{
                "name":"findRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from right to left."
            },{
                "name":"findLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from left to right."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from right to left.\n That is, the result is of the form: `f(x1, ...f(xn-1, f(xn, s))...)`."
            },{
                "name":"filter",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns the set of all elements of `xs` that satisfy the predicate `f`."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Applies `f` to all elements in `xs` going from right to left until a single value `v` is obtained.  Returns `Some(v)`.\n That is, the result is of the form: `Some(f(x1, ...f(xn-2, f(xn-1, xn))...))`\n Returns `None` if `xs` is the empty set."
            },{
                "name":"replace",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"y",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Replaces the element `x` with `y` if `x` is in `xs`.\n Otherwise, returns `xs`.\n Note: The returned set may be smaller than `xs`."
            },{
                "name":"memberOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `x` is a member of `xs`."
            },{
                "name":"size",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Int32",
                "comment":"Returns the size of `xs`."
            },{
                "name":"isProperSubsetOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                },{
                    "name":"ys",
                    "type":"Set[a]"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if every element in `xs` appears in `ys` and `xs != ys`."
            },{
                "name":"intersection",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                },{
                    "name":"ys",
                    "type":"Set[a]"
                }],
                "result":"a",
                "comment":"Returns the intersection of `xs` and `ys`."
            }]
        },
        "Int32":{
            "namespace":"Int32",
            "defs":[{
                "name":"logicalRightShift",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the logical right shift of `x` by `distance`.\n Only the rightmost 5 bits of `distance` are considered (ie. `distance % 32`).\n A zero is shifted into the leftmost position regardless of sign extension."
            },{
                "name":"bitCount",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the number of one-bits in the two's complement binary\n representation of `x`."
            },{
                "name":"max",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"y",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"dist",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"y",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the distance between `x` and `y`.\n If this distance exceeds maxValue(), -1 is returned."
            },{
                "name":"min",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"y",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the number of bits used to represent an `Int32`."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the maximum number representable by an `Int32`."
            },{
                "name":"rotateLeft",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` left by `distance` bits."
            },{
                "name":"highestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"setBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns `x` with the bit at position `position` set (to 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 31 (leftmost bit)"
            },{
                "name":"lowestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"compare",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"y",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > y, -1 if x < y, and 0 if x = y.\n The sign of x - y."
            },{
                "name":"clearBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 31 (leftmost bit)"
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the minimum number representable by an `Int32`."
            },{
                "name":"flipBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns `x` with the bit at position `position` flipped.\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 31 (leftmost bit)"
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the value obtained by reversing the bits in the\n two's complement binary representation of `x`."
            },{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.\n The sign of x."
            },{
                "name":"numberOfTrailingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the number of zero bits following the\n lowest-order/rightmost one-bit in `x`.\n Returns 32 if x=0."
            },{
                "name":"getBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 31 (leftmost bit)"
            },{
                "name":"numberOfLeadingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the number of zero bits preceding the\n highest-order/leftmost one-bit in `x`.\n Returns 32 if x=0."
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the absolute value of `x`.\n If the absolute value exceeds maxValue(), -1 is returned."
            },{
                "name":"highestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the position of the highest-order/leftmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 31 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"rotateRight",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` right by `distance` bits."
            },{
                "name":"lowestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the position of the lowest-order/rightmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 31 (leftmost bit)\n                         -1 if x = 0"
            }]
        },
        "Console":{
            "namespace":"Console",
            "defs":[{
                "name":"print",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Unit",
                "comment":"Alias for `Console.StdOut.print`."
            },{
                "name":"printLine",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Unit",
                "comment":"Alias for `Console.StdOut.printLine`."
            },{
                "name":"readLine",
                "tparams":[],
                "fparams":[],
                "result":"Str",
                "comment":"Alias for `Console.StdIn.readLine`."
            }]
        },
        "Path":{
            "namespace":"Path",
            "defs":[{
                "name":"new",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Path",
                "comment":"Returns a Path from the given string `s`."
            },{
                "name":"exists",
                "tparams":[],
                "fparams":[{
                    "name":"p",
                    "type":"Path"
                }],
                "result":"Bool",
                "comment":"Checks whether the given path `p` exists"
            },{
                "name":"extension",
                "tparams":[],
                "fparams":[{
                    "name":"p",
                    "type":"Path"
                }],
                "result":"Str",
                "comment":"Returns the extension of the given path `p`."
            }]
        },
        "Console.StdIn":{
            "namespace":"Console.StdIn",
            "defs":[{
                "name":"readLine",
                "tparams":[],
                "fparams":[],
                "result":"Str",
                "comment":"Returns the next line read from the standard input stream."
            }]
        },
        "Tuple3":{
            "namespace":"Tuple3",
            "defs":[{
                "name":"eq",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"t1",
                    "type":"(a, b, c)"
                },{
                    "name":"t2",
                    "type":"(a, b, c)"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `t1` and `t2` and equal."
            }]
        },
        "Duration":{
            "namespace":"Duration",
            "defs":[{
                "name":"oneMinute",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the number of nanoseconds in one minute."
            },{
                "name":"oneDay",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the number of nanoseconds in one 24 hour day."
            },{
                "name":"oneMillisecond",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the number of nanoseconds in one millisecond."
            },{
                "name":"oneMicrosecond",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the number of nanoseconds in one microsecond."
            },{
                "name":"oneHour",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the number of nanoseconds in one hour."
            },{
                "name":"oneSecond",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the number of nanoseconds in one second."
            },{
                "name":"oneNanosecond",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the number of nanoseconds in one nanosecond, i.e. one."
            }]
        },
        "Timer":{
            "namespace":"Timer",
            "defs":[{
                "name":"hours",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Unit",
                "comment":"Returns a channel that receives the Unit value after `n` hours."
            },{
                "name":"milliseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Unit",
                "comment":"Returns a channel that receives the Unit value after `n` milliseconds."
            },{
                "name":"microseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Unit",
                "comment":"Returns a channel that receives the Unit value after `n` microseconds."
            },{
                "name":"minutes",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Unit",
                "comment":"Returns a channel that receives the Unit value after `n` minutes."
            },{
                "name":"days",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Unit",
                "comment":"Returns a channel that receives the Unit value after `n` days."
            },{
                "name":"nanoseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Unit",
                "comment":"Returns a channel that receives the Unit value after `n` nanoseconds."
            },{
                "name":"seconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Unit",
                "comment":"Returns a channel that receives the Unit value after `n` seconds."
            }]
        },
        "Option":{
            "namespace":"Option",
            "defs":[{
                "name":"getWithDefault",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                },{
                    "name":"d",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns `v` if `o` is `Some(v).` Otherwise returns `d`."
            },{
                "name":"isSome",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` iff `o` is `Some(v)`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `Some(f(v))` if `o` is `Some(v)`. Otherwise returns `None`."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> Option[a]"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `f(v)` if `o` is `Some(v)`. Otherwise returns `None`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b"
                },{
                    "name":"o",
                    "type":"Option[a]"
                },{
                    "name":"z",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns `f(v, z)` if `o` is `Some(v)`. Otherwise returns `z`."
            },{
                "name":"count",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Int32",
                "comment":"Returns `1` if `o` is `Some(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `0`."
            },{
                "name":"replace",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"y",
                    "type":"a"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `Some(y)` if `o` is `Some(x)`. Otherwise returns `o`."
            },{
                "name":"forall",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if `o` is `Some(v)` and the predicate `f(v)` evaluates to `true` or if `o` is `None`.\n Otherwise returns `false`."
            },{
                "name":"map2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c"
                },{
                    "name":"o1",
                    "type":"Option[a]"
                },{
                    "name":"o2",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `Some(f(v1, v2))` if `o1` is `Some(v1)` and `o2` is `Some(v2)`. Otherwise returns `None`."
            },{
                "name":"find",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `o` if `o` is `Some(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `None`."
            },{
                "name":"unzip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[(a, b)]"
                }],
                "result":"a",
                "comment":"Returns `(Some(v1), Some(v2))` if `o` is `Some((v1, v2))`. Otherwise returns `(None, None)`."
            },{
                "name":"zip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"o1",
                    "type":"Option[a]"
                },{
                    "name":"o2",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `Some((v1, v2))` if `o1` is `Some(v1)` and `o2` is `Some(v2)`. Otherwise returns `None`."
            },{
                "name":"eq",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o1",
                    "type":"Option[a]"
                },{
                    "name":"o2",
                    "type":"Option[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `o1` and `o2` and equal."
            },{
                "name":"toMap",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[(a, b)]"
                }],
                "result":"a",
                "comment":"Returns a singleton map with the mapping `k -> v` if `o` is `Some((k, v))`. Otherwise returns the empty map."
            },{
                "name":"isEmpty",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` iff `o` is `None`."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns a one-element list of the value `v` if `o` is `Some(v)`. Otherwise returns the empty list."
            },{
                "name":"filter",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `o` if `o` is `Some(v)` and the predicate `f(v)` is true. Otherwise returns `None`."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` if `o` is `Some(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `false`."
            },{
                "name":"flatMap2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> c -> Option[a]"
                },{
                    "name":"o1",
                    "type":"Option[a]"
                },{
                    "name":"o2",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `f(v1, v2)` if `o1` is `Some(v1)` and `o2` is `Some(v2)`. Otherwise returns `None`."
            },{
                "name":"flatten",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[Option[a]]"
                }],
                "result":"a",
                "comment":"Returns `v` if `o` is `Some(v)`. Otherwise returns `None`."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns a one-element set of the value `v` if `o` is `Some(v)`. Otherwise returns the empty set."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b"
                },{
                    "name":"z",
                    "type":"a"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `f(z, v)` if `o` is `Some(v)`. Otherwise returns `z`."
            },{
                "name":"withDefault",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o1",
                    "type":"Option[a]"
                },{
                    "name":"o2",
                    "type":"Option[a]"
                }],
                "result":"a",
                "comment":"Returns `o1` if it is `Some(v)`. Otherwise returns `o2`."
            },{
                "name":"isNone",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Bool",
                "comment":"Returns `true` iff `o` is `None`."
            }]
        },
        "Float64":{
            "namespace":"Float64",
            "defs":[{
                "name":"maxExponent",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the maximum exponent that a `Float64` may have."
            },{
                "name":"isNan",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `x` is the NaN value of type `Float64`."
            },{
                "name":"isFinite",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `x` is a non-infinite and non-Nan `Float64` value."
            },{
                "name":"min",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                },{
                    "name":"y",
                    "type":"Float64"
                }],
                "result":"Float64",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"negativeInfinity",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "comment":"Returns the negative infinity value of type `Float64`."
            },{
                "name":"minExponent",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the minimum exponent that a `Float64` may have."
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "comment":"Returns the minimum number representable by a `Float64`."
            },{
                "name":"positiveInfinity",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "comment":"Returns the positive infinity value of type `Float64`."
            },{
                "name":"minPositiveValue",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "comment":"Returns the minimum positive number representable by a `Float64`."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "comment":"Returns the maximum number representable by a `Float64`."
            },{
                "name":"isInfinite",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `x` is an infinite and non-Nan `Float64` value."
            },{
                "name":"max",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                },{
                    "name":"y",
                    "type":"Float64"
                }],
                "result":"Float64",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"nan",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "comment":"Returns the NaN (not a number) value of type `Float64`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the number of bits used to represent a `Float64`."
            }]
        },
        "":{
            "namespace":"",
            "defs":[{
                "name":"gt",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"_x",
                    "type":"a"
                },{
                    "name":"_y",
                    "type":"a"
                }],
                "result":"Bool",
                "comment":""
            },{
                "name":"uncurry",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> c"
                },{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"y",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns the result of uncurrying the function `f`.\n That is, given the function `f: a -> b -> c`, returns a function `(a, b) -> c`"
            },{
                "name":"identity",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                }],
                "result":"a",
                "comment":"The identity function."
            },{
                "name":"snd",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"p",
                    "type":"(a, b)"
                }],
                "result":"a",
                "comment":"Returns the second component of `t`."
            },{
                "name":"assertEq!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"y",
                    "type":"a"
                }],
                "result":"Bool",
                "comment":"Asserts that the given values `x` and `y` are equal."
            },{
                "name":"⊕",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Bool"
                },{
                    "name":"y",
                    "type":"Bool"
                }],
                "result":"Bool",
                "comment":"Alias for exclusive disjunction."
            },{
                "name":"∨",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Bool"
                },{
                    "name":"y",
                    "type":"Bool"
                }],
                "result":"Bool",
                "comment":"Alias for logical disjunction."
            },{
                "name":"<<",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a"
                },{
                    "name":"g",
                    "type":"a -> b"
                },{
                    "name":"x",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Backwards function composition. Applies the function on the right first.\n\n Given the functions `f: b -> c` and `g: a -> b` returns a function `a -> c`"
            },{
                "name":"le",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"_x",
                    "type":"a"
                },{
                    "name":"_y",
                    "type":"a"
                }],
                "result":"Bool",
                "comment":""
            },{
                "name":"ge",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"_x",
                    "type":"a"
                },{
                    "name":"_y",
                    "type":"a"
                }],
                "result":"Bool",
                "comment":""
            },{
                "name":"curry",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c"
                },{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"y",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns the result of currying the function `f`.\n That is, given the function `f: (a, b) -> c`, returns a function `a -> b -> c`"
            },{
                "name":"lt",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"_x",
                    "type":"a"
                },{
                    "name":"_y",
                    "type":"a"
                }],
                "result":"Bool",
                "comment":"Returns `true` if `x` is strictly less than `y`."
            },{
                "name":"flip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> c"
                },{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"y",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns the function `f` with input arguments swapped.\n That is, given the function `f: (a, b) -> c`, returns a function `(b, a) -> c`"
            },{
                "name":"→",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Bool"
                },{
                    "name":"y",
                    "type":"Bool"
                }],
                "result":"Bool",
                "comment":"Alias for logical implication."
            },{
                "name":">>",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b"
                },{
                    "name":"g",
                    "type":"b -> a"
                },{
                    "name":"x",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Forwards function composition. Applies the function on the left first.\n\n Given the functions `f: a -> b` and `g: b -> c` returns a function `a -> c`"
            },{
                "name":"<|",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b"
                },{
                    "name":"x",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Pipes the given value `x` into the function `f`.\n\n Given a value `x: a` and a function `f: a -> b` returns `f(x)`."
            },{
                "name":"assert!",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Bool"
                }],
                "result":"Bool",
                "comment":"Asserts that the given boolean `b` is `true`."
            },{
                "name":"fst",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"p",
                    "type":"(a, b)"
                }],
                "result":"a",
                "comment":"Returns the first component of `t`."
            },{
                "name":"||>",
                "tparams":[{
                    "name":"a1"
                },{
                    "name":"a2"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"(a, b)"
                },{
                    "name":"f",
                    "type":"(a, b) -> c"
                }],
                "result":"a",
                "comment":"Pipes the given pair `p` into the function `f`.\n\n Given a pair `x: (a1, a1)` and a function `f: ((a1, a2)) -> b` returns `f(x)`."
            },{
                "name":"<||",
                "tparams":[{
                    "name":"a1"
                },{
                    "name":"a2"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"(a, b) -> c"
                },{
                    "name":"x",
                    "type":"(a, b)"
                }],
                "result":"a",
                "comment":"Pipes the given pair `p` into the function `f`.\n\n Given a pair `x: (a1, a1)` and a function `f: ((a1, a2)) -> b` returns `f(x)`."
            },{
                "name":"swap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"p",
                    "type":"(a, b)"
                }],
                "result":"a",
                "comment":"Returns the pair `p` with the components swapped.\n That is, returns `(y, x)` if `p = (x, y)`."
            },{
                "name":"↔",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Bool"
                },{
                    "name":"y",
                    "type":"Bool"
                }],
                "result":"Bool",
                "comment":"Alias for logical biconditional."
            },{
                "name":"constant",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"y",
                    "type":"a"
                },{
                    "name":"_",
                    "type":"a"
                }],
                "result":"a",
                "comment":"Returns the constant function with return value `y`.\n That is, returns `f` such that `f(x) = y` for all inputs `x`."
            },{
                "name":"assertNot!",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Bool"
                }],
                "result":"Bool",
                "comment":"Asserts that the given boolean `b` is `false`."
            },{
                "name":"∧",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Bool"
                },{
                    "name":"y",
                    "type":"Bool"
                }],
                "result":"Bool",
                "comment":"Alias for logical conjunction."
            },{
                "name":"|>",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"f",
                    "type":"a -> b"
                }],
                "result":"a",
                "comment":"Pipes the given value `x` into the function `f`.\n\n Given a value `x: a` and a function `f: a -> b` returns `f(x)`."
            },{
                "name":"↑",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Bool"
                },{
                    "name":"y",
                    "type":"Bool"
                }],
                "result":"Bool",
                "comment":"Alias for the Sheffer stroke."
            }]
        },
        "Console.StdOut":{
            "namespace":"Console.StdOut",
            "defs":[{
                "name":"newLine",
                "tparams":[],
                "fparams":[],
                "result":"Unit",
                "comment":"Prints a newline to the standard output stream."
            },{
                "name":"printLine",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Unit",
                "comment":"Prints the given string `s` and a newline to the standard output stream."
            },{
                "name":"print",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Unit",
                "comment":"Prints the given string `s` to the standard output stream."
            },{
                "name":"flush",
                "tparams":[],
                "fparams":[],
                "result":"Unit",
                "comment":"Flushes the standard output stream."
            }]
        },
        "Float32":{
            "namespace":"Float32",
            "defs":[{
                "name":"positiveInfinity",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "comment":"Returns the positive infinity value of type `Float32`."
            },{
                "name":"nan",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "comment":"Returns the NaN (not a number) value of type `Float32`."
            },{
                "name":"minExponent",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the minimum exponent that a `Float32` may have."
            },{
                "name":"maxExponent",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the maximum exponent that a `Float32` may have."
            },{
                "name":"isFinite",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `x` is a non-infinite and non-Nan `Float32` value."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "comment":"Returns the maximum number representable by a `Float32`."
            },{
                "name":"max",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                },{
                    "name":"y",
                    "type":"Float32"
                }],
                "result":"Float32",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "comment":"Returns the minimum number representable by a `Float32`."
            },{
                "name":"min",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                },{
                    "name":"y",
                    "type":"Float32"
                }],
                "result":"Float32",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the number of bits used to represent a `Float32`."
            },{
                "name":"negativeInfinity",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "comment":"Returns the negative infinity value of type `Float32`."
            },{
                "name":"isNan",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `x` is the NaN value of type `Float32`."
            },{
                "name":"minPositiveValue",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "comment":"Returns the minimum positive number representable by a `Float32`."
            },{
                "name":"isInfinite",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Bool",
                "comment":"Returns true if and only if `x` is an infinite and non-Nan `Float32` value."
            }]
        },
        "Ticker":{
            "namespace":"Ticker",
            "defs":[{
                "name":"milliseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` milliseconds."
            },{
                "name":"stop",
                "tparams":[],
                "fparams":[{
                    "name":"ticker",
                    "type":"Ticker"
                }],
                "result":"Unit",
                "comment":""
            },{
                "name":"seconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` seconds."
            },{
                "name":"minutes",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` minutes."
            },{
                "name":"hours",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` hours."
            },{
                "name":"nanoseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` nanoseconds."
            },{
                "name":"days",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` days."
            },{
                "name":"tick",
                "tparams":[],
                "fparams":[{
                    "name":"ticker",
                    "type":"Ticker"
                }],
                "result":"Int32",
                "comment":""
            },{
                "name":"microseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` microseconds."
            }]
        },
        "Tuple4":{
            "namespace":"Tuple4",
            "defs":[{
                "name":"eq",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"d"
                }],
                "fparams":[{
                    "name":"t1",
                    "type":"(a, b, c, d)"
                },{
                    "name":"t2",
                    "type":"(a, b, c, d)"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `t1` and `t2` and equal."
            }]
        },
        "Tuple2":{
            "namespace":"Tuple2",
            "defs":[{
                "name":"eq",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"t1",
                    "type":"(a, b)"
                },{
                    "name":"t2",
                    "type":"(a, b)"
                }],
                "result":"Bool",
                "comment":"Returns `true` if and only if `t1` and `t2` and equal."
            }]
        },
        "BigInt":{
            "namespace":"BigInt",
            "defs":[{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.\n The sign of x."
            },{
                "name":"min",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"y",
                    "type":"BigInt"
                }],
                "result":"BigInt",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"gcd",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"y",
                    "type":"BigInt"
                }],
                "result":"BigInt",
                "comment":"Returns the greatest common non-negative divisor of `x` and `y`."
            },{
                "name":"clearBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"BigInt",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0)."
            },{
                "name":"dist",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"y",
                    "type":"BigInt"
                }],
                "result":"BigInt",
                "comment":"Returns the distance between `x` and `y`."
            },{
                "name":"flipBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"BigInt",
                "comment":"Returns `x` with the bit at position `position` flipped."
            },{
                "name":"compare",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"y",
                    "type":"BigInt"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > y, -1 if x < y, and 0 if x = y.\n The sign of x - y."
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"BigInt",
                "comment":"Returns the absolute value of `x`."
            },{
                "name":"setBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"BigInt",
                "comment":"Returns `x` with the bit at position `position` set (to 1)."
            },{
                "name":"getBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n The bits of x have positions: 0 (rightmost bit), 1, 2, ..."
            },{
                "name":"max",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"y",
                    "type":"BigInt"
                }],
                "result":"BigInt",
                "comment":"Returns the larger of `x` and `y`."
            }]
        },
        "Int16":{
            "namespace":"Int16",
            "defs":[{
                "name":"lowestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "comment":"Returns the position of the lowest-order/rightmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 15 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Int16",
                "comment":"Returns the minimum number representable by an `Int16`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the number of bits used to represent an `Int16`."
            },{
                "name":"logicalRightShift",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int16",
                "comment":"Returns the logical right shift of `x` by `distance`.\n Only the rightmost 5 bits of `distance` are considered (ie. `distance % 32`).\n A zero is shifted into the leftmost position regardless of sign extension."
            },{
                "name":"clearBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int16",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 15 (leftmost bit)"
            },{
                "name":"numberOfTrailingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "comment":"Returns the number of zero bits following the\n lowest-order/rightmost one-bit in `x`.\n Returns 16 if x=0."
            },{
                "name":"highestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "comment":"Returns the position of the highest-order/leftmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 15 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int16",
                "comment":"Returns the value obtained by reversing the bits in the\n two's complement binary representation of `x`."
            },{
                "name":"max",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"y",
                    "type":"Int16"
                }],
                "result":"Int16",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"setBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int16",
                "comment":"Returns `x` with the bit at position `position` set (to 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 15 (leftmost bit)"
            },{
                "name":"compare",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"y",
                    "type":"Int16"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > y, -1 if x < y, and 0 if x = y.\n The sign of x - y."
            },{
                "name":"rotateLeft",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int16",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` left by `distance` bits."
            },{
                "name":"rotateRight",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int16",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` right by `distance` bits."
            },{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.\n The sign of x."
            },{
                "name":"flipBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int16",
                "comment":"Returns `x` with the bit at position `position` flipped.\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 15 (leftmost bit)"
            },{
                "name":"lowestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int16",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"bitCount",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "comment":"Returns the number of one-bits in the two's complement binary\n representation of `x`."
            },{
                "name":"dist",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"y",
                    "type":"Int16"
                }],
                "result":"Int16",
                "comment":"Returns the distance between `x` and `y`.\n If this distance exceeds maxValue(), -1 is returned."
            },{
                "name":"getBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 15 (leftmost bit)"
            },{
                "name":"highestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int16",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"min",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"y",
                    "type":"Int16"
                }],
                "result":"Int16",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int16",
                "comment":"Returns the absolute value of `x`.\n If the absolute value exceeds maxValue(), -1 is returned."
            },{
                "name":"numberOfLeadingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "comment":"Returns the number of zero bits preceding the\n highest-order/leftmost one-bit in `x`.\n Returns 16 if x=0."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Int16",
                "comment":"Returns the maximum number representable by an `Int16`."
            }]
        },
        "String":{
            "namespace":"String",
            "defs":[{
                "name":"toUpperCase",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Str",
                "comment":""
            },{
                "name":"endsWith",
                "tparams":[],
                "fparams":[{
                    "name":"s1",
                    "type":"Str"
                },{
                    "name":"s2",
                    "type":"Str"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the string `s1` ends with the string `s2`."
            },{
                "name":"charAt",
                "tparams":[],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Char",
                "comment":"Returns the character at position `i` in the string `s`."
            },{
                "name":"isEmpty",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the string `s` is the empty string."
            },{
                "name":"length",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Int32",
                "comment":"Returns the length of the string `s`."
            },{
                "name":"toLowerCase",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Str",
                "comment":""
            },{
                "name":"startsWith",
                "tparams":[],
                "fparams":[{
                    "name":"s1",
                    "type":"Str"
                },{
                    "name":"s2",
                    "type":"Str"
                }],
                "result":"Bool",
                "comment":"Returns `true` if the string `s1` starts with the string `s2`."
            },{
                "name":"toList",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Char",
                "comment":"Returns the given string `s` as a list of characters."
            },{
                "name":"concat",
                "tparams":[],
                "fparams":[{
                    "name":"s1",
                    "type":"Str"
                },{
                    "name":"s2",
                    "type":"Str"
                }],
                "result":"Str",
                "comment":"Returns the string `s1` followed by the string `s2`."
            }]
        },
        "Int64":{
            "namespace":"Int64",
            "defs":[{
                "name":"rotateRight",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int64",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` right by `distance` bits."
            },{
                "name":"min",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"y",
                    "type":"Int64"
                }],
                "result":"Int64",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the maximum number representable by an `Int64`."
            },{
                "name":"flipBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int64",
                "comment":"Returns `x` with the bit at position `position` flipped.\n Considers the 6 rightmost bits of `position` (`position` mod 64).\n The bits of x have positions: 0 (rightmost bit) - 63 (leftmost bit)"
            },{
                "name":"lowestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "comment":"Returns the position of the lowest-order/rightmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 63 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"dist",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"y",
                    "type":"Int64"
                }],
                "result":"Int64",
                "comment":"Returns the distance between `x` and `y`.\n If this distance exceeds maxValue(), -1 is returned."
            },{
                "name":"highestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "comment":"Returns the position of the highest-order/leftmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 63 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"clearBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int64",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0).\n Considers the 6 rightmost bits of `position` (`position` mod 64).\n The bits of x have positions: 0 (rightmost bit) - 63 (leftmost bit)"
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int64",
                "comment":"Returns the value obtained by reversing the bits in the\n two's complement binary representation of `x`."
            },{
                "name":"numberOfTrailingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "comment":"Returns the number of zero bits following the\n lowest-order/rightmost one-bit in `x`.\n Returns 64 if x=0."
            },{
                "name":"getBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n Considers the 6 rightmost bits of `position` (`position` mod 64).\n The bits of x have positions: 0 (rightmost bit) - 63 (leftmost bit)."
            },{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.\n The sign of x."
            },{
                "name":"highestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int64",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"bitCount",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "comment":"Returns the number of one-bits in the two's complement binary\n representation of `x`."
            },{
                "name":"lowestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int64",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"compare",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"y",
                    "type":"Int64"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > y, -1 if x < y, and 0 if x = y.\n The sign of x - y."
            },{
                "name":"logicalRightShift",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int64",
                "comment":"Returns the logical right shift of `x` by `distance`.\n Only the rightmost 6 bits of `distance` are considered (ie. `distance % 64`).\n A zero is shifted into the leftmost position regardless of sign extension."
            },{
                "name":"numberOfLeadingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "comment":"Returns the number of zero bits preceding the\n highest-order/leftmost one-bit in `x`.\n Returns 64 if x=0."
            },{
                "name":"max",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"y",
                    "type":"Int64"
                }],
                "result":"Int64",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"setBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int64",
                "comment":"Returns `x` with the bit at position `position` set (to 1).\n Considers the 6 rightmost bits of `position` (`position` mod 64).\n The bits of x have positions: 0 (rightmost bit) - 63 (leftmost bit)"
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "comment":"Returns the minimum number representable by an `Int64`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the number of bits used to represent an `Int64`."
            },{
                "name":"rotateLeft",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int64",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` left by `distance` bits."
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int64",
                "comment":"Returns the absolute value of `x`.\n If the absolute value exceeds maxValue(), -1 is returned."
            }]
        },
        "BufferedReader":{
            "namespace":"BufferedReader",
            "defs":[{
                "name":"new",
                "tparams":[],
                "fparams":[{
                    "name":"p",
                    "type":"Path"
                }],
                "result":"BufferedReader",
                "comment":"Returns a new BufferedReader from the given Path `p`\n TODO: Consider choosing charsets and opening modes"
            }]
        },
        "Console.StdErr":{
            "namespace":"Console.StdErr",
            "defs":[{
                "name":"flush",
                "tparams":[],
                "fparams":[],
                "result":"Unit",
                "comment":"Flushes the standard error stream."
            },{
                "name":"print",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Unit",
                "comment":"Prints the given string `s` to the standard error stream."
            },{
                "name":"printLine",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Str"
                }],
                "result":"Unit",
                "comment":"Prints the given string `s` and a newline to the standard error stream."
            },{
                "name":"newLine",
                "tparams":[],
                "fparams":[],
                "result":"Unit",
                "comment":"Prints a newline to the standard error stream."
            }]
        },
        "Int8":{
            "namespace":"Int8",
            "defs":[{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "comment":"Returns the number of bits used to represent an `Int8`."
            },{
                "name":"numberOfLeadingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "comment":"Returns the number of zero bits preceding the\n highest-order/leftmost one-bit in `x`.\n Returns 8 if x=0."
            },{
                "name":"setBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int8",
                "comment":"Returns `x` with the bit at position `position` set (to 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 7 (leftmost bit)"
            },{
                "name":"logicalRightShift",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int8",
                "comment":"Returns the logical right shift of `x` by `distance`.\n Only the rightmost 5 bits of `distance` are considered (ie. `distance % 32`).\n A zero is shifted into the leftmost position regardless of sign extension."
            },{
                "name":"bitCount",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "comment":"Returns the number of one-bits in the two's complement binary\n representation of `x`."
            },{
                "name":"clearBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int8",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 7 (leftmost bit)"
            },{
                "name":"lowestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int8",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"highestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int8",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int8",
                "comment":"Returns the value obtained by reversing the bits in the\n two's complement binary representation of `x`."
            },{
                "name":"dist",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"y",
                    "type":"Int8"
                }],
                "result":"Int8",
                "comment":"Returns the distance between `x` and `y`.\n If this distance exceeds maxValue(), -1 is returned."
            },{
                "name":"getBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int32",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 7 (leftmost bit)"
            },{
                "name":"lowestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "comment":"Returns the position of the lowest-order/rightmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 7 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"flipBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"position",
                    "type":"Int32"
                }],
                "result":"Int8",
                "comment":"Returns `x` with the bit at position `position` flipped.\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 7 (leftmost bit)"
            },{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.\n The sign of x."
            },{
                "name":"rotateLeft",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int8",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` left by `distance` bits."
            },{
                "name":"numberOfTrailingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "comment":"Returns the number of zero bits following the\n lowest-order/rightmost one-bit in `x`.\n Returns 8 if x=0."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Int8",
                "comment":"Returns the maximum number representable by an `Int8`."
            },{
                "name":"highestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "comment":"Returns the position of the highest-order/leftmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 7 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int8",
                "comment":"Returns the absolute value of `x`.\n If the absolute value exceeds maxValue(), -1 is returned."
            },{
                "name":"max",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"y",
                    "type":"Int8"
                }],
                "result":"Int8",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"rotateRight",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"distance",
                    "type":"Int32"
                }],
                "result":"Int8",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` right by `distance` bits."
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Int8",
                "comment":"Returns the minimum number representable by an `Int8`."
            },{
                "name":"compare",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"y",
                    "type":"Int8"
                }],
                "result":"Int32",
                "comment":"Returns 1 if x > y, -1 if x < y, and 0 if x = y.\n The sign of x - y."
            },{
                "name":"min",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                },{
                    "name":"y",
                    "type":"Int8"
                }],
                "result":"Int8",
                "comment":"Returns the smaller of `x` and `y`."
            }]
        }
    }
}
