export default {
    "title":"Flix Standard Library",
    "namespaces":{
        "Result":{
            "defs":[{
                "name":"lift10",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t10"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"t9"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> t9 -> t10 -> u & l"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                },{
                    "name":"r3",
                    "type":"Result[t3, e]"
                },{
                    "name":"r4",
                    "type":"Result[t4, e]"
                },{
                    "name":"r5",
                    "type":"Result[t5, e]"
                },{
                    "name":"r6",
                    "type":"Result[t6, e]"
                },{
                    "name":"r7",
                    "type":"Result[t7, e]"
                },{
                    "name":"r8",
                    "type":"Result[t8, e]"
                },{
                    "name":"r9",
                    "type":"Result[t9, e]"
                },{
                    "name":"r10",
                    "type":"Result[t10, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the 10-ary function `f` to the values in `r1`, `r2`, ... `r10`.\n\n Returns the first `Err(e)` value if any of `r1`, `r2`, ... `r10` are `Err(e)`."
            },{
                "name":"mapErr",
                "tparams":[{
                    "name":"e1"
                },{
                    "name":"e2"
                },{
                    "name":"f"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Result[t, e2]",
                "effect":"f",
                "comment":"Returns `Err(f(e))` if `r` is `Err(e)`. Returns `Ok(v)` if `r` is `Ok(v)`."
            },{
                "name":"lift8",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> u & j"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                },{
                    "name":"r3",
                    "type":"Result[t3, e]"
                },{
                    "name":"r4",
                    "type":"Result[t4, e]"
                },{
                    "name":"r5",
                    "type":"Result[t5, e]"
                },{
                    "name":"r6",
                    "type":"Result[t6, e]"
                },{
                    "name":"r7",
                    "type":"Result[t7, e]"
                },{
                    "name":"r8",
                    "type":"Result[t8, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the 8-ary function `f` to the values in `r1`, `r2`, ... `r8`.\n\n Returns the first `Err(e)` value if any of `r1`, `r2`, ... `r8` are `Err(e)`."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"z",
                    "type":"a"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"a",
                "effect":"f",
                "comment":"Returns `f(z, v)` if `r` is `Ok(v)`. Otherwise returns `z`."
            },{
                "name":"lift5",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> u & g"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                },{
                    "name":"r3",
                    "type":"Result[t3, e]"
                },{
                    "name":"r4",
                    "type":"Result[t4, e]"
                },{
                    "name":"r5",
                    "type":"Result[t5, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the 5-ary function `f` to the values in `r1`, `r2`, ... `r5`.\n\n Returns the first `Err(e)` value if any of `r1`, `r2`, ... `r5` are `Err(e)`."
            },{
                "name":"lift9",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"t9"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> t9 -> u & k"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                },{
                    "name":"r3",
                    "type":"Result[t3, e]"
                },{
                    "name":"r4",
                    "type":"Result[t4, e]"
                },{
                    "name":"r5",
                    "type":"Result[t5, e]"
                },{
                    "name":"r6",
                    "type":"Result[t6, e]"
                },{
                    "name":"r7",
                    "type":"Result[t7, e]"
                },{
                    "name":"r8",
                    "type":"Result[t8, e]"
                },{
                    "name":"r9",
                    "type":"Result[t9, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the 9-ary function `f` to the values in `r1`, `r2`, ... `r9`.\n\n Returns the first `Err(e)` value if any of `r1`, `r2`, ... `r9` are `Err(e)`."
            },{
                "name":"toOption",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Option[t]",
                "effect":"Pure",
                "comment":"Returns `Some(v)` if `r` is `Ok(v)`. Otherwise returns `None`."
            },{
                "name":"getWithDefault",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                },{
                    "name":"d",
                    "type":"a"
                }],
                "result":"t",
                "effect":"Pure",
                "comment":"Returns `v` if `r` is `Ok(v)`. Otherwise returns `d`."
            },{
                "name":"lift6",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> u & h"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                },{
                    "name":"r3",
                    "type":"Result[t3, e]"
                },{
                    "name":"r4",
                    "type":"Result[t4, e]"
                },{
                    "name":"r5",
                    "type":"Result[t5, e]"
                },{
                    "name":"r6",
                    "type":"Result[t6, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the 6-ary function `f` to the values in `r1`, `r2`, ... `r6`.\n\n Returns the first `Err(e)` value if any of `r1`, `r2`, ... `r6` are `Err(e)`."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a ~> Unit"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to `v` if `r` is `Ok(v)`. Otherwise does nothing.\n\n The function `f` must be impure."
            },{
                "name":"forall",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if `r` is `Ok(v)` and the predicate `f(v)` evaluates to `true` or if `r` is `Err(w)`.\n Otherwise returns `false`.\n\n The function `f` must be pure."
            },{
                "name":"replace",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
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
                "result":"Result[t, e]",
                "effect":"Pure",
                "comment":"Returns `Ok(y)` if `r` is `Ok(x)`. Otherwise returns `r`."
            },{
                "name":"lift3",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> u & e"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                },{
                    "name":"r3",
                    "type":"Result[t3, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the ternary function `f` to the values in `r1`, `r2` and `r3`.\n\n Returns the first `Err(e)` value if any of `r1`, `r2` and `r3` are `Err(e)`."
            },{
                "name":"ap",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"r1",
                    "type":"Result[c -> b & d, a]"
                },{
                    "name":"r2",
                    "type":"Result[b, a]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the function in `r1` to the value in `r2`."
            },{
                "name":"lift7",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> u & i"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                },{
                    "name":"r3",
                    "type":"Result[t3, e]"
                },{
                    "name":"r4",
                    "type":"Result[t4, e]"
                },{
                    "name":"r5",
                    "type":"Result[t5, e]"
                },{
                    "name":"r6",
                    "type":"Result[t6, e]"
                },{
                    "name":"r7",
                    "type":"Result[t7, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the 7-ary function `f` to the values in `r1`, `r2`, ... `r7`.\n\n Returns the first `Err(e)` value if any of `r1`, `r2`, ... `r7` are `Err(e)`."
            },{
                "name":"lift4",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> u & f"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                },{
                    "name":"r3",
                    "type":"Result[t3, e]"
                },{
                    "name":"r4",
                    "type":"Result[t4, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the 4-ary function `f` to the values in `r1`, `r2`, `r3` and `r4`.\n\n Returns the first `Err(e)` value if any of `r1`, `r2`, `r3` and `r4` are `Err(e)`."
            },{
                "name":"count",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns `1` if `r` is `Ok(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `0`.\n\n The function `f` must be pure."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"List[t]",
                "effect":"Pure",
                "comment":"Returns a one-element list of the value `v` if `r` is `Ok(v)`. Otherwise returns the empty list."
            },{
                "name":"toMap",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[(b, c), a]"
                }],
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Returns a singleton map with the mapping `k -> v` if `o` is `Ok((k, v))`. Otherwise returns the empty map."
            },{
                "name":"find",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Option[t]",
                "effect":"Pure",
                "comment":"Returns `Some(v)` if `r` is `Ok(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `None`.\n\n The function `f` must be pure."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Set[t]",
                "effect":"Pure",
                "comment":"Returns a one-element set of the value `v` if `r` is `Ok(v)`. Otherwise returns the empty set."
            },{
                "name":"isOk",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` iff `r` is `Ok(v)`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                },{
                    "name":"z",
                    "type":"a"
                }],
                "result":"a",
                "effect":"f",
                "comment":"Returns `f(v, z)` if `r` is `Ok(v)`. Otherwise returns `z`."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> Result[c, a] & d"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Result[t2, e]",
                "effect":"f",
                "comment":"Returns `f(v)` if `r` is `Ok(v)`. Returns `Err(w)` if `r` is `Err(w)`."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if `r` is `Ok(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `false`.\n\n The function `f` must be pure."
            },{
                "name":"lift2",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> u & d"
                },{
                    "name":"r1",
                    "type":"Result[t1, e]"
                },{
                    "name":"r2",
                    "type":"Result[t2, e]"
                }],
                "result":"Result[u, e]",
                "effect":"f",
                "comment":"Applies the binary function `f` to the values in `r1` and `r2`.\n\n Returns the first `Err(e)` value if either of `r1` and `r2` are `Err(e)`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Result[t2, e]",
                "effect":"f",
                "comment":"Returns `Ok(f(v))` if `r` is `Ok(v)`. Returns `Err(w)` if `r` is `Err(w)`."
            },{
                "name":"withDefault",
                "tparams":[{
                    "name":"e1"
                },{
                    "name":"e2"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"r1",
                    "type":"Result[b, a]"
                },{
                    "name":"r2",
                    "type":"Result[b, e2]"
                }],
                "result":"Result[t, e2]",
                "effect":"Pure",
                "comment":"Returns `Ok(v)` if `r1` is `Ok(v)`. Otherwise returns `r2`."
            },{
                "name":"isErr",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Result[b, a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` iff `r` is `Err(w)`."
            }]
        },
        "Console.Color.Ansi":{
            "defs":[{
                "name":"toRGB",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Ansi"
                }],
                "result":"(Int32, Int32, Int32)",
                "effect":"Pure",
                "comment":"Returns the RGB-triplet for the given color `c`.\n\n Based on the Ubuntu settings.\n\n See https://en.wikipedia.org/wiki/ANSI_escape_code#Colors"
            },{
                "name":"downsample",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"(Int32, Int32, Int32)"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Down sample the given color `c` to an ANSI color code."
            },{
                "name":"toFG",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Ansi"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the foreground color of the given color `c`."
            }]
        },
        "Validation":{
            "defs":[{
                "name":"lift5",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> u & g"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                },{
                    "name":"v3",
                    "type":"Validation[t3, e]"
                },{
                    "name":"v4",
                    "type":"Validation[t4, e]"
                },{
                    "name":"v5",
                    "type":"Validation[t5, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the 5-ary function `f` to the values in `v1`, `v2`, ... `v5`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if any of `v1`, `v2`, ... `v5` are `Failure(xs1)`."
            },{
                "name":"lift10",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t10"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"t9"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> t9 -> t10 -> u & l"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                },{
                    "name":"v3",
                    "type":"Validation[t3, e]"
                },{
                    "name":"v4",
                    "type":"Validation[t4, e]"
                },{
                    "name":"v5",
                    "type":"Validation[t5, e]"
                },{
                    "name":"v6",
                    "type":"Validation[t6, e]"
                },{
                    "name":"v7",
                    "type":"Validation[t7, e]"
                },{
                    "name":"v8",
                    "type":"Validation[t8, e]"
                },{
                    "name":"v9",
                    "type":"Validation[t9, e]"
                },{
                    "name":"v10",
                    "type":"Validation[t10, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the 10-ary function `f` to the values in `v1`, `v2`, ... `v10`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if any of `v1`, `v2`, ... `v10` are `Failure(xs1)`."
            },{
                "name":"sequence",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[Validation[a, b]]"
                }],
                "result":"Validation[List[t], e]",
                "effect":"Pure",
                "comment":"Returns `Success(v1 :: v2 :: ... :: vn)` if each of `xs_i` is `Success(v_i)`.\n\n Otherwise returns `Failure(e1 :: ... :: en)` with all of the failures concatenated."
            },{
                "name":"withDefault",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"v1",
                    "type":"Validation[a, b]"
                },{
                    "name":"v2",
                    "type":"Validation[a, b]"
                }],
                "result":"Validation[t, e]",
                "effect":"Pure",
                "comment":"Returns `v1` if it is `Success(v)`. Otherwise returns `v2`."
            },{
                "name":"lift4",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> u & f"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                },{
                    "name":"v3",
                    "type":"Validation[t3, e]"
                },{
                    "name":"v4",
                    "type":"Validation[t4, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the 4-ary function `f` to the values in `v1`, `v2`, `v3` and `v4`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if any of `v1`, `v2`, `v3` and `v4` are `Failure(xs1)`."
            },{
                "name":"lift2",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> u & d"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the binary function `f` to the values in `v1` and `v2`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if either or both of `v1` or `v2` are `Failure(xs1)`."
            },{
                "name":"lift9",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"t9"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> t9 -> u & k"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                },{
                    "name":"v3",
                    "type":"Validation[t3, e]"
                },{
                    "name":"v4",
                    "type":"Validation[t4, e]"
                },{
                    "name":"v5",
                    "type":"Validation[t5, e]"
                },{
                    "name":"v6",
                    "type":"Validation[t6, e]"
                },{
                    "name":"v7",
                    "type":"Validation[t7, e]"
                },{
                    "name":"v8",
                    "type":"Validation[t8, e]"
                },{
                    "name":"v9",
                    "type":"Validation[t9, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the 9-ary function `f` to the values in `v1`, `v2`, ... `v9`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if any of `v1`, `v2`, ... `v9` are `Failure(xs1)`."
            },{
                "name":"toOption",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"v",
                    "type":"Validation[b, a]"
                }],
                "result":"Option[t]",
                "effect":"Pure",
                "comment":"Converts a Validation to an Option.\n\n Returns `Some(t)` if `v` is `Success(t)`.\n Returns `None` otherwise."
            },{
                "name":"ap",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"v1",
                    "type":"Validation[a -> c & d, b]"
                },{
                    "name":"v2",
                    "type":"Validation[a, b]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the function in `v1` to the value in `v2`."
            },{
                "name":"traverse",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"f"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Validation[b, d] & c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Validation[List[b], e]",
                "effect":"f",
                "comment":"Returns `Success(v1 :: v2 :: ... v :: vn)` if each of `f(xs_i)` is `Success(v_i)`.\n\n Otherwise returns `Failure(e1 :: ... :: en)` with all of the failures concatenated."
            },{
                "name":"forall",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"v",
                    "type":"Validation[a, b]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if `v` is `Success(t)` and `f(t)` is true or if `v` is `Failure`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"v",
                    "type":"Validation[a, b]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Returns `Success(f(v))` if `o` is `Success(v)`. Otherwise returns `v`."
            },{
                "name":"lift8",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> u & j"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                },{
                    "name":"v3",
                    "type":"Validation[t3, e]"
                },{
                    "name":"v4",
                    "type":"Validation[t4, e]"
                },{
                    "name":"v5",
                    "type":"Validation[t5, e]"
                },{
                    "name":"v6",
                    "type":"Validation[t6, e]"
                },{
                    "name":"v7",
                    "type":"Validation[t7, e]"
                },{
                    "name":"v8",
                    "type":"Validation[t8, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the 8-ary function `f` to the values in `v1`, `v2`, ... `v8`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if any of `v1`, `v2`, ... `v8` are `Failure(xs1)`."
            },{
                "name":"lift7",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> u & i"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                },{
                    "name":"v3",
                    "type":"Validation[t3, e]"
                },{
                    "name":"v4",
                    "type":"Validation[t4, e]"
                },{
                    "name":"v5",
                    "type":"Validation[t5, e]"
                },{
                    "name":"v6",
                    "type":"Validation[t6, e]"
                },{
                    "name":"v7",
                    "type":"Validation[t7, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the 7-ary function `f` to the values in `v1`, `v2`, ... `v7`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if any of `v1`, `v2`, ... `v7` are `Failure(xs1)`."
            },{
                "name":"toResult",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"v",
                    "type":"Validation[b, a]"
                }],
                "result":"Result[t, Nel[e]]",
                "effect":"Pure",
                "comment":"Converts a Validation to a Result.\n\n Returns `Ok(t)` if `v` is `Success(t)`.\n Returns `Err(e)` if `v` is `Failure(e)`."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"v",
                    "type":"Validation[b, a]"
                }],
                "result":"List[t]",
                "effect":"Pure",
                "comment":"Converts a Validation to a List.\n\n Returns `t :: Nil` if `v` is `Success(v)`.\n Returns `Nil` if `v` is `Failure(e)`."
            },{
                "name":"getWithDefault",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"v",
                    "type":"Validation[a, b]"
                },{
                    "name":"d",
                    "type":"a"
                }],
                "result":"t",
                "effect":"Pure",
                "comment":"Returns `t` if `v` is `Success(t).` Otherwise returns `d`."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"v",
                    "type":"Validation[a, b]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `v` is `Success(t)` and `f(t)` is true.\n\n Returns `false` if `v` is `Failure`."
            },{
                "name":"lift6",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> u & h"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                },{
                    "name":"v3",
                    "type":"Validation[t3, e]"
                },{
                    "name":"v4",
                    "type":"Validation[t4, e]"
                },{
                    "name":"v5",
                    "type":"Validation[t5, e]"
                },{
                    "name":"v6",
                    "type":"Validation[t6, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the 6-ary function `f` to the values in `v1`, `v2`, ... `v6`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if any of `v1`, `v2`, ... `v6` are `Failure(xs1)`."
            },{
                "name":"lift3",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> u & e"
                },{
                    "name":"v1",
                    "type":"Validation[t1, e]"
                },{
                    "name":"v2",
                    "type":"Validation[t2, e]"
                },{
                    "name":"v3",
                    "type":"Validation[t3, e]"
                }],
                "result":"Validation[u, e]",
                "effect":"f",
                "comment":"Applies the ternary function `f` to the values in `v1`, `v2` and `v3`.\n\n Returns the concatenation of all the failures as `Failure(xs)` if any of `v1`, `v2` and `v3` are `Failure(xs1)`."
            }]
        },
        "Map":{
            "defs":[{
                "name":"toList",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"List[(k, v)]",
                "effect":"Pure",
                "comment":"Returns the map `m` as a list of key-value pairs."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[k, b]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all values in `m` going from right to left.\n\n That is, the result is of the form: `f(v1, ...f(vn-1, f(vn, s)))`."
            },{
                "name":"__eq",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[k, v]"
                },{
                    "name":"m2",
                    "type":"Map[k, v]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `m1` and `m2` and equal, i.e. they have the same mappings."
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if at least one mapping in `m` satisfies the predicate `f`.\n\n Returns `false` if `m` is the empty map.\n\n The function `f` must be pure."
            },{
                "name":"insertWith",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"v",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Updates `m` with `k -> f(v, v1)` if `k -> v1` is in `m`.\n\n Otherwise, updates `m` with `k -> v`."
            },{
                "name":"reduceLeftWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b) & c"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"e",
                "comment":"Applies `f` to all mappings in `m` going from left to right until a single mapping `(k, v)` is obtained.  Returns `Some((k, v))`.\n\n That is, the result is of the form: `Some(f(...f(f(k1, v1, k2, v2), k3, v3)..., kn, vn))`\n\n Returns `None` if `m` is the empty map."
            },{
                "name":"intersectionWith",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"m1",
                    "type":"Map[k, b]"
                },{
                    "name":"m2",
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Returns the intersection of `m1` and `m2` where key collisions are resolved with the merge function `f`."
            },{
                "name":"reduceRightWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b) & c"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"e",
                "comment":"Applies `f` to all mappings in `m` going from right to left until a single mapping `(k, v)` is obtained.  Returns `Some((k, v))`.\n\n That is, the result is of the form: `Some(f(k1, v1, ...f(kn-2, vn-2, f(kn-1, vn-1, kn, vn))...))`\n\n Returns `None` if `m` is the empty map."
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
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Returns a map of all mappings `k -> v` in `m` where `v` satisfies the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"getWithDefault",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"d",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[k, b]"
                }],
                "result":"v",
                "effect":"Pure",
                "comment":"Returns `v` if `k -> v` is in `m`.\n\n Otherwise, returns `d`."
            },{
                "name":"differenceWith",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> Option[a] & b"
                },{
                    "name":"m1",
                    "type":"Map[k, b]"
                },{
                    "name":"m2",
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Returns the difference of `m1` and `m2`, i.e. `m1 - m2`.\n\n When a key `k` is in both `m1` and `m2`, the associated values are passed to the merge function `f`.\n If `f` returns `None` the mapping with `k` is thrown away (proper set difference).\n If `f` returns `Some(v)` the mapping `k -> v` is included in the result."
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if `m` is the empty map, i.e. `Map(Nil)`."
            },{
                "name":"unfoldWithIter",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"next",
                    "type":"Unit ~> Option[(a, b)]"
                }],
                "result":"Map[k, v]",
                "effect":"Impure",
                "comment":"Build a map by applying the function `next` to `()`. `next` is expected to encapsulate\n a stateful resource such as a file handle that can be iterated.\n\n `next` should return `Some(k,v)` to signal a new key-value pair `k` and `v`.\n\n `next` should return `None` to signal the end of building the map."
            },{
                "name":"unionWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b -> b & c"
                },{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Returns the union of `m1` and `m2` where key collisions are resolved with the merge function `f`, taking both the key and values."
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
                "result":"Option[(k, v)]",
                "effect":"Pure",
                "comment":"Optionally returns the first mapping of `m` that satisfies the predicate `f` when searching from left to right.\n\n The function `f` must be pure."
            },{
                "name":"isProperSubmapOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[k, v]"
                },{
                    "name":"m2",
                    "type":"Map[k, v]"
                }],
                "result":"Bool",
                "effect":"Pure",
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
                    "type":"k -> v -> Bool"
                },{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Pure",
                "comment":"Alias for `findLeft`.\n\n The function `f` must be pure."
            },{
                "name":"update",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Option[a] & b"
                },{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"m",
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Updates `m` with `k -> v1` if `k -> v` is in `m` and `f(v) = Some(v1)`. Otherwise, returns `m`."
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
                "effect":"Pure",
                "comment":"Returns the number of mappings in `m` that satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"foldWithKey",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> k -> v -> c & d"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"b",
                "effect":"e",
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
                "result":"Map[k, v]",
                "effect":"Pure",
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
                "result":"Option[(k, v)]",
                "effect":"Pure",
                "comment":"Optionally returns the first mapping of `m` that satisfies the predicate `f` when searching from right to left.\n\n The function `f` must be pure."
            },{
                "name":"mapWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v1"
                },{
                    "name":"v2"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> c & d"
                },{
                    "name":"m",
                    "type":"Map[b, a]"
                }],
                "result":"Map[k, v2]",
                "effect":"e",
                "comment":"Returns a map with mappings `k -> f(k, v)` for every `k -> v` in `m`."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"v -> v -> v & b"
                },{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"Option[v]",
                "effect":"e",
                "comment":"Alias for `reduceLeft`."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"m",
                    "type":"Map[b, a]"
                }],
                "result":"Option[v]",
                "effect":"e",
                "comment":"Applies `f` to all values in `m` going from left to right until a single value `v` is obtained.  Returns `Some(v)`.\n\n That is, the result is of the form: `Some(f(...f(f(v1, v2), v3)..., vn))`\n\n Returns `None` if `m` is the empty map."
            },{
                "name":"foldRightWithKey",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c -> c & d"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all key-value pairs in `m` going from right to left.\n\n That is, the result is of the form: `f(k1, v1, ...f(kn-1, vn-1, f(kn, vn, s)))`."
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
                "effect":"Pure",
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
                "result":"Option[v]",
                "effect":"Pure",
                "comment":"Returns `Some(v)` if `k -> v` is in `m`.\n\n Otherwise returns `None`."
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if all mappings in `m` satisfy the predicate `f`.\n\n Returns `true` if `m` is the empty map.\n\n The function `f` must be pure."
            },{
                "name":"intersection",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[k, v]"
                },{
                    "name":"m2",
                    "type":"Map[k, v]"
                }],
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Returns the left-biased intersection of `m1` and `m2`.\n\n That is, key collisions are resolved by taking the mapping from `m1`."
            },{
                "name":"adjustWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Updates `m` with `k -> f(k, v)` if `k -> v` is in `m`. Otherwise, returns `m`."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[k, b]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all values in `m` going from left to right.\n\n That is, the result is of the form: `f(...f(f(s, v1), v2)..., vn)`."
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
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Returns a map of all mappings `k -> v` in `m` where `(k, v)` satisfies the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> v -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Alias for `foldLeft`."
            },{
                "name":"differenceWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"k -> b -> b -> Option[b] & c"
                },{
                    "name":"m1",
                    "type":"Map[k, b]"
                },{
                    "name":"m2",
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Returns the difference of `m1` and `m2`, i.e. `m1 - m2`.\n\n When a key `k` is in both `m1` and `m2`, `k` and the associated values are passed to the merge function `f`.\n If `f` returns `None` the mapping with `k` is thrown away (proper set difference).\n If `f` returns `Some(v)` the mapping `k -> v` is included in the result."
            },{
                "name":"insertWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b -> b & c"
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
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Updates `m` with `k -> f(k, v, v1)` if `k -> v1` is in `m`.\n\n Otherwise, updates `m` with `k -> v`."
            },{
                "name":"difference",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[k, v]"
                },{
                    "name":"m2",
                    "type":"Map[k, v]"
                }],
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Returns the difference of `m1` and `m2`, i.e. `m1 - m2`.\n\n That is, returns the map `m1` with the keys removed that are in `m2`."
            },{
                "name":"valuesOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"List[v]",
                "effect":"Pure",
                "comment":"Returns the values of `m`."
            },{
                "name":"__cmp",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[k, v]"
                },{
                    "name":"m2",
                    "type":"Map[k, v]"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the result of a three-way comparison between `m1` and `m2`.\n\n Returns n < 0 if all mappings in `m1` are lexicographically smaller than `m2`.\n Returns n = 0 if all mappings `m1` are equal to `m2`.\n Returns n > 0 if all mappings in `m1` is lexicographically greater than `m1`."
            },{
                "name":"union",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[k, v]"
                },{
                    "name":"m2",
                    "type":"Map[k, v]"
                }],
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Returns the left-biased union of `m1` and `m2`.\n\n That is, key collisions are resolved by taking the mapping from `m1`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v1"
                },{
                    "name":"v2"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"m",
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v2]",
                "effect":"e",
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
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Returns the singleton map where key `k` is mapped to value `v`.\n\n `Map#{k -> v}` is syntactic sugar for `singleton` (`Map#{k -> v} = singleton(k, v)`)."
            },{
                "name":"foldLeftWithKey",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c & d"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all key-value pairs in `m` going from left to right.\n\n That is, the result is of the form: `f(...f(f(s, k1, v1), k2, v2)..., vn)`."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"Set[(k, v)]",
                "effect":"Pure",
                "comment":"Returns the map `m` as a set of key-value pairs."
            },{
                "name":"unfold",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"s"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"s -> Option[(b, c, s)] & d"
                },{
                    "name":"st",
                    "type":"s"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Build a map by applying `f` to the seed value `st`.\n\n `f` should return `Some(k,v,st1)` to signal a new key-value pair `k` and `v` and a new seed value `st1`.\n\n `f` should return `None` to signal the end of building the map."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"m",
                    "type":"Map[b, a]"
                }],
                "result":"Option[v]",
                "effect":"e",
                "comment":"Applies `f` to all values in `m` going from right to left until a single value `v` is obtained.  Returns `Some(v)`.\n\n That is, the result is of the form: `Some(f(v1, ...f(vn-2, f(vn-1, vn))...))`\n\n Returns `None` if `m` is the empty map."
            },{
                "name":"reduceWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"k -> v -> k -> v -> (k, v) & c"
                },{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"Option[(k, v)]",
                "effect":"e",
                "comment":"Alias for `reduceLeftWithKey`."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b ~> Unit"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to every element of `xs`.\n\n The function `f` must be impure."
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
                "effect":"Pure",
                "comment":"Returns the size of `m`."
            },{
                "name":"unionWith",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"m1",
                    "type":"Map[k, b]"
                },{
                    "name":"m2",
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Returns the union of `m1` and `m2` where key collisions are resolved with the merge function `f`."
            },{
                "name":"toMutable",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"MutMap[k, v]",
                "effect":"Impure",
                "comment":"Returns `m` as a mutable set."
            },{
                "name":"keysOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"Map[k, v]"
                }],
                "result":"Set[k]",
                "effect":"Pure",
                "comment":"Returns the keys of `m`."
            },{
                "name":"empty",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[],
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Returns the empty map.\n\n `Map#{}` is syntactic sugar for `empty` (`Map#{} = empty()`)."
            },{
                "name":"isSubmapOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"Map[k, b]"
                },{
                    "name":"m2",
                    "type":"Map[k, b]"
                }],
                "result":"Bool",
                "effect":"Pure",
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
                "result":"Map[k, v]",
                "effect":"Pure",
                "comment":"Removes the mapping `k` from the map `m`."
            },{
                "name":"adjust",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a & b"
                },{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"m",
                    "type":"Map[k, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Updates `m` with `k -> f(v)` if `k -> v` is in `m`.\n\n Otherwise, returns `m`."
            },{
                "name":"updateWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Option[b] & c"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"Map[a, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Updates `m` with `k -> v1` if `k -> v` is in `m` and `f(k, v) = Some(v1)`. Otherwise, returns `m`."
            },{
                "name":"intersectionWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b -> b & c"
                },{
                    "name":"m1",
                    "type":"Map[a, b]"
                },{
                    "name":"m2",
                    "type":"Map[a, b]"
                }],
                "result":"Map[k, v]",
                "effect":"e",
                "comment":"Returns the intersection of `m1` and `m2` where key collisions are resolved with the merge function `f`, taking both the key and values."
            }]
        },
        "List":{
            "defs":[{
                "name":"reduceRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Option[a]",
                "effect":"e",
                "comment":"Applies `f` to all elements in `xs` going from right to left until a single value `v` is obtained.  Returns `Some(v)`.\n\n That is, the result is of the form: `Some(f(x1, ...f(xn-2, f(xn-1, xn))...))`\n\n Returns `None` if `xs` is empty."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from left to right.\n\n That is, the result is of the form: `f(...f(f(s, x1), x2)..., xn)`."
            },{
                "name":"mapWithIndex",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Int32 -> b & c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[b]",
                "effect":"e",
                "comment":"Returns the result of applying `f` to every element in `xs` along with that element's index.\n\n That is, the result is of the form: `f(x1, 0) :: f(x2, 1) :: ...`."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Option[a]",
                "effect":"e",
                "comment":"Applies `f` to all elements in `xs` going from left to right until a single value `v` is obtained.  Returns `Some(v)`.\n\n That is, the result is of the form: `Some(f(...f(f(x1, x2), x3)..., xn))`\n\n Returns `None` if `xs` is empty."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Set[a]",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if `xs` is an infix of `ys`."
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `xs` with its elements rotated `n` positions to the left.\n\n That is, returns a new list where the first `n mod length(xs)` elements in `xs`\n are the last `n mod length(xs)` elements of the new list."
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if `xs` is a suffix of `ys`."
            },{
                "name":"foldLeft2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c & d"
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
                "result":"c",
                "effect":"e",
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns the concatenation of the elements in `xs`."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"b",
                "effect":"e",
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns the sublist of `xs` from index `b` (inclusive) to index `e` (exclusive).\n\n That is, an element at index `i` in `xs` is part of the returned sublist if and only if `i >= b` and `i < e`.\n Note: Indices that are out of bounds in `xs` are not considered (i.e. slice(b, e, xs) = slice(max(0,b), min(length(xs),e), xs))."
            },{
                "name":"foldRight2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c -> c & d"
                },{
                    "name":"c",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[b]"
                }],
                "result":"c",
                "effect":"e",
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns the concatenation of the elements in `ys` with the elements of `xs` inserted between every two adjacent elements.\n\n That is, returns `y1 :: x1 ... xn :: y2 :: ... yn-1 :: x1 :: ... :: xn :: yn :: Nil`."
            },{
                "name":"transpose",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[List[a]]"
                }],
                "result":"List[List[a]]",
                "effect":"Pure",
                "comment":"Returns the transpose of `xs`.\n\n Returns `xs` if the dimensions of the elements of `xs` are mismatched."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a ~> Unit"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to every element of `xs`.\n\n The function `f` must be impure."
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
                "result":"(List[a], List[b])",
                "effect":"Pure",
                "comment":"Returns a pair of lists, the first containing all first components in `xs`\n and the second containing all second components in `xs`."
            },{
                "name":"zipWith",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c & d"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"List[c]",
                "effect":"e",
                "comment":"Returns a list where the element at index `i` is `f(a, b)` where\n `a` is the element at index `i` in `xs` and `b` is the element at index `i` in `ys`.\n\n If either `xs` or `ys` becomes depleted, then no further elements are added to the resulting list."
            },{
                "name":"scan",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"b"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[b]",
                "effect":"e",
                "comment":"Alias for `scanLeft`."
            },{
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `xs` without the longest prefix that satisfies the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"unfoldWithIter",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"next",
                    "type":"Unit ~> Option[a]"
                }],
                "result":"List[a]",
                "effect":"Impure",
                "comment":"Build a list by applying the function `next` to `()`. `next` is expected to encapsulate\n a stateful resource such as a file handle that can be iterated.\n\n `next` should return `Some(a)` to signal a new list element `a`.\n\n `next` should return `None` to signal the end of building the list."
            },{
                "name":"findMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Option[b] & c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Option[b]",
                "effect":"e",
                "comment":"Returns the first non-None result of applying the partial function `f` to each element of `xs`.\n\n Returns `None` if every element of `xs` is `None`."
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
                "result":"List[Int32]",
                "effect":"Pure",
                "comment":"Returns a list of all integers between `b` (inclusive) and `e` (exclusive).\n\n Returns `Nil` if `b >= e`."
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `xs` with its elements rotated `n` positions to the right.\n\n That is, returns a new list where the last `n mod length(xs)` elements in `xs`\n are the first `n mod length(xs)` elements of the new list."
            },{
                "name":"head",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Returns `Some(x)` if `x` is the first element of `xs`.\n\n Returns `None` if `xs` is empty."
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
                "effect":"Pure",
                "comment":"Returns true if and only if `xs` is the empty list, i.e. `Nil`."
            },{
                "name":"unfoldWithOkIter",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"next",
                    "type":"Unit ~> Result[Option[a], e]"
                }],
                "result":"Result[List[a], e]",
                "effect":"Impure",
                "comment":"Build a list by applying the function `next` to `()`. `next` is expected to encapsulate\n a stateful resource such as a file handle that can be iterated.\n\n `next` should return `Ok(Some(a)` to signal a new list element `Ok(a)`.\n\n `next` should return `Ok(None)` to signal the end of building the list.\n\n `next` should return `Err(e)` to signal that an error occurred. The function returns `Err(e)`."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"xs",
                    "type":"List[Char]"
                }],
                "result":"String",
                "effect":"Pure",
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
                "result":"List[a]",
                "effect":"Pure",
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
                "effect":"Pure",
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns the first `n` elements of `xs`.\n\n Returns `xs` if `n > length(xs)`.\n Returns `Nil` if `n < 0`."
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
                "result":"(List[a], List[a])",
                "effect":"Pure",
                "comment":"Returns a pair of lists `(ys, zs)`.\n\n `ys` contains all elements of `xs` that satisfy the predicate `f`.\n `zs` contains all elements of `xs` that do not satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"scanLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"b"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[b]",
                "effect":"e",
                "comment":"Accumulates the result of applying `f` to `xs` going left to right.\n\n That is, the result is of the form: `s :: f(s, x1) :: f(f(s, x1), x2)  ...`."
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns a list of every element in `xs` that satisfies the predicate `f`.\n\n The function `f` must be pure."
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
                "effect":"Pure",
                "comment":"Returns the position of `a` in `xs`.\n\n Returns `-1` if `a` does not exist in `xs`."
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
                "result":"List[List[a]]",
                "effect":"Pure",
                "comment":"Partitions `xs` into sublists such that for any two elements `x` and `y` in a sublist, `f(x, y)` is true.\n\n A sublist is created by iterating through the remaining elements of `xs` from left to right and adding an\n element to the sublist if and only if doing so creates no conflicts with the elements already in the sublist.\n\n The function `f` must be pure."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> List[b] & c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[b]",
                "effect":"e",
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `ys` appended to `xs`.\n\n The infix operator `:::` is an alias for `append` (`xs ::: ys = append(xs, ys)`)."
            },{
                "name":"last",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Returns `Some(x)` if `x` is the last element of `xs`.\n\n Returns `None` if `xs` is empty."
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from left to right.\n\n The function `f` must be pure."
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
                "effect":"Pure",
                "comment":"Returns the number of elements in `xs` that satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"subsequences",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[List[a]]",
                "effect":"Pure",
                "comment":"Returns all subsequences of `xs` in lexicographical order by element indices in `xs`.\n\n That is, `xs` is the first subsequence and `Nil` is the last subsequence."
            },{
                "name":"fold2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c & d"
                },{
                    "name":"c",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[b]"
                }],
                "result":"c",
                "effect":"e",
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `ys` with the `n` elements starting at index `i` replaced with the elements of `xs`.\n\n If any of the indices `i, i+1, i+2, ... , i+n-1` are out of range in `ys` then no patching is done at these indices.\n If `xs` becomes depleted then no further patching is done.\n If patching occurs at index `i+j` in `ys`, then the element at index `j` in `xs` is used."
            },{
                "name":"filterMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Option[b] & c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[b]",
                "effect":"e",
                "comment":"Collects the results of applying the partial function `f` to every element in `xs`."
            },{
                "name":"__eq",
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if `xs` and `ys` and equal."
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Alias for `findLeft`.\n\n The function `f` must be pure."
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
                "effect":"Pure",
                "comment":"Returns the length of `xs`."
            },{
                "name":"unfold",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                },{
                    "name":"s"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"s -> Option[(a, s)] & c"
                },{
                    "name":"st",
                    "type":"s"
                }],
                "result":"List[a]",
                "effect":"e",
                "comment":"Build a list by applying `f` to the seed value `st`.\n\n `f` should return `Some(a,st1)` to signal a new list element `a` and a new seed value `st1`.\n\n `f` should return `None` to signal the end of building the list."
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `xs` with `a` inserted between every two adjacent elements."
            },{
                "name":"init",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Option[List[a]]",
                "effect":"Pure",
                "comment":"Returns the sublist of `xs` without the last element.\n Returns `None` if the list `xs` is `Nil`."
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from right to left.\n\n The function `f` must be pure."
            },{
                "name":"toArray",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns the list `xs` as an array."
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if at least one element in `xs` satisfies the predicate `f`.\n\n Returns `false` if `xs` is empty.\n\n The function `f` must be pure."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from right to left.\n\n That is, the result is of the form: `f(x1, ...f(xn-1, f(xn, s))...)`."
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if `xs` contains the element `a`."
            },{
                "name":"scanRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[b]",
                "effect":"e",
                "comment":"Accumulates the result of applying `f` to `xs` going right to left.\n\n That is, the result is of the form: `... f(xn-1, f(xn, s)) :: f(xn, s) :: s`."
            },{
                "name":"reverse",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns the reverse of `xs`."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Option[a]",
                "effect":"e",
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `xs` with the element at index `i` replaced by `a`.\n\n Returns `xs` if `i < 0` or `i > length(xs)-1`."
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
                "result":"(List[a], List[a])",
                "effect":"Pure",
                "comment":"Returns a pair of lists `(ys, zs)`.\n\n `ys` is the longest prefix of `xs` that satisfies the predicate `f`.\n `zs` is the remainder of `xs`.\n\n The function `f` must be pure."
            },{
                "name":"permutations",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[List[a]]",
                "effect":"Pure",
                "comment":"Returns all permutations of `xs` in lexicographical order by element indices in `xs`.\n\n That is, `xs` is the first permutation and `reverse(xs)` is the last permutation."
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
                "result":"List[(a, b)]",
                "effect":"Pure",
                "comment":"Returns a list where the element at index `i` is `(a, b)` where\n `a` is the element at index `i` in `xs` and `b` is the element at index `i` in `ys`.\n\n If either `xs` or `ys` becomes depleted, then no further elements are added to the resulting list."
            },{
                "name":"map2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c & d"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[b]"
                }],
                "result":"List[c]",
                "effect":"e",
                "comment":"Returns a list where the element at index `i` is `f(a, b)` where\n `a` is the element at index `i` in `xs` and `b` is the element at index `i` in `ys`.\n\n If either `xs` or `ys` becomes depleted, then no further elements are added to the resulting list.\n Functionally equivalent to zipWith."
            },{
                "name":"sortWith",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"cmp",
                    "type":"a -> a -> Int32"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Sort list `xs` with the comparing function `cmp`.\n\n The sort implementation is a mergesort.\n Acknowledgement: derived from Thomas Nordin's `sortBy` in the Haskell base libraries."
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns a list with the element `a` repeated `n` times.\n\n Returns `Nil` if `n < 0`."
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns the longest prefix of `xs` that satisfies the predicate `f`.\n\n The function `f` must be pure."
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if all elements in `xs` satisfy the predicate `f`.\n\n Returns `true` if `xs` is empty.\n\n The function `f` must be pure."
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
                "result":"Map[a, b]",
                "effect":"Pure",
                "comment":"Returns the association list `xs` as a map.\n\n If `xs` contains multiple mappings with the same key, `toMap` does not\n make any guarantees about which mapping will be in the resulting map."
            },{
                "name":"flatMap2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> List[c] & d"
                },{
                    "name":"xs",
                    "type":"List[a]"
                },{
                    "name":"ys",
                    "type":"List[a]"
                }],
                "result":"List[c]",
                "effect":"e",
                "comment":"Concatenates the results of applying `f` pairwise to the elements of `xs` and `ys`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"List[b]",
                "effect":"e",
                "comment":"Returns the result of applying `f` to every element in `xs`.\n\n That is, the result is of the form: `f(x1) :: f(x2) :: ...`."
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `xs` without the first `n` elements.\n\n Returns `Nil` if `n > length(xs)`.\n Returns `xs` if `n < 0`."
            }]
        },
        "Set":{
            "defs":[{
                "name":"isEmpty",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns true if and only if `xs` is the empty set."
            },{
                "name":"toMutable",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"MutSet[a]",
                "effect":"Impure",
                "comment":"Returns `xs` as a mutable set."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"b",
                "effect":"e",
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
                "result":"Set[Set[a]]",
                "effect":"Pure",
                "comment":"Returns all subsets of `xs`."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Option[a]",
                "effect":"e",
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
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns the set `xs` as a list."
            },{
                "name":"__eq",
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if `xs` and `ys` are equal, i.e. they have the same elements."
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
                "result":"Set[a]",
                "effect":"Pure",
                "comment":"Returns the difference of `xs` and `ys`, i.e. `xs - ys`."
            },{
                "name":"empty",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[],
                "result":"Set[a]",
                "effect":"Pure",
                "comment":"Returns the empty set.\n\n `Set#{}` is syntactic sugar for `empty` (`Set#{} = empty()`)."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Option[a]",
                "effect":"e",
                "comment":"Alias for `reduceLeft`."
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
                "effect":"Pure",
                "comment":"Returns the number of elements in `xs` that satisfy the predicate `f`.\n\n The function `f` must be pure."
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if all elements in `xs` satisfy the predicate `f`.\n\n Returns `true` if `xs` is the empty set.\n\n The function `f` must be pure."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Set[b] & c"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Set[b]",
                "effect":"e",
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
                "result":"Set[a]",
                "effect":"Pure",
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
                "result":"Set[a]",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns `true` if and only if at least one element in `xs` satisfies the predicate `f`.\n\n Returns `false` if `xs` is the empty set.\n\n The function `f` must be pure."
            },{
                "name":"map",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Set[b]",
                "effect":"e",
                "comment":"Returns the result of applying `f` to every element in `xs`.\n\n Note: The returned set may be smaller than `xs`."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from left to right.\n\n That is, the result is of the form: `f(...f(f(s, x1), x2)..., xn)`."
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
                "result":"(Set[a], Set[a])",
                "effect":"Pure",
                "comment":"Returns a pair of sets `(ys, zs)`.\n\n `ys` contains all elements of `xs` that satisfy the predicate `f`.\n `zs` contains all elements of `xs` that do not satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"flatten",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Set[Set[a]]"
                }],
                "result":"Set[a]",
                "effect":"Pure",
                "comment":"Returns the union of the elements in `xs`."
            },{
                "name":"singleton",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                }],
                "result":"Set[a]",
                "effect":"Pure",
                "comment":"Returns the singleton set containing `x`.\n\n `Set#{x}` is syntactic sugar for `singleton` (`Set#{x} = singleton(x)`)."
            },{
                "name":"unfold",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                },{
                    "name":"s"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"s -> Option[(b, s)] & c"
                },{
                    "name":"st",
                    "type":"s"
                }],
                "result":"Set[a]",
                "effect":"e",
                "comment":"Build a set by applying `f` to the seed value `st`.\n\n `f` should return `Some(a,st1)` to signal a new set element `a` and a new seed value `st1`.\n\n `f` should return `None` to signal the end of building the set."
            },{
                "name":"unfoldWithIter",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"next",
                    "type":"Unit ~> Option[a]"
                }],
                "result":"Set[a]",
                "effect":"Impure",
                "comment":"Build a set by applying the function `next` to `()`. `next` is expected to encapsulate\n a stateful resource such as a file handle that can be iterated.\n\n `next` should return `Some(a)` to signal a value pair `a`.\n\n `next` should return `None` to signal the end of building the set."
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
                "result":"Set[a]",
                "effect":"Pure",
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
                "result":"Map[a, b]",
                "effect":"Pure",
                "comment":"Returns the association set `xs` as a map.\n\n If `xs` contains multiple mappings with the same key, `toMap` does not\n make any guarantees about which mapping will be in the resulting map."
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Alias for `findLeft`.\n\n The function `f` must be pure."
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
                "effect":"Pure",
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from right to left.\n\n The function `f` must be pure."
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from left to right.\n\n The function `f` must be pure."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from right to left.\n\n That is, the result is of the form: `f(x1, ...f(xn-1, f(xn, s))...)`."
            },{
                "name":"__cmp",
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
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the result of a three-way comparison between `xs` and `ys`.\n\n Returns n < 0 if `xs` is lexicographically smaller than `ys`.\n Returns n = 0 if `xs` is equal to `ys`.\n Returns n > 0 if `xs` is lexicographically greater than `ys`."
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
                "result":"Set[a]",
                "effect":"Pure",
                "comment":"Returns the set of all elements of `xs` that satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Option[a]",
                "effect":"e",
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
                "result":"Set[a]",
                "effect":"Pure",
                "comment":"Replaces the element `x` with `y` if `x` is in `xs`. Otherwise, returns `xs`.\n\n Note: The returned set may be smaller than `xs`."
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
                "effect":"Pure",
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
                "effect":"Pure",
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
                "effect":"Pure",
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
                "result":"Set[a]",
                "effect":"Pure",
                "comment":"Returns the intersection of `xs` and `ys`."
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
                "result":"Set[Int32]",
                "effect":"Pure",
                "comment":"Returns a set of all integers between `b` (inclusive) and `e` (exclusive).\n\n Returns `empty()` if `b >= e`."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a ~> Unit"
                },{
                    "name":"xs",
                    "type":"Set[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to every element of `xs`.\n\n The function `f` must be impure."
            }]
        },
        "Core.Io.InputStream":{
            "defs":[{
                "name":"fromBuffer",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Array[Int8]"
                }],
                "result":"InputStream",
                "effect":"Impure",
                "comment":"Creates an `InputStream` from the buffer `b`."
            },{
                "name":"new",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[InputStream, IOError]",
                "effect":"Impure",
                "comment":"Creates an `InputStream` reading from the file `f`."
            },{
                "name":"readBuffer",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Array[Int8]"
                },{
                    "name":"s",
                    "type":"InputStream"
                }],
                "result":"Result[Int32, IOError]",
                "effect":"Impure",
                "comment":"Reads a number of bytes from `s` into `b`.\n\n Returns the number of bytes read.\n\n Returns `-1` if end of stream has been reached."
            },{
                "name":"readBufferWithOffset",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Array[Int8]"
                },{
                    "name":"o",
                    "type":"Int32"
                },{
                    "name":"l",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"InputStream"
                }],
                "result":"Result[Int32, IOError]",
                "effect":"Impure",
                "comment":"Reads a number of bytes from `s` into `b`, starting at index `o`, reading at most `l` bytes.\n\n Returns the number of bytes read.\n\n Returns `-1` if end of stream has been reached."
            },{
                "name":"readByte",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"InputStream"
                }],
                "result":"Result[Int32, IOError]",
                "effect":"Impure",
                "comment":"Reads a single byte from `s`.\n\n Returns `-1` if end of stream has been reached."
            },{
                "name":"close",
                "tparams":[],
                "fparams":[{
                    "name":"stream",
                    "type":"InputStream"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Closes `s` and frees the resource."
            },{
                "name":"available",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"InputStream"
                }],
                "result":"Result[Int32, IOError]",
                "effect":"Impure",
                "comment":"Returns the number of bytes available in `s`."
            },{
                "name":"readAll",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"InputStream"
                }],
                "result":"Result[Array[Int8], IOError]",
                "effect":"Impure",
                "comment":"Read the whole stream into a byte array"
            }]
        },
        "BigInt":{
            "defs":[{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns `1` if `x > 0`, `-1` if `x < 0`, and `0` if `x = 0`."
            },{
                "name":"clampToInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"minimum",
                    "type":"Int64"
                },{
                    "name":"maximum",
                    "type":"Int64"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int64`.\n\n Returns `x` clamped within the Int64 range `minimum` to `maximum`."
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the greatest common non-negative divisor of `x` and `y`."
            },{
                "name":"clampToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"minimum",
                    "type":"Int8"
                },{
                    "name":"maximum",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int8`.\n\n Returns `x` clamped within the Int8 range `minimum` to `maximum`."
            },{
                "name":"tryToFloat64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"Option[Float64]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Float64]`.\n\n Returns `Some(x as Float64)` if the numeric value of `x` is within the range of Float32.\n\n Warning: even if `x` is in the range of Float64 it may lose precision.\n\n Returns `None` if the numeric value of `x` is outside the range of Float64\n (i.e 4.9E-324 to 1.7976931348623157E308)."
            },{
                "name":"tryToFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"Option[Float32]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Float32]`.\n\n Returns `Some(x as Float32)` if the numeric value of `x` is within the range of Float32.\n\n Warning: even if `x` is in the range of Float32 it may lose precision.\n\n Returns `None` if the numeric value of `x` is outside the range of Float32\n (i.e. 1.4E-45 to 3.4028235E38)."
            },{
                "name":"fromString",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Result[BigInt, String]",
                "effect":"Pure",
                "comment":"Parse the string `s` as an BigInt, leading or trailing whitespace is trimmed.\n A successful parse is wrapped with `OK(x)`, a parse failure is indicated by `Err(_)`."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return a string representation of `x`."
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
                "effect":"Pure",
                "comment":"Returns `1` if `x > y`, `-1` if `x < y`, and `0` if `x = y`."
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"BigInt",
                "effect":"Pure",
                "comment":"Returns the absolute value of `x`."
            },{
                "name":"tryToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"Option[Int8]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int8]`.\n\n Returns `Some(x as Int8)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int8\n (i.e. -128 to 127)."
            },{
                "name":"clampToFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"minimum",
                    "type":"Float32"
                },{
                    "name":"maximum",
                    "type":"Float32"
                }],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Convert `x` to a `Float32`.\n\n Returns `x` clamped within the Float32 range `minimum` to `maximum`."
            },{
                "name":"tryToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"Option[Int16]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int16]`.\n\n Returns `Some(x as Int16)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int16\n (i.e. -32768 to 32767)."
            },{
                "name":"clampToInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"minimum",
                    "type":"Int32"
                },{
                    "name":"maximum",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int32`.\n\n Returns `x` clamped within the Int32 range `minimum` to `maximum`."
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
                "effect":"Pure",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n\n The bits of x have positions: 0 (rightmost bit), 1, 2, ..."
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
                "effect":"Pure",
                "comment":"Returns the larger of `x` and `y`."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0)."
            },{
                "name":"clampToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"minimum",
                    "type":"Int16"
                },{
                    "name":"maximum",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int16`.\n\n Returns `x` clamped within the Int16 range `minimum` to `maximum`."
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
                "effect":"Pure",
                "comment":"Returns the distance between `x` and `y`."
            },{
                "name":"clampToFloat64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                },{
                    "name":"minimum",
                    "type":"Float64"
                },{
                    "name":"maximum",
                    "type":"Float64"
                }],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Convert `x` to a `Float64`.\n\n Returns `x` clamped within the Float64 range `minimum` to `maximum`."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` flipped."
            },{
                "name":"tryToInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int32]`.\n\n Returns `Some(x as Int32)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int32\n (i.e. -2147483648 to 2147483647)."
            },{
                "name":"tryToInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"BigInt"
                }],
                "result":"Option[Int64]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int64]`.\n\n Returns `Some(x as Int64)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int64\n (i.e. -9223372036854775808 to 9223372036854775807)."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` set (to 1)."
            }]
        },
        "Array":{
            "defs":[{
                "name":"flatten",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"arrs",
                    "type":"Array[Array[a]]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns the concatenation of the arrays of in the array `arrs`."
            },{
                "name":"takeWhile",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Alias for `takeWhileLeft`.\n\n The function `f` must be pure."
            },{
                "name":"reverse!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Reverse the array `a`, mutating it in place."
            },{
                "name":"drop",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Alias for `dropLeft`."
            },{
                "name":"formatWith",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> String"
                },{
                    "name":"sep",
                    "type":"String"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"String",
                "effect":"Impure",
                "comment":"Render the array `a` as a String. Elements are rendered with the\n function `f` and seperated with the string `sep`."
            },{
                "name":"zip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[a]"
                }],
                "result":"Array[(a, b)]",
                "effect":"Impure",
                "comment":"Returns an array where the element at index `i` is `(x, y)` where\n `x` is the element at index `i` in `a` and `y` is the element at index `i` in `b`.\n\n If either `a` or `b` becomes depleted, then no further elements are added to the resulting array."
            },{
                "name":"indexOfLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[Int32]",
                "effect":"Impure",
                "comment":"Optionally returns the position of the first occurence of `x` in `a`\n searching from left to right."
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
                "result":"Array[Int32]",
                "effect":"Impure",
                "comment":"Returns an array of all integers between `b` (inclusive) and `e` (exclusive).\n\n Returns `[]` if `b >= e`."
            },{
                "name":"intersperse",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns `a` with `x` inserted between every two adjacent elements."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Applies `f` to all elements in `a` going from left to right until a single value `v` is obtained.  Returns `Some(v)`.\n\n Returns `None` if `a` is empty."
            },{
                "name":"get",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"i",
                    "type":"Int32"
                }],
                "result":"a",
                "effect":"Impure",
                "comment":"Returns the element at position `i` in the array `a`.\n\n Equivalent to the expression `a[i]`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Applies `f` to a start value `s` and all elements in `a` going from right to left.\n\n That is, the result is of the form: `f(a[0], ...f(a[n-1], f(a[n], s))...)`."
            },{
                "name":"foreachAccum",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"st"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b ~> b"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"st",
                "effect":"Impure",
                "comment":"Apply the effectful function `f` to all the elements in the array `a` and the accumulator `s`.\n The function returns the final value of the accumulator `s`."
            },{
                "name":"memberOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if `a` contains the element `x`."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a ~> Unit"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Apply the effectful function `f` to all the elements in the array `a`."
            },{
                "name":"zipWith",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c & d"
                },{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[a]"
                }],
                "result":"Array[c]",
                "effect":"Impure",
                "comment":"Returns an array where the element at index `i` is `f(x, y)` where\n `x` is the element at index `i` in `a` and `y` is the element at index `i` in `b`.\n\n If either `a` or `b` becomes depleted, then no further elements are added to the resulting array."
            },{
                "name":"takeWhileRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns the longest suffix of `a` that satisfies the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"length",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the length of the array `a`."
            },{
                "name":"init",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Int32 -> a & b"
                },{
                    "name":"len",
                    "type":"Int32"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Build an array of length `len` by applying `f` to the successive indices."
            },{
                "name":"forall",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if all elements in `a` satisfy the predicate `f`.\n\n Returns `true` if `a` is empty."
            },{
                "name":"dropRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a copy of array `a`, dropping the last `n` elements.\n\n Returns `[]` if `n > length(a)`."
            },{
                "name":"updateSequence",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"sub",
                    "type":"Array[a]"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a copy of `a` with the elements starting at index `i` replaced by `sub`."
            },{
                "name":"count",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Int32",
                "effect":"Impure",
                "comment":"Returns the number of elements in `a` that satisfy the predicate `f`."
            },{
                "name":"sameElements",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if arrays `a` and `b` have the same elements, i.e. are structurally equal."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Set[a]",
                "effect":"Impure",
                "comment":"Returns the array `a` as a set."
            },{
                "name":"toMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[(a, b)]"
                }],
                "result":"Map[a, b]",
                "effect":"Impure",
                "comment":"Returns the association list `xs` as a map.\n\n If `xs` contains multiple mappings with the same key, `toMap` does not\n make any guarantees about which mapping will be in the resulting map."
            },{
                "name":"scan",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"b"
                },{
                    "name":"xs",
                    "type":"Array[a]"
                }],
                "result":"Array[b]",
                "effect":"Impure",
                "comment":"Alias for `scanLeft`."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Alias for `foldLeft`."
            },{
                "name":"foldLeft2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c & d"
                },{
                    "name":"c",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[b]"
                }],
                "result":"c",
                "effect":"Impure",
                "comment":"Accumulates the result of applying `f` pairwise to the elements of `a` and `b`\n starting with the initial value `c` and going from left to right."
            },{
                "name":"foldRight2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c -> c & d"
                },{
                    "name":"c",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[b]"
                }],
                "result":"c",
                "effect":"Impure",
                "comment":"Accumulates the result of applying `f` pairwise to the elements of `a` and `b`\n starting with the initial value `c` and going from right to left."
            },{
                "name":"map2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c & d"
                },{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[a]"
                }],
                "result":"Array[c]",
                "effect":"Impure",
                "comment":"Returns an array where the element at index `i` is `f(a[i], b[i])`.\n\n If either `a` or `b` becomes depleted, then no further elements are added to the resulting array."
            },{
                "name":"update",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a copy of `a` with the element at index `i` replaced by `x`.\n\n Returns a shallow copy of `a` if `i < 0` or `i > length(xs)-1`."
            },{
                "name":"findMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Option[b] & c"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[b]",
                "effect":"Impure",
                "comment":"Returns the first non-None result of applying the partial function `f` to each element of `xs`.\n\n Returns `None` if every element of `xs` is `None`."
            },{
                "name":"foreachWithIndex",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Int32 ~> Unit"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Apply the effectful function `f` to all the elements in the array `a`."
            },{
                "name":"transpose",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[Array[a]]"
                }],
                "result":"Array[Array[a]]",
                "effect":"Impure",
                "comment":"Returns the transpose of `a`.\n\n Returns `a` if the dimensions of the elements of `a` are mismatched."
            },{
                "name":"map",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[b]",
                "effect":"Impure",
                "comment":"Returns the result of applying `f` to every element in `a`.\n\n The result is a new array."
            },{
                "name":"takeLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a fresh array taking first `n` elements of `a`.\n\n Returns `a` if `n > length(xs)`."
            },{
                "name":"takeRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a fresh array taking last `n` elements of `a`.\n\n Returns `a` if `n > length(xs)`."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Array[b] & c"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[b]",
                "effect":"Impure",
                "comment":"Returns the result of applying `f` to every element in `a` and concatenating the results."
            },{
                "name":"mapWithIndex",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Int32 -> b & c"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[b]",
                "effect":"Impure",
                "comment":"Returns the result of applying `f` to every element in `a` along with that element's index.\n\n That is, the result is of the form: `[ f(a[0], 0), f(a[1], 1), ... ]`."
            },{
                "name":"transform!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Apply `f` to every element in array `a`. Array `a` is mutated."
            },{
                "name":"reverse",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns the reverse of `a`."
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
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a copy of `a` with every occurrence of `x` replaced by `y`."
            },{
                "name":"isPrefixOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a1",
                    "type":"Array[a]"
                },{
                    "name":"a2",
                    "type":"Array[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if `a1` is a prefix of `a2`."
            },{
                "name":"rotateRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Rotate the contents of array `a` by `n` steps to the right."
            },{
                "name":"indexOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[Int32]",
                "effect":"Impure",
                "comment":"Alias for `IndexOfLeft`"
            },{
                "name":"indices",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[Int32]",
                "effect":"Impure",
                "comment":"Return the positions of the all the occurences of `x` in `a`."
            },{
                "name":"head",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Returns `Some(x)` if `x` is the first element of `a`.\n\n Returns `None` if `a` is empty."
            },{
                "name":"findIndexOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[Int32]",
                "effect":"Impure",
                "comment":"Alias for `findIndexOfLeft`.\n\n The function `f` must be pure."
            },{
                "name":"last",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Returns `Some(x)` if `x` is the last element of `a`.\n\n Returns `None` if `a` is empty."
            },{
                "name":"dropLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a copy of array `a`, dropping the first `n` elements.\n\n Returns `[]` if `n > length(a)`."
            },{
                "name":"dropWhile",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Alias for `dropWhileLeft`.\n\n\n The function `f` must be pure."
            },{
                "name":"append",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Return a new array, appending the elements `b` to elements of `a`."
            },{
                "name":"takeWhileLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns the longest prefix of `a` that satisfies the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"dropWhileRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns copy of array `a` without the longest suffix that satisfies the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"rotateLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Rotate the contents of array `a` by `n` steps to the left."
            },{
                "name":"sortWith!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"cmp",
                    "type":"a -> a -> Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Sort array `a` with the comparing function `cmp`. Array `a` is mutated in place.\n\n The sort implementation is quicksort."
            },{
                "name":"groupBy",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[Array[a]]",
                "effect":"Impure",
                "comment":"Partitions `a` into subarrays such that for any two elements `x` and `y` in a subarray, `f(x, y)` is true.\n\n A subarray is created by iterating through the remaining elements of `a` from left to right and adding an\n element to the subarray if and only if doing so creates no conflicts with the elements already in the subarray.\n\n The function `f` must be pure."
            },{
                "name":"flatMap2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> Array[c] & d"
                },{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[a]"
                }],
                "result":"Array[c]",
                "effect":"Impure",
                "comment":"Concatenates the results of applying `f` pairwise to the elements of `a` and `b`."
            },{
                "name":"repeat",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"n",
                    "type":"Int32"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns an array with the element `x` repeated `n` times.\n\n Returns `[]` if `n <= 0`."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if at least one element in `a` satisfies the predicate `f`.\n\n Returns `false` if `a` is empty.\n\n The function `f` must be pure."
            },{
                "name":"unzip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[(a, b)]"
                }],
                "result":"(Array[a], Array[b])",
                "effect":"Impure",
                "comment":"Returns a pair of arrays, the first containing all first components in `a`\n and the second containing all second components in `a`."
            },{
                "name":"findIndices",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[Int32]",
                "effect":"Impure",
                "comment":"Returns the positions of the all the elements in `a` satisfying `f`.\n\n The function `f` must be pure."
            },{
                "name":"findLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Optionally returns the first element of `a` that satisfies the predicate `f` when searching from left to right.\n\n The function `f` must be pure."
            },{
                "name":"filter",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns an array of every element in `a` that satisfies the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"filterMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Option[b] & c"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[b]",
                "effect":"Impure",
                "comment":"Collects the results of applying the partial function `f` to every element in `a`."
            },{
                "name":"scanRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"s",
                    "type":"b"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[b]",
                "effect":"Impure",
                "comment":"Accumulates the result of applying `f` to `xs` going right to left.\n\n That is, the result is of the form: `[..., f(xn-1, f(xn, s)), f(xn, s), s]`."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Alias for `reduceLeft`."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"List[a]",
                "effect":"Impure",
                "comment":"Returns the array `a` as a list."
            },{
                "name":"transformWithIndex!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Int32 -> a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Apply `f` to every element in array `a` along with that element's index. Array `a` is mutated."
            },{
                "name":"replace!",
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
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Replace every occurrence of `x` by `y` in the array `a`, mutating it in place."
            },{
                "name":"new",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"l",
                    "type":"Int32"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a fresh array of length `l` filled with the element `x`.\n\n Equivalent to the expression `[x; l]`."
            },{
                "name":"slice",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Int32"
                },{
                    "name":"e",
                    "type":"Int32"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns a fresh array with the elements from the array `a` from index `b` (inclusive) until index `e` (exclusive).\n\n Equivalent to the expression `a[b..e]`."
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
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Alias for `findLeft`.\n\n The function `f` must be pure."
            },{
                "name":"partition",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"(Array[a], Array[a])",
                "effect":"Impure",
                "comment":"Returns a pair of lists `(a1, a2)`.\n\n `a1` contains all elements of `a` that satisfy the predicate `f`.\n `a2` contains all elements of `a` that do not satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"take",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Alias for `takeLeft`."
            },{
                "name":"isSuffixOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a1",
                    "type":"Array[a]"
                },{
                    "name":"a2",
                    "type":"Array[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if `a1` is a prefix of `a2`."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Applies `f` to all elements in `a` going from right to left until a single value `v` is obtained.  Returns `Some(v)`.\n\n Returns `None` if `a` is empty."
            },{
                "name":"isInfixOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a1",
                    "type":"Array[a]"
                },{
                    "name":"a2",
                    "type":"Array[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if `a1` is a prefix of `a2`."
            },{
                "name":"updateSequence!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"sub",
                    "type":"Array[a]"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Update the mutable array `a` with the elements starting at index `i` replaced by `sub`."
            },{
                "name":"span",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"(Array[a], Array[a])",
                "effect":"Impure",
                "comment":"Returns a pair of arrays `(a1, a2)`.\n\n `a1` is the longest prefix of `a` that satisfies the predicate `f`.\n `a2` is the remainder of `a`.\n\n The function `f` must be pure."
            },{
                "name":"intercalate",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"sep",
                    "type":"Array[a]"
                },{
                    "name":"arrs",
                    "type":"Array[Array[a]]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns the concatenation of the elements in `arrs` with the elements of `sep` inserted between every two adjacent elements."
            },{
                "name":"fold2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c & d"
                },{
                    "name":"c",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[b]"
                }],
                "result":"c",
                "effect":"Impure",
                "comment":"Alias for `foldLeft2`."
            },{
                "name":"indexOfRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[Int32]",
                "effect":"Impure",
                "comment":"Optionally returns the position of the first occurence of `x` in `a`\n searching from right to left."
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
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns `b` with the `n` elements starting at index `i` replaced with the elements of `a`.\n\n If any of the indices `i, i+1, i+2, ... , i+n-1` are out of range in `b` then no patching is done at these indices.\n If `a` becomes depleted then no further patching is done.\n If patching occurs at index `i+j` in `b`, then the element at index `j` in `a` is used."
            },{
                "name":"findIndexOfRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[Int32]",
                "effect":"Impure",
                "comment":"Optionally returns the position of the first element in `a` satisfying `f`\n searching from right to left.\n\n The function `f` must be pure."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Applies `f` to a start value `s` and all elements in `a` going from left to right.\n\n That is, the result is of the form: `f(...f(f(s, a[0]), a[1])..., xn)`."
            },{
                "name":"dropWhileLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Returns copy of array `a` without the longest prefix that satisfies the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"patch!",
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
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"b",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Update the mutable array `b` replacing `n` elements starting at index `i` with the corresponding elements of array `a`.\n\n If any of the indices `i, i+1, i+2, ... , i+n-1` are out of range in `b` then no patching is done at these indices.\n If `a` becomes depleted then no further patching is done.\n If patching occurs at index `i+j` in `b`, then the element at index `j` in `a` is used."
            },{
                "name":"sortWith",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"cmp",
                    "type":"a -> a -> Int32"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Sort array `a` with the comparing function `cmp`, returning a sorted copy.\n\n The sort implementation is quicksort."
            },{
                "name":"findIndexOfLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[Int32]",
                "effect":"Impure",
                "comment":"Optionally returns the position of the first element in `x` satisfying `f`.\n\n The function `f` must be pure."
            },{
                "name":"init2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Int32 -> (a, b) & c"
                },{
                    "name":"len",
                    "type":"Int32"
                }],
                "result":"(Array[a], Array[b])",
                "effect":"Impure",
                "comment":"Build a pair of arrays of length `len` by applying `f` to the successive indices."
            },{
                "name":"scanLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"s",
                    "type":"b"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Array[b]",
                "effect":"Impure",
                "comment":"Accumulates the result of applying `f` to `a` going left to right.\n\n That is, the result is of the form: `[s , f(s, x1), f(f(s, x1), x2),  ...]`."
            },{
                "name":"findRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from right to left.\n\n The function `f` must be pure."
            },{
                "name":"put",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"a",
                    "type":"Array[a]"
                },{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"x",
                    "type":"a"
                }],
                "result":"Array[a]",
                "effect":"Impure",
                "comment":"Stores the value `x` at position `i` in the array `a`.\n\n Equivalent to the expression `a[i] = x`."
            }]
        },
        "Bool":{
            "defs":[{
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
                "effect":"Pure",
                "comment":"Alias for logical implication."
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
                "effect":"Pure",
                "comment":"Alias for logical disjunction."
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
                "effect":"Pure",
                "comment":"Alias for logical conjunction."
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
                "effect":"Pure",
                "comment":"Alias for exclusive or."
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
                "effect":"Pure",
                "comment":"Alias for logical bi-implication."
            }]
        },
        "Pkger.SemVer.Parser":{
            "defs":[{
                "name":"fromString",
                "tparams":[],
                "fparams":[{
                    "name":"input",
                    "type":"String"
                }],
                "result":"Option[SemVer]",
                "effect":"Pure",
                "comment":"Read a `SemVer` from an `input` String"
            }]
        },
        "Console.Color.Web":{
            "defs":[{
                "name":"toRGB",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Web"
                }],
                "result":"(Int32, Int32, Int32)",
                "effect":"Pure",
                "comment":"Returns the RGB-triplet for the given color `c`."
            }]
        },
        "Pkger.SemVer":{
            "defs":[{
                "name":"isCompatible",
                "tparams":[],
                "fparams":[{
                    "name":"bound",
                    "type":"SemVer"
                },{
                    "name":"specific",
                    "type":"SemVer"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Check whether the `specific` SemVer is compatible with the `bound` SemVer according to the SemVer specification"
            }]
        },
        "Console.StdIn":{
            "defs":[{
                "name":"readLine",
                "tparams":[],
                "fparams":[],
                "result":"Option[String]",
                "effect":"Impure",
                "comment":"Returns the next line read from the standard input stream."
            }]
        },
        "MutMap":{
            "defs":[{
                "name":"clear!",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes all mappings from the mutable map `m`."
            },{
                "name":"foldLeftWithKey",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c & d"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Applies `f` to a start value `i` and all key-value pairs in the mutable map `m` going from left to right.\n\n That is, the result is of the form: `f(...f(k2, f(k1, i, v1), v2)..., vn)`."
            },{
                "name":"foldWithKey",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> k -> v -> c & d"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"MutMap[k, v]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Alias for `foldLeftWithKey`."
            },{
                "name":"isEmpty",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if `m` is the empty map."
            },{
                "name":"put!",
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Updates the mutable map `m` with the binding `k -> v`. Replaces any existing binding."
            },{
                "name":"size",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Int32",
                "effect":"Impure",
                "comment":"Returns the size of the mutable map `m`."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Option[v]",
                "effect":"Impure",
                "comment":"Applies `f` to all values in the mutable map `m` going from right to left until a single value `v` is obtained. Returns `Some(v)`.\n\n That is, the result is of the form: `Some(f(v1, ...f(vn-2, f(vn-1, vn))...))`\n\n Returns `None` if `m` is the empty map."
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if all mappings in the mutable map `m` satisfy the predicate function `f`.\n\n Returns `true` if `m` is the empty map.\n\n The function `f` must be pure."
            },{
                "name":"keysOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Set[k]",
                "effect":"Impure",
                "comment":"Returns the keys of the mutable map `m`."
            },{
                "name":"adjustWithKey!",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"k",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Updates the mutable map `m` with `k -> f(k, v)` if `k -> v` is in `m`.\n\n Otherwise leaves the map is unchanged."
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if the mutable map `m` contains the key `k`."
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Impure",
                "comment":"Optionally returns the first mapping of the mutable map `m` that satisfies the predicate function `f` when searching from right to left.\n\n The function `f` must be pure."
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
                    "type":"MutMap[a, b]"
                }],
                "result":"v",
                "effect":"Impure",
                "comment":"Returns `v` if `k -> v` is in the mutable map `m`.\n\n Otherwise returns `d`."
            },{
                "name":"reduceLeftWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b) & c"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Impure",
                "comment":"Applies `f` to all mappings in the mutable map `m` going from left to right until a single mapping `(k, v)` is obtained. Returns `Some((k, v))`.\n\n That is, the result is of the form: `Some(f(...f(f(k1, v1, k2, v2), k3, v3)..., kn, vn))`\n\n Returns `None` if `m` is the empty map."
            },{
                "name":"refineWithKey!",
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes all mappings `k -> v` from the mutable map `m` where `(k, v)` does not satisfy the predicate function `f`.\n\n The function `f` must be pure."
            },{
                "name":"isProperSubmapOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"MutMap[a, b]"
                },{
                    "name":"m2",
                    "type":"MutMap[a, b]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if all mappings in the mutable map `m1` occur in the mutable map `m2` and `m1 != m2`."
            },{
                "name":"adjust!",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a & b"
                },{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"m",
                    "type":"MutMap[k, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Updates the mutable map `m` with `k -> f(v)` if `k -> v` is in `m`.\n\n Otherwise leaves the map is unchanged."
            },{
                "name":"toImmutable",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Map[k, v]",
                "effect":"Impure",
                "comment":"Returns the mutable map `m` as an immutable map."
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if at least one mapping in the mutable map `m` satisfies the predicate function `f`.\n\n Returns `false` if `m` is the empty map.\n\n The function `f` must be pure."
            },{
                "name":"refine!",
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
                    "type":"MutMap[k, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes all mappings `k -> v` from the mutable map `m` where `v` does not satisfy the predicate function `f`.\n\n The function `f` must be pure."
            },{
                "name":"__eq",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"MutMap[k, v]"
                },{
                    "name":"m2",
                    "type":"MutMap[k, v]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `m1` and `m2` and equal, i.e. they have the same mappings."
            },{
                "name":"transform!",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a & b"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies the function `f` to every value in the mutable map `m`."
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Option[v]",
                "effect":"Impure",
                "comment":"Returns `Some(v)` if `k -> v` is in the mutable map `m`.\n\n Otherwise returns `None`."
            },{
                "name":"isSubmapOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"MutMap[a, b]"
                },{
                    "name":"m2",
                    "type":"MutMap[a, b]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if all mappings in the mutable map `m1` occur in the mutable map `m2`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"MutMap[k, b]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Applies `f` to a start value `i` and all values in the mutable map `m` going from right to left.\n\n That is, the result is of the form: `f(v1, ...f(vn-1, f(vn, i)))`."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"List[(k, v)]",
                "effect":"Impure",
                "comment":"Returns the mutable map `m` as a list of key-value pairs."
            },{
                "name":"mergeWith!",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"m1",
                    "type":"MutMap[k, b]"
                },{
                    "name":"m2",
                    "type":"MutMap[k, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Merges the mutable map `m1` into the mutable map `m2` where key collisions are resolved with the merge function `f`."
            },{
                "name":"getOrElsePut!",
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
                    "type":"MutMap[b, a]"
                }],
                "result":"v",
                "effect":"Impure",
                "comment":"Returns `v` if `k -> v` is in the mutable map `m`.\n\n Otherwise updates the mutable map `m` with a new mapping `k -> d` and returns d."
            },{
                "name":"reduceWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"k -> v -> k -> v -> (k, v) & c"
                },{
                    "name":"m",
                    "type":"MutMap[k, v]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Impure",
                "comment":"Alias for `reduceLeftWithKey`."
            },{
                "name":"empty",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[],
                "result":"MutMap[k, v]",
                "effect":"Impure",
                "comment":"Returns a fresh empty mutable map."
            },{
                "name":"reduceRightWithKey",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b) & c"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Impure",
                "comment":"Applies `f` to all mappings in the mutable map `m` going from right to left until a single mapping `(k, v)` is obtained. Returns `Some((k, v))`.\n\n That is, the result is of the form: `Some(f(k1, v1, ...f(kn-2, vn-2, f(kn-1, vn-1, kn, vn))...))`\n\n Returns `None` if `m` is the empty map."
            },{
                "name":"mergeWithKey!",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b -> b & c"
                },{
                    "name":"m1",
                    "type":"MutMap[a, b]"
                },{
                    "name":"m2",
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Merges the mutable map `m1` into the mutable map `m2` where key collisions are resolved with the merge function `f`, taking both the key and values."
            },{
                "name":"transformWithKey!",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies the function `f` to every value in the mutable map `m`."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> v -> b & c"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"MutMap[k, v]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Alias for `foldLeft`."
            },{
                "name":"singleton",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"v",
                    "type":"v"
                }],
                "result":"MutMap[k, v]",
                "effect":"Impure",
                "comment":"Returns the singleton map where the key `k` is mapped to value `v`."
            },{
                "name":"valuesOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"List[v]",
                "effect":"Impure",
                "comment":"Returns the values of the mutable map `m`."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Option[v]",
                "effect":"Impure",
                "comment":"Applies `f` to all values in the mutable map `m` going from left to right until a single value `v` is obtained. Returns `Some(v)`.\n\n That is, the result is of the form: `Some(f(...f(f(v1, v2), v3)..., vn))`\n\n Returns `None` if `m` is the empty map."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b ~> Unit"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to every element in the mutable map `m`.\n\n The function `f` must be impure."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"Set[(k, v)]",
                "effect":"Impure",
                "comment":"Returns the mutable map `m` as a set of key-value pairs."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Applies `f` to a start value `i` and all values in the mutable map `m` going from left to right.\n\n That is, the result is of the form: `f(...f(f(i, v1), v2)..., vn)`."
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Impure",
                "comment":"Optionally returns the first mapping of the mutable map `m` that satisfies the predicate function `f` when searching from left to right.\n\n The function `f` must be pure."
            },{
                "name":"copy",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"MutMap[k, v]",
                "effect":"Impure",
                "comment":"Returns a shallow copy of the mutable map `m`."
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Int32",
                "effect":"Impure",
                "comment":"Returns the number of mappings in the mutable map `m` that satisfy the predicate function `f`.\n\n The function `f` must be pure."
            },{
                "name":"merge!",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"m1",
                    "type":"MutMap[k, v]"
                },{
                    "name":"m2",
                    "type":"MutMap[k, v]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Merges the mutable map `m1` into the mutable map `m2` in a left-biased manner.\n\n That is, key collisions are resolved by taking the mapping from `m1`."
            },{
                "name":"remove!",
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
                    "type":"MutMap[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes the mapping `k` from the mutable map `m`.\n\n Leaves the map unchanged if the mutable map `m` does not contain any mapping for `k`."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"v -> v -> v & b"
                },{
                    "name":"m",
                    "type":"MutMap[k, v]"
                }],
                "result":"Option[v]",
                "effect":"Impure",
                "comment":"Alias for `reduceLeft`."
            },{
                "name":"find",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"k -> v -> Bool"
                },{
                    "name":"m",
                    "type":"MutMap[k, v]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Impure",
                "comment":"Alias for `findLeft`.\n\n The function `f` must be pure."
            },{
                "name":"foldRightWithKey",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c -> c & d"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"m",
                    "type":"MutMap[a, b]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Applies `f` to a start value `i` and all key-value pairs in the mutable map `m` going from right to left.\n\n That is, the result is of the form: `f(k1, v1, ...f(kn-1, vn-1, f(kn, vn, i)))`."
            }]
        },
        "Instant":{
            "defs":[{
                "name":"now",
                "tparams":[],
                "fparams":[],
                "result":"Instant",
                "effect":"Impure",
                "comment":"Returns the current time from the system clock."
            },{
                "name":"minus",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Instant"
                },{
                    "name":"d",
                    "type":"Int64"
                }],
                "result":"Instant",
                "effect":"Pure",
                "comment":"Returns the given instant `x` minus `d` number of nano seconds."
            },{
                "name":"after",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Instant"
                },{
                    "name":"y",
                    "type":"Instant"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if `x` is after `y`."
            },{
                "name":"plus",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Instant"
                },{
                    "name":"d",
                    "type":"Int64"
                }],
                "result":"Instant",
                "effect":"Pure",
                "comment":"Returns the given instant `x` plus `d` number of nano seconds."
            },{
                "name":"before",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Instant"
                },{
                    "name":"y",
                    "type":"Instant"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if `x` is before `y`."
            }]
        },
        "Core.Io.ZipInput":{
            "defs":[{
                "name":"entries",
                "tparams":[],
                "fparams":[{
                    "name":"z",
                    "type":"ZipInput"
                }],
                "result":"Result[List[{ name: String, isDirectory: Bool, stream: InputStream }], IOError]",
                "effect":"Impure",
                "comment":"Reads all entries in `z` into a list of `ZipEntry`."
            },{
                "name":"new",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[ZipInput, IOError]",
                "effect":"Impure",
                "comment":"Constructs a `ZipInput` from a `Path`."
            },{
                "name":"close",
                "tparams":[],
                "fparams":[{
                    "name":"z",
                    "type":"ZipInput"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Closes `z` and frees the resource."
            }]
        },
        "StringBuilder":{
            "defs":[{
                "name":"appendString!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the String `s` to the StringBuilder `sb`."
            },{
                "name":"appendInt16!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"i",
                    "type":"Int16"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the Int16 `i` to the StringBuilder `sb`."
            },{
                "name":"appendLines!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"a",
                    "type":"Array[String]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Appends each string in the array `a` to the string builder `sb`."
            },{
                "name":"appendLine!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the String `s` followed by the system line separator to the StringBuilder `sb`."
            },{
                "name":"appendInt64!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"i",
                    "type":"Int64"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the Int64 `i` to the StringBuilder `sb`."
            },{
                "name":"appendInt8!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"i",
                    "type":"Int8"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the Int8 `i` to the StringBuilder `sb`."
            },{
                "name":"appendLineWith!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"f",
                    "type":"a -> String"
                },{
                    "name":"x",
                    "type":"a"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Appends `f(x)` to the string builder `sb`."
            },{
                "name":"appendLinesWith!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"f",
                    "type":"a -> String"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Appends `f(x)` for each x in array `a` to the string builder `sb`."
            },{
                "name":"intercalate!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"sep",
                    "type":"String"
                },{
                    "name":"a",
                    "type":"Array[String]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the array of strings `a` separating each pair of string with `sep` to the StringBuilder `sb`."
            },{
                "name":"appendBigInt!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"i",
                    "type":"BigInt"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the BigInt `i` to the StringBuilder `sb`."
            },{
                "name":"appendChar!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the Char `c` to the StringBuilder `sb`."
            },{
                "name":"appendFloat64!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"d",
                    "type":"Float64"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the Float64 `d` to the StringBuilder `sb`."
            },{
                "name":"length",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                }],
                "result":"Int32",
                "effect":"Impure",
                "comment":"Return the length of the StringBuilder `sb`."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                }],
                "result":"String",
                "effect":"Impure",
                "comment":"Convert the StringBuilder `sb` to a string."
            },{
                "name":"append!",
                "tparams":[],
                "fparams":[{
                    "name":"sb1",
                    "type":"StringBuilder"
                },{
                    "name":"sb2",
                    "type":"StringBuilder"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the StringBuilder `sb2` to the end of StringBuilder `sb1`."
            },{
                "name":"appendLineSeparator!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the system line separator to the StringBuilder `sb`."
            },{
                "name":"appendFloat32!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"d",
                    "type":"Float32"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the Float32 `d` to the StringBuilder `sb`."
            },{
                "name":"new",
                "tparams":[],
                "fparams":[],
                "result":"StringBuilder",
                "effect":"Impure",
                "comment":"Returns a new mutable StringBuilder."
            },{
                "name":"appendInt32!",
                "tparams":[],
                "fparams":[{
                    "name":"sb",
                    "type":"StringBuilder"
                },{
                    "name":"i",
                    "type":"Int32"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Append the Int32 `i` to the StringBuilder `sb`."
            }]
        },
        "Duration":{
            "defs":[{
                "name":"oneMinute",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the number of nanoseconds in one minute."
            },{
                "name":"oneDay",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the number of nanoseconds in one 24 hour day."
            },{
                "name":"oneMillisecond",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the number of nanoseconds in one millisecond."
            },{
                "name":"oneMicrosecond",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the number of nanoseconds in one microsecond."
            },{
                "name":"oneHour",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the number of nanoseconds in one hour."
            },{
                "name":"oneSecond",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the number of nanoseconds in one second."
            },{
                "name":"oneNanosecond",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the number of nanoseconds in one nanosecond, i.e. one."
            }]
        },
        "Timer":{
            "defs":[{
                "name":"hours",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Channel[Unit]",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value after `n` hours."
            },{
                "name":"milliseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Channel[Unit]",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value after `n` milliseconds."
            },{
                "name":"microseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Channel[Unit]",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value after `n` microseconds."
            },{
                "name":"minutes",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Channel[Unit]",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value after `n` minutes."
            },{
                "name":"days",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Channel[Unit]",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value after `n` days."
            },{
                "name":"nanoseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Channel[Unit]",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value after `n` nanoseconds."
            },{
                "name":"seconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Channel[Unit]",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value after `n` seconds."
            }]
        },
        "Option":{
            "defs":[{
                "name":"lift7",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> u & i"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                },{
                    "name":"o3",
                    "type":"Option[t3]"
                },{
                    "name":"o4",
                    "type":"Option[t4]"
                },{
                    "name":"o5",
                    "type":"Option[t5]"
                },{
                    "name":"o6",
                    "type":"Option[t6]"
                },{
                    "name":"o7",
                    "type":"Option[t7]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the 7-ary function `f` to the values in `o1`, `o2`, ... `o7`.\n\n Returns `None` if any of `o1`, `o2`, ... `o7` are `None`."
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
                "result":"Option[(a, b)]",
                "effect":"Pure",
                "comment":"Returns `Some((v1, v2))` if `o1` is `Some(v1)` and `o2` is `Some(v2)`. Otherwise returns `None`."
            },{
                "name":"toErr",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                },{
                    "name":"d",
                    "type":"a"
                }],
                "result":"Result[t, e]",
                "effect":"Pure",
                "comment":"Returns the Option value `Err(e)` if `o` is `Some(e)`. Otherwise returns `Ok(d)`."
            },{
                "name":"map",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Option[b]",
                "effect":"e",
                "comment":"Returns `Some(f(v))` if `o` is `Some(v)`. Otherwise returns `None`."
            },{
                "name":"ap",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"o1",
                    "type":"Option[a -> b & c]"
                },{
                    "name":"o2",
                    "type":"Option[a]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the function in `o1` to the value in `o2`."
            },{
                "name":"lift10",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t10"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"t9"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> t9 -> t10 -> u & l"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                },{
                    "name":"o3",
                    "type":"Option[t3]"
                },{
                    "name":"o4",
                    "type":"Option[t4]"
                },{
                    "name":"o5",
                    "type":"Option[t5]"
                },{
                    "name":"o6",
                    "type":"Option[t6]"
                },{
                    "name":"o7",
                    "type":"Option[t7]"
                },{
                    "name":"o8",
                    "type":"Option[t8]"
                },{
                    "name":"o9",
                    "type":"Option[t9]"
                },{
                    "name":"o10",
                    "type":"Option[t10]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the 10-ary function `f` to the values in `o1`, `o2`, ... `o10`.\n\n Returns `None` if any of `o1`, `o2`, ... `o10` are `None`."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> Option[b] & c"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Option[b]",
                "effect":"e",
                "comment":"Returns `f(v)` if `o` is `Some(v)`. Otherwise returns `None`."
            },{
                "name":"lift2",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> u & d"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the binary function `f` to the values in `o1` and `o2`.\n\n Returns `None` if either `o1` or `o2` are `None`."
            },{
                "name":"lift5",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> u & g"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                },{
                    "name":"o3",
                    "type":"Option[t3]"
                },{
                    "name":"o4",
                    "type":"Option[t4]"
                },{
                    "name":"o5",
                    "type":"Option[t5]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the 5-ary function `f` to the values in `o1`, `o2`, ... `o5`.\n\n Returns `None` if any of `o1`, `o2`, ... `o5` are `None`."
            },{
                "name":"sequence",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"List[Option[a]]"
                }],
                "result":"Option[List[a]]",
                "effect":"Pure",
                "comment":"Returns `Some(v1 :: v2 :: ... :: vn)` if each of `xs_i` is `Some(v_i)`. Otherwise returns `None`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"o",
                    "type":"Option[a]"
                },{
                    "name":"z",
                    "type":"a"
                }],
                "result":"b",
                "effect":"e",
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
                "effect":"Pure",
                "comment":"Returns `1` if `o` is `Some(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `0`.\n\n The function `f` must be pure."
            },{
                "name":"lift3",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> u & e"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                },{
                    "name":"o3",
                    "type":"Option[t3]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the ternary function `f` to the values in `o1`, `o2` and `o3`.\n\n Returns `None` if any of `o1`, `o2` and `o3` are `None`."
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Returns `o1` if it is `Some(v)`. Otherwise returns `o2`."
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
                "result":"(Option[a], Option[b])",
                "effect":"Pure",
                "comment":"Returns `(Some(v1), Some(v2))` if `o` is `Some((v1, v2))`. Otherwise returns `(None, None)`."
            },{
                "name":"lift4",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> u & f"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                },{
                    "name":"o3",
                    "type":"Option[t3]"
                },{
                    "name":"o4",
                    "type":"Option[t4]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the 4-ary function `f` to the values in `o1`, `o2`, `o3` and `o4`.\n\n Returns `None` if any of `o1`, `o2`, `o3` and `o4` are `None`."
            },{
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
                "effect":"Pure",
                "comment":"Returns `v` if `o` is `Some(v).` Otherwise returns `d`."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a ~> Unit"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to `v` if `o` is `Some(v)`. Otherwise does nothing.\n\n The function `f` must be impure."
            },{
                "name":"toSuccess",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                },{
                    "name":"e",
                    "type":"a"
                }],
                "result":"Validation[t, e]",
                "effect":"Pure",
                "comment":"Returns the Validation value `Success(v)` if `o` is `Some(v)`. Otherwise lifts `e` into Validation's `Failure`."
            },{
                "name":"toFailure",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                },{
                    "name":"d",
                    "type":"a"
                }],
                "result":"Validation[t, e]",
                "effect":"Pure",
                "comment":"Returns `e` into Validation's `Failure` if `o` is `Some(e)`. Otherwise returns `Success(d)`."
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
                "result":"Map[k, v]",
                "effect":"Pure",
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
                "effect":"Pure",
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
                "result":"List[a]",
                "effect":"Pure",
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Returns `o` if `o` is `Some(v)` and the predicate `f(v)` is true. Otherwise returns `None`.\n\n The function `f` must be pure."
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
                "effect":"Pure",
                "comment":"Returns `true` if `o` is `Some(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `false`.\n\n The function `f` must be pure."
            },{
                "name":"toOk",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"t"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                },{
                    "name":"e",
                    "type":"a"
                }],
                "result":"Result[t, e]",
                "effect":"Pure",
                "comment":"Returns the Option value `Ok(v)` if `o` is `Some(v)`. Otherwise returns `Err(e)`."
            },{
                "name":"flatMap2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> c -> Option[c] & d"
                },{
                    "name":"o1",
                    "type":"Option[a]"
                },{
                    "name":"o2",
                    "type":"Option[a]"
                }],
                "result":"Option[c]",
                "effect":"e",
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Returns `v` if `o` is `Some(v)`. Otherwise returns `None`."
            },{
                "name":"traverse",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> Option[b] & c"
                },{
                    "name":"xs",
                    "type":"List[a]"
                }],
                "result":"Option[List[b]]",
                "effect":"e",
                "comment":"Returns `Some(v1 :: v2 :: ... v :: vn)` if each of `f(xs_i)` is `Some(v_i)`. Otherwise returns `None`."
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
                "result":"Option[a]",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns `true` if `o` is `Some(v)` and the predicate `f(v)` evaluates to `true` or if `o` is `None`.\n\n Otherwise returns `false`.\n\n The function `f` must be pure."
            },{
                "name":"lift9",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"t9"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> t9 -> u & k"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                },{
                    "name":"o3",
                    "type":"Option[t3]"
                },{
                    "name":"o4",
                    "type":"Option[t4]"
                },{
                    "name":"o5",
                    "type":"Option[t5]"
                },{
                    "name":"o6",
                    "type":"Option[t6]"
                },{
                    "name":"o7",
                    "type":"Option[t7]"
                },{
                    "name":"o8",
                    "type":"Option[t8]"
                },{
                    "name":"o9",
                    "type":"Option[t9]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the 9-ary function `f` to the values in `o1`, `o2`, ... `o9`.\n\n Returns `None` if any of `o1`, `o2`, ... `o9` are `None`."
            },{
                "name":"map2",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c & d"
                },{
                    "name":"o1",
                    "type":"Option[a]"
                },{
                    "name":"o2",
                    "type":"Option[a]"
                }],
                "result":"Option[c]",
                "effect":"e",
                "comment":"Returns `Some(f(v1, v2))` if `o1` is `Some(v1)` and `o2` is `Some(v2)`. Otherwise returns `None`."
            },{
                "name":"lift8",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"t7"
                },{
                    "name":"t8"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> t7 -> t8 -> u & j"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                },{
                    "name":"o3",
                    "type":"Option[t3]"
                },{
                    "name":"o4",
                    "type":"Option[t4]"
                },{
                    "name":"o5",
                    "type":"Option[t5]"
                },{
                    "name":"o6",
                    "type":"Option[t6]"
                },{
                    "name":"o7",
                    "type":"Option[t7]"
                },{
                    "name":"o8",
                    "type":"Option[t8]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the 8-ary function `f` to the values in `o1`, `o2`, ... `o8`.\n\n Returns `None` if any of `o1`, `o2`, ... `o8` are `None`."
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
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Returns `o` if `o` is `Some(v)` and the predicate `f(v)` evaluates to `true`. Otherwise returns `None`.\n\n The function `f` must be pure."
            },{
                "name":"lift6",
                "tparams":[{
                    "name":"f"
                },{
                    "name":"t1"
                },{
                    "name":"t2"
                },{
                    "name":"t3"
                },{
                    "name":"t4"
                },{
                    "name":"t5"
                },{
                    "name":"t6"
                },{
                    "name":"u"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"t1 -> t2 -> t3 -> t4 -> t5 -> t6 -> u & h"
                },{
                    "name":"o1",
                    "type":"Option[t1]"
                },{
                    "name":"o2",
                    "type":"Option[t2]"
                },{
                    "name":"o3",
                    "type":"Option[t3]"
                },{
                    "name":"o4",
                    "type":"Option[t4]"
                },{
                    "name":"o5",
                    "type":"Option[t5]"
                },{
                    "name":"o6",
                    "type":"Option[t6]"
                }],
                "result":"Option[u]",
                "effect":"f",
                "comment":"Applies the 6-ary function `f` to the values in `o1`, `o2`, ... `o6`.\n\n Returns `None` if any of `o1`, `o2`, ... `o6` are `None`."
            },{
                "name":"toSet",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"Set[a]",
                "effect":"Pure",
                "comment":"Returns a one-element set of the value `v` if `o` is `Some(v)`. Otherwise returns the empty set."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"z",
                    "type":"a"
                },{
                    "name":"o",
                    "type":"Option[a]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Returns `f(z, v)` if `o` is `Some(v)`. Otherwise returns `z`."
            }]
        },
        "Console.Color":{
            "defs":[{
                "name":"blue",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s` formatted with the default blue color."
            },{
                "name":"red",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s` formatted with the default red color."
            },{
                "name":"magenta",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s` formatted with the default magenta color."
            },{
                "name":"cyan",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s` formatted with the default cyan color."
            },{
                "name":"green",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s` formatted with the default green color."
            },{
                "name":"white",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s` formatted with the default white color."
            },{
                "name":"yellow",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s` formatted with the default yellow color."
            }]
        },
        "Char":{
            "defs":[{
                "name":"toInt32",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the character `c` as an Int32."
            },{
                "name":"isLetter",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is a letter character."
            },{
                "name":"isUpperCase",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is uppercase."
            },{
                "name":"toUpperCase",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Char",
                "effect":"Pure",
                "comment":"Converts a letter to its uppercase version.\n\n Returns the original character if it does not have a uppercase version."
            },{
                "name":"isDigit",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is a recognized Unicode digit.\n This includes the ASCII range 0..9 but also Arabic-Indic digits, Devagari digits and Fullwidth digits."
            },{
                "name":"toLowerCase",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Char",
                "effect":"Pure",
                "comment":"Converts a letter to its lowercase version.\n\n Returns the original character if it does not have a lowercase version."
            },{
                "name":"isOctDigit",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is in the range 0...7."
            },{
                "name":"isAscii",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is an ascii character."
            },{
                "name":"isLowerCase",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is lowercase."
            },{
                "name":"isHexDigit",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is in the range 0...F."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the character `c` as a string."
            },{
                "name":"fromInt32",
                "tparams":[],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                }],
                "result":"Char",
                "effect":"Pure",
                "comment":"Returns the respective character for the int `i`."
            },{
                "name":"isWhiteSpace",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is a white space character."
            },{
                "name":"isAsciiDigit",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Char"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given char `c` is strictly in the range of ASCII digits 0...9."
            }]
        },
        "Float64":{
            "defs":[{
                "name":"tryToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Option[Int16]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int16]`.\n\n Returns `Some(x as Int16)` if the numeric value of `x` is within the range\n of Int16, rounding `x` towards 0`.\n\n Returns `None` if the numeric value of `x` is outside the range of Int16\n (i.e. -32768 to 32767), or it is NaN or infinity."
            },{
                "name":"isNan",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns true if and only if `x` is the NaN value of type `Float64`."
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
                "effect":"Pure",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"negativeInfinity",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Returns the negative infinity value of type `Float64`."
            },{
                "name":"minExponent",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the minimum exponent that a `Float64` may have."
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Returns the minimum number representable by a `Float64`."
            },{
                "name":"tryToBigInt",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Option[BigInt]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[BigInt]`.\n\n Returns `Some(x as BigInt)` if the numeric value of `x` is representable as a BigInt.\n\n Returns `None` if the value of `x` is NaN or infinity."
            },{
                "name":"positiveInfinity",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Returns the positive infinity value of type `Float64`."
            },{
                "name":"tryToFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Option[Float32]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Float32]`.\n\n Returns `Some(x as Float32)` if the numeric value of `x` is within the range\n of Float32, loss of precision may occur.\n\n Returns `None` if the numeric value of `x` is outside the range of Float32\n (i.e. 1.4E-45 to 3.4028235E38).\n\n If `x` is NaN return `Some(Float32.NaN)``, if `x` is positive or negative infinity return\n `Some` wrapping the corresponding Float32 infinity."
            },{
                "name":"tryToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Option[Int8]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int8]`.\n\n Returns `Some(x as Int8)` if the numeric value of `x` is within the range\n of Int8, rounding `x` towards 0`.\n\n Returns `None` if the numeric value of `x` is outside the range of Int8\n (i.e. -128 to 127), or it is NaN or infinity."
            },{
                "name":"tryToInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int32]`.\n\n Returns `Some(x as Int32)` if the numeric value of `x` is within the range\n of Int32, rounding `x` towards 0`.\n\n Returns `None` if the numeric value of `x` is outside the range of Int32\n (i.e. -2147483648 to 2147483647), or it is NaN or infinity."
            },{
                "name":"maxExponent",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the maximum exponent that a `Float64` may have."
            },{
                "name":"fromString",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Result[Float64, String]",
                "effect":"Pure",
                "comment":""
            },{
                "name":"minPositiveValue",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Returns the minimum positive number representable by a `Float64`."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return a string representation of `x`."
            },{
                "name":"clampToFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                },{
                    "name":"minimum",
                    "type":"Float32"
                },{
                    "name":"maximum",
                    "type":"Float32"
                }],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Convert `x` to a `Float32`.\n\n Returns `x` clamped within the Float32 range `minimum` to `maximum`."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Returns the maximum number representable by a `Float64`."
            },{
                "name":"isFinite",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns true if and only if `x` is a non-infinite and non-Nan `Float64` value."
            },{
                "name":"clampToInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                },{
                    "name":"minimum",
                    "type":"Int64"
                },{
                    "name":"maximum",
                    "type":"Int64"
                },{
                    "name":"nanValue",
                    "type":"Int64"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int64`.\n\n Returns `x` clamped within the Int64 range `minimum` to `maximum`.\n\n Warning: it is recommended to test `x` for NaN (not-a-number) before calling this\n function. Relying on `nanValue` to convert NaN to a permissable Int64 risks masking it."
            },{
                "name":"clampToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                },{
                    "name":"minimum",
                    "type":"Int16"
                },{
                    "name":"maximum",
                    "type":"Int16"
                },{
                    "name":"nanValue",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int16`.\n\n Returns `x` clamped within the Int16 range `minimum` to `maximum`.\n\n Warning: it is recommended to test `x` for NaN (not-a-number) before calling this\n function. Relying on `nanValue` to convert NaN to a permissable Int16 risks masking it."
            },{
                "name":"tryToInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Option[Int64]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int64]`.\n\n Returns `Some(x as Int64)` if the numeric value of `x` is within the range\n of Int64, rounding `x` towards 0`.\n\n Returns `None` if the numeric value of `x` is outside the range of Int64\n (i.e. -9223372036854775808 to 9223372036854775807), or it is NaN or infinity.\n\n Note: while the range of an Int64 is precisely defined using Int64 values,\n converting this range to Float64 values is imprecise."
            },{
                "name":"clampToInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                },{
                    "name":"minimum",
                    "type":"Int32"
                },{
                    "name":"maximum",
                    "type":"Int32"
                },{
                    "name":"nanValue",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int32`.\n\n Returns `x` clamped within the Int32 range `minimum` to `maximum`.\n\n Warning: it is recommended to test `x` for NaN (not-a-number) before calling this\n function. Relying on `nanValue` to convert NaN to a permissable Int32 risks masking it."
            },{
                "name":"clampToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                },{
                    "name":"minimum",
                    "type":"Int8"
                },{
                    "name":"maximum",
                    "type":"Int8"
                },{
                    "name":"nanValue",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int8`.\n\n Returns `x` clamped within the Int8 range `minimum` to `maximum`.\n\n Warning: it is recommended to test `x` for NaN (not-a-number) before calling this\n function. Relying on `nanValue` to convert NaN to a permissable Int8 risks masking it."
            },{
                "name":"isInfinite",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float64"
                }],
                "result":"Bool",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"nan",
                "tparams":[],
                "fparams":[],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Returns the NaN (not a number) value of type `Float64`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of bits used to represent a `Float64`."
            }]
        },
        "":{
            "defs":[{
                "name":"panic",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"m",
                    "type":"String"
                }],
                "result":"a",
                "effect":"Pure",
                "comment":"Panics (crashes) the current process with the given message `m`."
            },{
                "name":"uncurry",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e1"
                },{
                    "name":"e2"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> b -> c & d & e"
                }],
                "result":"a -> b -> c & (e1 ∧ e2)",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":""
            },{
                "name":"flip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> c & d"
                }],
                "result":"b -> a -> c & e",
                "effect":"Pure",
                "comment":"Returns the function `f` with input arguments swapped.\n That is, given the function `f: (a, b) -> c`, returns a function `(b, a) -> c`"
            },{
                "name":">>",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e1"
                },{
                    "name":"e2"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"g",
                    "type":"b -> a & c"
                }],
                "result":"a -> c & (e1 ∧ e2)",
                "effect":"Pure",
                "comment":"Forwards function composition. Applies the function on the left first.\n\n Given the functions `f: a -> b` and `g: b -> c` returns a function `a -> c`"
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
                "result":"b",
                "effect":"Pure",
                "comment":"Returns the second component of `t`."
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
                "effect":"Pure",
                "comment":"Returns the first component of `t`."
            },{
                "name":"||>",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"(a, b)"
                },{
                    "name":"f",
                    "type":"(a, b) -> c & d"
                }],
                "result":"c",
                "effect":"e",
                "comment":"Pipes the given pair `x` into the function `f`.\n\n Given a pair `x` and a function `f` returns `f(x)`."
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
                "result":"(b, a)",
                "effect":"Pure",
                "comment":"Returns the pair `p` with the components swapped.\n That is, returns `(y, x)` if `p = (x, y)`."
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
                }],
                "result":"b -> a",
                "effect":"Pure",
                "comment":"Returns the constant function with return value `y`.\n That is, returns `f` such that `f(x) = y` for all inputs `x`."
            },{
                "name":"|>",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"f",
                    "type":"a -> b & c"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Pipes the given value `x` into the function `f`.\n\n Given a value `x` and a function `f` returns `f(x)`."
            },{
                "name":"curry",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"c"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c & d"
                }],
                "result":"a -> b -> c & e",
                "effect":"Pure",
                "comment":"Returns the result of currying the function `f`.\n That is, given the function `f: (a, b) -> c`, returns a function `a -> b -> c`"
            }]
        },
        "Channel":{
            "defs":[{
                "name":"new",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[],
                "result":"Channel[a]",
                "effect":"Impure",
                "comment":"Returns a fresh unbuffered channel.\n\n An unbuffered channel has an internal capacity of `0`."
            },{
                "name":"put",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"c",
                    "type":"Channel[a]"
                },{
                    "name":"x",
                    "type":"a"
                }],
                "result":"Channel[a]",
                "effect":"Impure",
                "comment":"Sends the element `x` on the channel `c`.\n\n Equivalent to the expression `c <- x`."
            },{
                "name":"get",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"c",
                    "type":"Channel[a]"
                }],
                "result":"a",
                "effect":"Impure",
                "comment":"Receives an element from the channel `c`.\n\n Equivalent to the expression `<- c`."
            },{
                "name":"newWithCapacity",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"c",
                    "type":"Int32"
                }],
                "result":"Channel[a]",
                "effect":"Impure",
                "comment":"Returns a fresh buffered channel with internal capacity `c`."
            }]
        },
        "Nel":{
            "defs":[{
                "name":"append",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                },{
                    "name":"ys",
                    "type":"Nel[a]"
                }],
                "result":"Nel[a]",
                "effect":"Pure",
                "comment":"Returns `ys` appended to `xs`."
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
                    "type":"Nel[a]"
                }],
                "result":"b",
                "effect":"Pure",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from right to left.\n\n That is, the result is of the form: `f(x1, ...f(xn-1, f(xn, s))...)`."
            },{
                "name":"head",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"a",
                "effect":"Pure",
                "comment":"Returns the first element of `xs`."
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
                    "type":"Nel[a]"
                }],
                "result":"a",
                "effect":"Pure",
                "comment":"Applies `f` to all elements in `xs` going from left to right until a single value `v` is obtained.\n\n That is, the result is of the form: `f(...f(f(x1, x2), x3)..., xn)`"
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
                    "type":"Nel[a]"
                }],
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from left to right."
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
                    "type":"Nel[a]"
                }],
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Alias for `findLeft`."
            },{
                "name":"unzip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[(a, b)]"
                }],
                "result":"(Nel[a], Nel[b])",
                "effect":"Pure",
                "comment":"Returns a pair of non-empty lists, the first containing all first components in `xs`\n and the second containing all second components in `xs`."
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
                    "type":"Nel[a]"
                }],
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns a list of every element in `xs` that satisfies the predicate `f`."
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
                    "type":"Nel[a]"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of elements in `xs` that satisfy the predicate `f`."
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
                    "type":"Nel[a]"
                }],
                "result":"a",
                "effect":"Pure",
                "comment":"Alias for `reduceLeft`."
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
                    "type":"Nel[a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if at least one element in `xs` satisfies the predicate `f`."
            },{
                "name":"flatten",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[Nel[a]]"
                }],
                "result":"Nel[a]",
                "effect":"Pure",
                "comment":"Returns the concatenation of the elements in `xs`."
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
                    "type":"Nel[a]"
                }],
                "result":"a",
                "effect":"Pure",
                "comment":"Applies `f` to all elements in `xs` going from right to left until a single value `v` is obtained.\n\n That is, the result is of the form: `Some(f(x1, ...f(xn-2, f(xn-1, xn))...))`"
            },{
                "name":"__eq",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                },{
                    "name":"ys",
                    "type":"Nel[a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `xs` and `ys` and equal."
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
                    "type":"Nel[a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `xs` contains the element `a`."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns `xs` as a normal list."
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
                    "type":"Nel[a]"
                },{
                    "name":"ys",
                    "type":"Nel[a]"
                }],
                "result":"Nel[c]",
                "effect":"Pure",
                "comment":"Returns a non-empty list where the element at index `i` is `f(a, b)` where\n `a` is the element at index `i` in `xs` and `b` is the element at index `i` in `ys`.\n\n If either `xs` or `ys` becomes depleted, then no further elements are added to the resulting list."
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
                    "type":"Nel[a]"
                }],
                "result":"b",
                "effect":"Pure",
                "comment":"Applies `f` to a start value `s` and all elements in `xs` going from left to right.\n\n That is, the result is of the form: `f(...f(f(s, x1), x2)..., xn)`."
            },{
                "name":"init",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns all elements in `xs` without the last element."
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
                    "type":"Nel[a]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if all elements in `xs` satisfy the predicate `f`."
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
                    "type":"Nel[a]"
                }],
                "result":"b",
                "effect":"Pure",
                "comment":"Alias for `foldLeft`."
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
                    "type":"Nel[a]"
                }],
                "result":"Nel[a]",
                "effect":"Pure",
                "comment":"Returns `xs` with `a` inserted between every two adjacent elements."
            },{
                "name":"map",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b & c"
                },{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"Nel[b]",
                "effect":"e",
                "comment":"Returns the result of applying `f` to every element in `xs`.\n\n That is, the result is of the form: `f(x1) :: f(x2) :: ...`."
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
                    "type":"Nel[a]"
                }],
                "result":"Nel[a]",
                "effect":"Pure",
                "comment":"Returns `xs` with every occurrence of `x` replaced by `y`."
            },{
                "name":"last",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"a",
                "effect":"Pure",
                "comment":"Returns the last element of `xs`."
            },{
                "name":"zip",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                },{
                    "name":"ys",
                    "type":"Nel[a]"
                }],
                "result":"Nel[(a, b)]",
                "effect":"Pure",
                "comment":"Returns a non-empty list where the element at index `i` is `(a, b)` where\n `a` is the element at index `i` in `xs` and `b` is the element at index `i` in `ys`.\n\n If either `xs` or `ys` becomes depleted, then no further elements are added to the resulting list."
            },{
                "name":"permutations",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"Nel[List[a]]",
                "effect":"Pure",
                "comment":"Returns all permutations of `xs` in lexicographical order by element indices in `xs`.\n\n That is, `xs` is the first permutation and `reverse(xs)` is the last permutation."
            },{
                "name":"tail",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"List[a]",
                "effect":"Pure",
                "comment":"Returns all elements in `xs` without the first element."
            },{
                "name":"flatMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> Nel[a] & c"
                },{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"Nel[b]",
                "effect":"e",
                "comment":"Returns the result of applying `f` to every element in `xs` and concatenating the results."
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
                    "type":"Nel[a]"
                }],
                "result":"Option[a]",
                "effect":"Pure",
                "comment":"Optionally returns the first element of `xs` that satisfies the predicate `f` when searching from right to left."
            },{
                "name":"subsequences",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"Nel[List[a]]",
                "effect":"Pure",
                "comment":"Returns all subsequences of `xs` in lexicographical order by element indices in `xs`.\n\n That is, `xs` is the first subsequence and `Nil` is the last subsequence."
            },{
                "name":"reverse",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"Nel[a]",
                "effect":"Pure",
                "comment":"Returns the reverse of `xs`."
            },{
                "name":"length",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the length of `xs`."
            },{
                "name":"mapWithIndex",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Int32 -> b & c"
                },{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"Nel[b]",
                "effect":"e",
                "comment":"Returns the result of applying `f` to every element in `xs` along with that element's index.\n\n That is, the result is of the form: `f(x1, 0) :: f(x2, 1) :: ...`."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a ~> Unit"
                },{
                    "name":"xs",
                    "type":"Nel[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to every element of `xs`.\n\n The function `f` must be impure."
            }]
        },
        "Core.Io.ZipOutput":{
            "defs":[{
                "name":"write",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"String"
                },{
                    "name":"a",
                    "type":"Array[Int8]"
                },{
                    "name":"z",
                    "type":"ZipOutput"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Writes `a` to the entry specified by `n` in the `z` `ZipOutput`"
            },{
                "name":"close",
                "tparams":[],
                "fparams":[{
                    "name":"z",
                    "type":"ZipOutput"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Closes the `z` `ZipOutput` file"
            },{
                "name":"new",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"OutputStream"
                }],
                "result":"ZipOutput",
                "effect":"Impure",
                "comment":"Constructs a `ZipOutput` from an `OutputStream`"
            }]
        },
        "Console.StdOut":{
            "defs":[{
                "name":"newLine",
                "tparams":[],
                "fparams":[],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Prints a newline to the standard output stream."
            },{
                "name":"printLine",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Prints the given string `s` and a newline to the standard output stream."
            },{
                "name":"print",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Prints the given string `s` to the standard output stream."
            },{
                "name":"flush",
                "tparams":[],
                "fparams":[],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Flushes the standard output stream."
            }]
        },
        "Float32":{
            "defs":[{
                "name":"positiveInfinity",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Returns the positive infinity value of type `Float32`."
            },{
                "name":"nan",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Returns the NaN (not a number) value of type `Float32`."
            },{
                "name":"minExponent",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the minimum exponent that a `Float32` may have."
            },{
                "name":"maxExponent",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the maximum exponent that a `Float32` may have."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return a string representation of `x`."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Returns the minimum number representable by a `Float32`."
            },{
                "name":"toFloat64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Convert `x` to an Float64."
            },{
                "name":"tryToInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int32]`.\n\n Returns `Some(x as Int32)` if the numeric value of `x` is within the range of Int32,\n rounding `x` towards 0`.\n\n Returns `None` if the numeric value of `x` is outside the range of Int32\n (i.e. -2147483648 to 2147483647), or it is NaN or infinity.\n\n Note: while the range of an Int32 is precisely defined using Int32 values, converting this range to\n Float32 values is imprecise."
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
                "effect":"Pure",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of bits used to represent a `Float32`."
            },{
                "name":"tryToBigInt",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Option[BigInt]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[BigInt]`.\n\n Returns `Some(x as BigInt)` if the numeric value of `x` is representable as a BigInt.\n\n Returns `None` if the value of `x` is NaN or infinity."
            },{
                "name":"negativeInfinity",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Returns the negative infinity value of type `Float32`."
            },{
                "name":"tryToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Option[Int8]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int8]`.\n\n Returns `Some(x as Int8)` if the numeric value of `x` is within the range of Int8,\n rounding `x` towards 0`.\n\n Returns `None` if the numeric value of `x` is outside the range of Int8\n (i.e. -128 to 127), or it is NaN or infinity."
            },{
                "name":"clampToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                },{
                    "name":"minimum",
                    "type":"Int16"
                },{
                    "name":"maximum",
                    "type":"Int16"
                },{
                    "name":"nanValue",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int16`.\n\n Returns `x` clamped within the Int16 range `minimum` to `maximum`.\n\n Warning: it is recommended to test `x` for NaN (not-a-number) before calling this\n function. Relying on `nanValue` to convert NaN to a permissable Int16 risks masking it."
            },{
                "name":"minPositiveValue",
                "tparams":[],
                "fparams":[],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Returns the minimum positive number representable by a `Float32`."
            },{
                "name":"isInfinite",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns true if and only if `x` is an infinite and non-Nan `Float32` value."
            },{
                "name":"clampToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                },{
                    "name":"minimum",
                    "type":"Int8"
                },{
                    "name":"maximum",
                    "type":"Int8"
                },{
                    "name":"nanValue",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int8`.\n\n Returns `x` clamped within the Int8 range `minimum` to `maximum`.\n\n Warning: it is recommended to test `x` for NaN (not-a-number) before calling this\n function. Relying on `nanValue` to convert NaN to a permissable Int8 risks masking it."
            },{
                "name":"isFinite",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns true if and only if `x` is a non-infinite and non-Nan `Float32` value."
            },{
                "name":"tryToInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Option[Int64]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int64]`.\n\n Returns `Some(x as Int64)` if the numeric value of `x` is within the range of Int64,\n rounding `x` towards 0`.\n\n Returns `None` if the numeric value of `x` is outside the range of Int64\n (i.e. -9223372036854775808 to 9223372036854775807), or it is NaN or infinity.\n\n Note: while the range of an Int64 is precisely defined using Int64 values, converting\n this range to Float32 values is imprecise."
            },{
                "name":"clampToInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                },{
                    "name":"minimum",
                    "type":"Int32"
                },{
                    "name":"maximum",
                    "type":"Int32"
                },{
                    "name":"nanValue",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int32`.\n\n Returns `x` clamped within the Int32 range `minimum` to `maximum`.\n\n Warning: it is recommended to test `x` for NaN (not-a-number) before calling this\n function. Relying on `nanValue` to convert NaN to a permissable Int32 risks masking it."
            },{
                "name":"fromString",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Result[Float32, String]",
                "effect":"Pure",
                "comment":"Return a decimal representation of `x`."
            },{
                "name":"tryToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Option[Int16]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int16]`.\n\n Returns `Some(x as Int16)` if the numeric value of `x` is within the range of Int16,\n rounding `x` towards 0`.\n\n Returns `None` if the numeric value of `x` is outside the range of Int16\n (i.e. -32768 to 32767), or it is NaN or infinity."
            },{
                "name":"clampToInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                },{
                    "name":"minimum",
                    "type":"Int64"
                },{
                    "name":"maximum",
                    "type":"Int64"
                },{
                    "name":"nanValue",
                    "type":"Int64"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int64`.\n\n Returns `x` clamped within the Int64 range `minimum` to `maximum`.\n\n Warning: it is recommended to test `x` for NaN (not-a-number) before calling this\n function. Relying on `nanValue` to convert NaN to a permissable Int64 risks masking it."
            },{
                "name":"isNan",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Float32"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns true if and only if `x` is the NaN value of type `Float32`."
            }]
        },
        "Ticker":{
            "defs":[{
                "name":"milliseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` milliseconds."
            },{
                "name":"stop",
                "tparams":[],
                "fparams":[{
                    "name":"ticker",
                    "type":"Ticker"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":""
            },{
                "name":"seconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` seconds."
            },{
                "name":"minutes",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` minutes."
            },{
                "name":"hours",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` hours."
            },{
                "name":"nanoseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` nanoseconds."
            },{
                "name":"days",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` days."
            },{
                "name":"tick",
                "tparams":[],
                "fparams":[{
                    "name":"ticker",
                    "type":"Ticker"
                }],
                "result":"Channel[Int32]",
                "effect":"Pure",
                "comment":""
            },{
                "name":"microseconds",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int64"
                }],
                "result":"Ticker",
                "effect":"Impure",
                "comment":"Returns a channel that receives the Unit value repeatedly every `n` microseconds."
            }]
        },
        "Object":{
            "defs":[{
                "name":"isNull",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the given value `x` is `null`."
            }]
        },
        "Int32":{
            "defs":[{
                "name":"toFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Convert `x` to an Float32.\n\n The numeric value of `x` may lose precision."
            },{
                "name":"clampToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"minimum",
                    "type":"Int8"
                },{
                    "name":"maximum",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int8`.\n\n Returns `x` clamped within the Int8 range `minimum` to `maximum`."
            },{
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
                "effect":"Pure",
                "comment":"Returns the logical right shift of `x` by `distance`.\n Only the rightmost 5 bits of `distance` are considered (ie. `distance % 32`).\n A zero is shifted into the leftmost position regardless of sign extension."
            },{
                "name":"tryToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Option[Int16]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int16]`.\n\n Returns `Some(x as Int16)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int16\n (i.e. -32768 to 32767)."
            },{
                "name":"tryToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Option[Int8]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int8]`.\n\n Returns `Some(x as Int8)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int8\n (i.e. -128 to 127)."
            },{
                "name":"bitCount",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of one-bits in the two's complement binary\n representation of `x`."
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of bits used to represent an `Int32`."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` left by `distance` bits."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` set (to 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 31 (leftmost bit)"
            },{
                "name":"lowestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
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
                "effect":"Pure",
                "comment":"Returns the larger of `x` and `y`."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return a string representation of `x`."
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 31 (leftmost bit)"
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` flipped.\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 31 (leftmost bit)"
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the value obtained by reversing the bits in the\n two's complement binary representation of `x`."
            },{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.\n The sign of x."
            },{
                "name":"numberOfTrailingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 31 (leftmost bit)"
            },{
                "name":"fromString",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Result[Int32, String]",
                "effect":"Pure",
                "comment":"Parse the string `s` as an Int32, leading or trailing whitespace is trimmed.\n A successful parse is wrapped with `OK(x)`, a parse failure is indicated by `Err(_)`."
            },{
                "name":"clampToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                },{
                    "name":"minimum",
                    "type":"Int16"
                },{
                    "name":"maximum",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int16`.\n\n Returns `x` clamped within the Int16 range `minimum` to `maximum`."
            },{
                "name":"numberOfLeadingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of zero bits preceding the\n highest-order/leftmost one-bit in `x`.\n Returns 32 if x=0."
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the absolute value of `x`.\n If the absolute value exceeds maxValue(), -1 is returned."
            },{
                "name":"highestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the position of the highest-order/leftmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 31 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"highestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"toBigInt",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"BigInt",
                "effect":"Pure",
                "comment":"Convert `x` to a BigInt.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"toFloat64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Convert `x` to a Float64.\n\n The numeric value of `x` is preserved exactly."
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
                "effect":"Pure",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` right by `distance` bits."
            },{
                "name":"toInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Convert `x` to a Int64.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"lowestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the position of the lowest-order/rightmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 31 (leftmost bit)\n                         -1 if x = 0"
            }]
        },
        "Console":{
            "defs":[{
                "name":"print",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Alias for `Console.StdOut.print`."
            },{
                "name":"printLine",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Alias for `Console.StdOut.printLine`."
            },{
                "name":"rgb",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"(Int32, Int32, Int32)"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s` formatted with the given RGB color `c`."
            },{
                "name":"readLine",
                "tparams":[],
                "fparams":[],
                "result":"Option[String]",
                "effect":"Impure",
                "comment":"Alias for `Console.StdIn.readLine`."
            }]
        },
        "Core.Io.File":{
            "defs":[{
                "name":"getChildren",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Option[List[File]], IOError]",
                "effect":"Impure",
                "comment":"Returns a list of children for the given file `f`.\n\n Returns `None` if the file `f` does not denote a directory."
            },{
                "name":"newOutputStream",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[OutputStream, IOError]",
                "effect":"Impure",
                "comment":"Opens the specified `File` into an `OutputStream`"
            },{
                "name":"newInputStream",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[InputStream, IOError]",
                "effect":"Impure",
                "comment":"Opens the specified `File` into an `InputStream`"
            },{
                "name":"getParent",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Option[File], IOError]",
                "effect":"Impure",
                "comment":"Optionally returns the file to the parent of the given file `f`.\n\n Returns `None` if `f` has no parent."
            },{
                "name":"canonical",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[File, IOError]",
                "effect":"Impure",
                "comment":"Gets the canonical form of the `f` file"
            },{
                "name":"resolve",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"File",
                "effect":"Impure",
                "comment":"Appends the string `s` to the end of the path `p`"
            },{
                "name":"new",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"File",
                "effect":"Impure",
                "comment":"Returns a file from the given string `s`."
            },{
                "name":"isDirectory",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Bool, IOError]",
                "effect":"Impure",
                "comment":"Returns `true` if the given file `f` is a directory."
            },{
                "name":"newFromFragments",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Nel[String]"
                }],
                "result":"File",
                "effect":"Impure",
                "comment":"Combines every string in `n` into a single path"
            },{
                "name":"readLines",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[List[String], IOError]",
                "effect":"Impure",
                "comment":"Returns a list of all the lines in the given file `f`."
            },{
                "name":"isReadable",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Bool, IOError]",
                "effect":"Impure",
                "comment":"Returns `true` if the given file `f` is readable."
            },{
                "name":"isExecutable",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Bool, IOError]",
                "effect":"Impure",
                "comment":"Returns `true` if the given file `f` is executable."
            },{
                "name":"writeLines",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                },{
                    "name":"l",
                    "type":"List[String]"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Writes all lines in the list `l` to the file `f`."
            },{
                "name":"exists",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Bool, IOError]",
                "effect":"Impure",
                "comment":"Returns `true` if the given file `f` exists."
            },{
                "name":"mkdirs",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Bool, IOError]",
                "effect":"Impure",
                "comment":"Creates all directories in the path `f` if they don't already exist"
            },{
                "name":"isSymbolicLink",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Bool, IOError]",
                "effect":"Impure",
                "comment":"Returns `true` if the given file `f` is a symbolic link."
            },{
                "name":"isFile",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Bool, IOError]",
                "effect":"Impure",
                "comment":"Returns `true` if the given file `f` is a file."
            },{
                "name":"isWritable",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[Bool, IOError]",
                "effect":"Impure",
                "comment":"Returns `true` if the given file `f` is writable."
            },{
                "name":"getName",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[String, IOError]",
                "effect":"Impure",
                "comment":"Returns the name of the directory or file denoted by the given file `f`."
            }]
        },
        "RedBlackTree":{
            "defs":[{
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
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Pure",
                "comment":"Optionally returns the first key-value pair in `tree` that satisfies the predicate `f` when searching from left to right.\n\n The function `f` must be pure."
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
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if at least one key-value pair in `tree` satisfies the predicate `f`.\n\n Returns `false` if `tree` is the empty tree.\n\n The function `f` must be pure."
            },{
                "name":"size",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of nodes in `tree`."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"c -> a -> b -> c & d"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all key-value pairs in `tree` going from left to right.\n\n That is, the result is of the form: `f(...f(f(s, k1, v1), k2, v2)..., vn)`."
            },{
                "name":"updateWith",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"k -> v -> Option[v] & c"
                },{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[k, v]"
                }],
                "result":"RedBlackTree[k, v]",
                "effect":"e",
                "comment":"Updates `tree` with `k -> v1` if `k -> v` is in `tree` and `f(k, v) = Some(v1)`.\n\n Otherwise, returns `tree`."
            },{
                "name":"memberOf",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[k, b]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `tree` contains the key `k`."
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
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"Pure",
                "comment":"Optionally returns the first key-value pair in `tree` that satisfies the predicate `f` when searching from right to left.\n\n The function `f` must be pure."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b) & c"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"e",
                "comment":"Applies `f` to all key-value pairs in `tree` going from left to right until a single pair `(k, v)` is obtained.\n\n That is, the result is of the form: `Some(f(...f(f(k1, v1, k2, v2), k3, v3)..., kn, vn))`\n\n Returns `None` if `tree` is the empty tree."
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
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Option[v]",
                "effect":"Pure",
                "comment":"Returns `Some(v)` if `k -> v` is in `tree`.\n\n Otherwise returns `None`."
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
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if all key-value pairs in `tree` satisfy the predicate `f`.\n\n Returns `true` if `tree` is the empty tree.\n\n The function `f` must be pure."
            },{
                "name":"insertWith",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"k -> v -> v -> v & c"
                },{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"v",
                    "type":"v"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[k, v]"
                }],
                "result":"RedBlackTree[k, v]",
                "effect":"e",
                "comment":"Updates `tree` with `k -> f(k, v, v1)` if `k -> v1` is in `tree`.\n\n Otherwise, updates `tree` with `k -> v`."
            },{
                "name":"delete",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[k, v]"
                }],
                "result":"RedBlackTree[k, v]",
                "effect":"Pure",
                "comment":"Removes `k -> v` from `tree` if `tree` contains the key `k`.\n\n Otherwise, returns `tree`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> c -> c & d"
                },{
                    "name":"s",
                    "type":"a"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `s` and all key-value pairs in `tree` going from right to left.\n\n That is, the result is of the form: `f(k1, v1, ...f(kn-1, vn-1, f(kn, vn, s)))`."
            },{
                "name":"insert",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"k",
                    "type":"k"
                },{
                    "name":"v",
                    "type":"v"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[k, v]"
                }],
                "result":"RedBlackTree[k, v]",
                "effect":"Pure",
                "comment":"Updates `tree` with `k -> v` if `k -> v1` is in `tree`.\n\n Otherwise, updates `tree` with `k -> v`."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"e"
                },{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> a -> b -> (a, b) & c"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Option[(k, v)]",
                "effect":"e",
                "comment":"Applies `f` to all key-value pairs in `tree` going from right to left until a single pair `(k, v)` is obtained.\n\n That is, the result is of the form: `Some(f(k1, v1, ...f(kn-2, vn-2, f(kn-1, vn-1, kn, vn))...))`.\n\n Returns `None` if `tree` is the empty tree."
            },{
                "name":"empty",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[],
                "result":"RedBlackTree[k, v]",
                "effect":"Pure",
                "comment":"Returns the empty tree."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"k"
                },{
                    "name":"v"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b ~> Unit"
                },{
                    "name":"tree",
                    "type":"RedBlackTree[a, b]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to every key-value pair of `tree`.\n\n The function `f` must be impure."
            }]
        },
        "Int16":{
            "defs":[{
                "name":"lowestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the position of the lowest-order/rightmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 15 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Returns the minimum number representable by an `Int16`."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return a string representation of `x`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the logical right shift of `x` by `distance`.\n Only the rightmost 5 bits of `distance` are considered (ie. `distance % 32`).\n A zero is shifted into the leftmost position regardless of sign extension."
            },{
                "name":"toInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Convert `x` to a Int32.\n\n The numeric value of `x` is preserved exactly."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 15 (leftmost bit)"
            },{
                "name":"toInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Convert `x` to a Int64.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"highestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the position of the highest-order/leftmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 15 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the larger of `x` and `y`."
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
                "effect":"Pure",
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` right by `distance` bits."
            },{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.\n The sign of x."
            },{
                "name":"toFloat64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Convert `x` to a Float64.\n\n The numeric value of `x` is preserved exactly."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` flipped.\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 15 (leftmost bit)"
            },{
                "name":"lowestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"toFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Convert `x` to a Float32.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"bitCount",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 15 (leftmost bit)"
            },{
                "name":"highestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Returns the absolute value of `x`.\n If the absolute value exceeds maxValue(), -1 is returned."
            },{
                "name":"numberOfTrailingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of zero bits following the\n lowest-order/rightmost one-bit in `x`.\n Returns 16 if x=0."
            },{
                "name":"tryToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Option[Int8]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int8]`.\n\n Returns `Some(x as Int8)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int8\n (i.e. -128 to 127)."
            },{
                "name":"numberOfLeadingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of zero bits preceding the\n highest-order/leftmost one-bit in `x`.\n Returns 16 if x=0."
            },{
                "name":"toBigInt",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                }],
                "result":"BigInt",
                "effect":"Pure",
                "comment":"Convert `x` to a BigInt.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Returns the maximum number representable by an `Int16`."
            },{
                "name":"clampToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int16"
                },{
                    "name":"minimum",
                    "type":"Int8"
                },{
                    "name":"maximum",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int8`.\n\n Returns `x` clamped within the Int8 range `minimum` to `maximum`."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` set (to 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 15 (leftmost bit)"
            },{
                "name":"fromString",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Result[Int16, String]",
                "effect":"Pure",
                "comment":"Parse the string `s` as an Int16, leading or trailing whitespace is trimmed.\n A successful parse is wrapped with `OK(x)`, a parse failure is indicated by `Err(_)`."
            }]
        },
        "String":{
            "defs":[{
                "name":"intercalateChar",
                "tparams":[],
                "fparams":[{
                    "name":"sep",
                    "type":"Char"
                },{
                    "name":"xs",
                    "type":"List[String]"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Concatenate a list of strings into a single string, inserting the separator `sep` between\n each pair of strings."
            },{
                "name":"slice",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"b",
                    "type":"Int32"
                },{
                    "name":"e",
                    "type":"Int32"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the substring of `s` from index `b` (inclusive) to index `e` (exclusive).\n\n If `b` or `e` are out-of-bounds, return the empty string."
            },{
                "name":"breakOnRight",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"(String, String)",
                "effect":"Pure",
                "comment":"Find the last instance of `sub` in string `s`, return a pair of the\n initial string including `sub` and suffix from `sub`."
            },{
                "name":"abbreviateLeft",
                "tparams":[],
                "fparams":[{
                    "name":"w",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Abbreviate the string `s` if it exceeds the width `w`.\n\n If the length of `s` exceeds `w` and `w >= 3\" then `s` is truncated and the first\n three characters are replaced with ellipses.\n\n If the length of `s` exceeds `w` and `w < 3\" then the empty string is returned."
            },{
                "name":"indexOfLeft",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Return the index of the first occurence of `sub` in `s` from the left.\n\n If `sub` is not present in `s` return None.\n\n If `sub` is the empty string return None."
            },{
                "name":"takeWhileLeft",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the initial prefix of string `s` where all the chars satisfy\n the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"toChunks",
                "tparams":[],
                "fparams":[{
                    "name":"k",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"List[String]",
                "effect":"Pure",
                "comment":"Split the string `s` into chunks of length `k`, the last chunk may be smaller than `k`.\n\n `k` should be greater than 0."
            },{
                "name":"unfold",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> Option[(Char, b)] & b"
                },{
                    "name":"x",
                    "type":"b"
                }],
                "result":"String",
                "effect":"e",
                "comment":"Build a string from the seed value `x` applying the function `f` until `f` returns `None`."
            },{
                "name":"toUpperCase",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the upper case version of the string `s`."
            },{
                "name":"rotateLeft",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Rotate the contents of string `s` by `n` steps to the left."
            },{
                "name":"breakOnLeft",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"(String, String)",
                "effect":"Pure",
                "comment":"Find the first instance of `sub` in string `s`, return a pair of the\n prefix of string `s` up to `sub` and the rest of string `s` including `sub`."
            },{
                "name":"endsWith",
                "tparams":[],
                "fparams":[{
                    "name":"s1",
                    "type":"String"
                },{
                    "name":"s2",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the string `s1` ends with the string `s2`."
            },{
                "name":"patch",
                "tparams":[],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns `s` with the `n` elements starting at index `i` replaced with the elements of `sub`.\n\n If any of the indices `i, i+1, i+2, ... , i+n-1` are out of range in `s` then no patching is done at these indices.\n If `s` becomes depleted then no further patching is done.\n If patching occurs at index `i+j` in `s`, then the element at index `j` in `sub` is used."
            },{
                "name":"indent",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Indent every line in string `s` by `n` spaces. `n` must be greater than `0`.\n\n If the string `s` in nonempty, the returned string normalizes line\n termination characters and adds a line terminator to the last line\n of the string if it does not already end with a newline.\n\n If the string `s` is empty, then the empty string is returned."
            },{
                "name":"unfoldStringWithIter",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Unit ~> Option[String]"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Build a string by applying the function `next` to `()`. `next` is expected to encapsulate\n a stateful resource such as a file handle that can be iterated.\n\n `next` should return `Some(s)` to signal a new substring `s`.\n\n `next` should return `None` to signal the end of building the string."
            },{
                "name":"replaceFirstMatch",
                "tparams":[],
                "fparams":[{
                    "name":"patt",
                    "type":"String"
                },{
                    "name":"rep",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns `s` with the first match of the regular expression `patt` replaced by the string `rep`."
            },{
                "name":"takeLeft",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Take the first `n` characters of string `s` from the left.\n\n If `n` extends past the end of string `s`, return all the characters\n of `s`."
            },{
                "name":"padRight",
                "tparams":[],
                "fparams":[{
                    "name":"w",
                    "type":"Int32"
                },{
                    "name":"c",
                    "type":"Char"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Pad the string `s` at the right with the supplied char `c` to fit the width `w`."
            },{
                "name":"charAt",
                "tparams":[],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Char",
                "effect":"Pure",
                "comment":"Returns the character at position `i` in the string `s`."
            },{
                "name":"init",
                "tparams":[{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Int32 -> Char & a"
                },{
                    "name":"len",
                    "type":"Int32"
                }],
                "result":"String",
                "effect":"e",
                "comment":"Build a string of length `len` by applying `f` to the successive indices."
            },{
                "name":"intercalate",
                "tparams":[],
                "fparams":[{
                    "name":"sep",
                    "type":"String"
                },{
                    "name":"xs",
                    "type":"List[String]"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Concatenate a list of strings into a single string, inserting the separator `sep` between\n each pair of strings."
            },{
                "name":"isWhiteSpace",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if all chars in `s` are white space characters.\n\n Returns `true` if `s` is empty."
            },{
                "name":"unlines",
                "tparams":[],
                "fparams":[{
                    "name":"a",
                    "type":"List[String]"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Join the array of strings `a` separating each pair of strings and\n ending the result string with the system dependent line separator."
            },{
                "name":"replaceMatches",
                "tparams":[],
                "fparams":[{
                    "name":"patt",
                    "type":"String"
                },{
                    "name":"rep",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns `s` with every match of the regular expression `patt` replaced by the string `rep`."
            },{
                "name":"levenshteinDistance",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"t",
                    "type":"String"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Calculate the Levenshtein distance between the strings `s` and `t`.\n\n The answer is the number deletions, insertions or substitutions needed to turn\n string `s` into string `t`."
            },{
                "name":"commonSuffix",
                "tparams":[],
                "fparams":[{
                    "name":"s1",
                    "type":"String"
                },{
                    "name":"s2",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return the common suffix of strings `s` and `s2`.\n\n Returns the empty string if `s1` and `s2` do not share a common suffix."
            },{
                "name":"isMatch",
                "tparams":[],
                "fparams":[{
                    "name":"pattern",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the entire string `s` is matched by the regular expression `pattern`.\n\n Note - use `isSubmatch` to search for a substring."
            },{
                "name":"padLeft",
                "tparams":[],
                "fparams":[{
                    "name":"w",
                    "type":"Int32"
                },{
                    "name":"c",
                    "type":"Char"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Pad the string `s` at the left with the supplied char `c` to fit the width `w`."
            },{
                "name":"isPrefixOf",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `sub` is a prefix of `s`."
            },{
                "name":"takeWhileRight",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the suffix of string `s` where all the characters satisfy\n the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"dropLeft",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Drop the first `n` characters of string `s` from the left.\n\n If `n` extends past the end of string s, return the empty string."
            },{
                "name":"isSubmatch",
                "tparams":[],
                "fparams":[{
                    "name":"pattern",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the string `s` is matched by the regular expression `pattern` at any point."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Char -> a & b"
                },{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `x` and all elements in `s` going from left to right."
            },{
                "name":"trimLeft",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns string `s` with all leading space characters removed."
            },{
                "name":"rotateRight",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Rotate the contents of string `s` by `n` steps to the right."
            },{
                "name":"map2",
                "tparams":[{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Char -> Char & a"
                },{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"t",
                    "type":"String"
                }],
                "result":"String",
                "effect":"e",
                "comment":"Returns a string where the element at index `i` is `f(a, b)` where\n `a` is the element at index `i` in `s` and `b` is the element at index `i` in `t`.\n\n If either `s` or `t` becomes depleted, then no further elements are added to the resulting string.\n Functionally equivalent to zipWith."
            },{
                "name":"isEmpty",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the string `s` is the empty string."
            },{
                "name":"stripSuffix",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[String]",
                "effect":"Pure",
                "comment":"Returns `Some(prefix)` of string `s` if its suffix matches `sub`."
            },{
                "name":"indexOfRightWithOffset",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"offset",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"This is `indexOfRight` with a start offset.\n\n Returns `None` if `sub` is the empty string."
            },{
                "name":"isSuffixOf",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `sub` is a suffix of `s`."
            },{
                "name":"drop",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Alias for `dropLeft`."
            },{
                "name":"dropRight",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Drop the last `n` characters of string `s` from the right.\n\n If `n` is greater than the length of string `s`, return the empty string."
            },{
                "name":"commonPrefix",
                "tparams":[],
                "fparams":[{
                    "name":"s1",
                    "type":"String"
                },{
                    "name":"s2",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return the common prefix of strings `s` and `s2`.\n\n Returns the empty string if `s1` and `s2` do not share a common prefix."
            },{
                "name":"indexOfLeftWithOffset",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"offset",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"This is `indexOfLeft` with a start offset.\n\n Returns `None` if `sub` is the empty string."
            },{
                "name":"isAscii",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if all chars in `s` are ascii characters.\n\n Returns `true` if `s` is empty."
            },{
                "name":"findIndexOfRight",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Optionally return the position of the first character in `s` satisfying `f`, reading right to left.\n\n If nothing satisfies `f` return None."
            },{
                "name":"length",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the length of the string `s`."
            },{
                "name":"toLowerCase",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the lower case version of the string `s`."
            },{
                "name":"findIndexOfLeft",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Optionally returns the position of the first character in `x` satisfying `f`.\n\n Returns `None` if no character in `s` satisfies `f`."
            },{
                "name":"zip",
                "tparams":[],
                "fparams":[{
                    "name":"a",
                    "type":"String"
                },{
                    "name":"b",
                    "type":"String"
                }],
                "result":"Array[(Char, Char)]",
                "effect":"Impure",
                "comment":"Returns an array where the element at index `i` is `(x, y)` where\n `x` is the element at index `i` in `a` and `y` is the element at index `i` in `b`.\n\n If either `a` or `b` becomes depleted, then no further elements are added to the resulting array."
            },{
                "name":"exists",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if at least one char in `s` satisfies the predicate `f`.\n\n Returns `false` if `a` is empty."
            },{
                "name":"split",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"r",
                    "type":"String"
                }],
                "result":"Array[String]",
                "effect":"Impure",
                "comment":"Splits the string `s` around matches of the regular expression `r`."
            },{
                "name":"findIndices",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"List[Int32]",
                "effect":"Pure",
                "comment":"Returns the positions of the all the elements in `s` satisfying `f`.\n\n The function `f` must be pure."
            },{
                "name":"unwords",
                "tparams":[],
                "fparams":[{
                    "name":"a",
                    "type":"List[String]"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Join the array of strings `a` separating each pair of strings with a\n single space character."
            },{
                "name":"dropWhile",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Alias for `dropWhileLeft`."
            },{
                "name":"stripPrefix",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[String]",
                "effect":"Pure",
                "comment":"Returns `Some(suffix)` of string `s` if its prefix matches `sub`."
            },{
                "name":"zipWith",
                "tparams":[{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Char -> Char & a"
                },{
                    "name":"a",
                    "type":"String"
                },{
                    "name":"b",
                    "type":"String"
                }],
                "result":"String",
                "effect":"e",
                "comment":"Returns a string where the element at index `i` is `f(x, y)` where\n `x` is the element at index `i` in `a` and `y` is the element at index `i` in `b`.\n\n If either `a` or `b` becomes depleted, then no further elements are added to the resulting array."
            },{
                "name":"repeat",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"n",
                    "type":"Int32"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns a string with the string `s` repeated `n` times.\n\n Returns the empty string if `n < 0`."
            },{
                "name":"update",
                "tparams":[],
                "fparams":[{
                    "name":"i",
                    "type":"Int32"
                },{
                    "name":"a",
                    "type":"Char"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns `s` with the element at index `i` replaced by `a`.\n\n Returns `s` if `i < 0` or `i > length(xs)-1`."
            },{
                "name":"flatten",
                "tparams":[],
                "fparams":[{
                    "name":"xs",
                    "type":"List[String]"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Concatenate a list of strings into a single string."
            },{
                "name":"trimRight",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns string `s` with all trailing space characters removed."
            },{
                "name":"isInfixOf",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if `sub` is an infix of `s`."
            },{
                "name":"startsWith",
                "tparams":[],
                "fparams":[{
                    "name":"s1",
                    "type":"String"
                },{
                    "name":"s2",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if the string `s1` starts with the string `s2`."
            },{
                "name":"dropWhileRight",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the front of string `s` after dropping all the characters\n from the right end that satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"takeRight",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Take the last `n` characters of string `s` from the right.\n\n If `n` is greater than the length of string `s`, return all the characters\n of `s`."
            },{
                "name":"stripIndent",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Strip every indented line in string `s` by `n` spaces. `n` must be greater than `0`.\n Note, tabs are counted as a single space.\n\n If the string `s` in nonempty, the returned string normalizes line\n termination characters and adds a line terminator to the last line\n of the string if it does not already end with a newline.\n\n If the string `s` is empty, then the empty string is returned."
            },{
                "name":"takeWhile",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Alias for `takeWileLeft`."
            },{
                "name":"replaceChar",
                "tparams":[],
                "fparams":[{
                    "name":"target",
                    "type":"Char"
                },{
                    "name":"rep",
                    "type":"Char"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns `s` with every match of the character `target` replaced by the character `rep`."
            },{
                "name":"take",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Alias for `takeLeft`."
            },{
                "name":"indexOf",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Alias for `indexOfLeft`."
            },{
                "name":"foldRight2",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Char -> a -> a & b"
                },{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"t",
                    "type":"String"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Accumulates the result of applying `f` pairwise to the elements of `s` and `t`\n starting with the initial value `x` and going from right to left."
            },{
                "name":"sliceLeft",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"e",
                    "type":"Int32"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Get the substring of `s` to the left of index `e` (exclusive).\n\n `sliceLeft == slice(s, 0 , e)`"
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the reverse of `s`."
            },{
                "name":"indexOfRight",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Return the index of the first occurence of `sub` in `s` from the right.\n\n If `sub` is not present in `s` return None.\n\n If `sub` is the empty string return None."
            },{
                "name":"words",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"List[String]",
                "effect":"Pure",
                "comment":"Split the string `s` into an list of words, dividing on one or more white space characters.\n Leading and trailing spaces are trimmed."
            },{
                "name":"lines",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"List[String]",
                "effect":"Pure",
                "comment":"Split the string `s` into an array of lines, breaking on newline.\n\n Newline is recognized as any Unicode linebreak sequence including\n Windows (carriage return, line feed) or Unix (line feed)."
            },{
                "name":"replace",
                "tparams":[],
                "fparams":[{
                    "name":"target",
                    "type":"String"
                },{
                    "name":"rep",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns `s` with every match of the substring `target` replaced by the string `rep`."
            },{
                "name":"unfoldWithIter",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Unit ~> Option[Char]"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Build a string by applying the function `next` to `()`. `next` is expected to encapsulate\n a stateful resource such as a file handle that can be iterated.\n\n `next` should return `Some(c)` to signal a new char `c`.\n\n `next` should return `None` to signal the end of building the string."
            },{
                "name":"unfoldString",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> Option[(String, b)] & b"
                },{
                    "name":"x",
                    "type":"b"
                }],
                "result":"String",
                "effect":"e",
                "comment":"Build a string from the seed value `x` applying the function `f` until `f` returns `None`.\n\n This is a version of `unfold` where `f` generates substrings rather than chars."
            },{
                "name":"splitAt",
                "tparams":[],
                "fparams":[{
                    "name":"n",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"(String, String)",
                "effect":"Pure",
                "comment":"Split the string `s` at the position `n` returning the left and\n right parts.\n\n If `n` exceeds the length of string `s`, return the whole string\n paired with the empty string."
            },{
                "name":"dropWhileAround",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the middle of string `s` after dropping all the characters\n from both ends that satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"forall",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Bool",
                "effect":"Pure",
                "comment":"Returns `true` if and only if all chars in `s` satisfy the predicate `f`.\n\n Returns `true` if `s` is empty."
            },{
                "name":"foldLeft2",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Char -> Char -> a & b"
                },{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"t",
                    "type":"String"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Accumulates the result of applying `f` pairwise to the elements of `s` and `t`\n starting with the initial value `x` and going from left to right."
            },{
                "name":"map",
                "tparams":[{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Char & a"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"e",
                "comment":"Returns the result of applying `f` to every character in `s`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> a -> a & b"
                },{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"b",
                "effect":"e",
                "comment":"Applies `f` to a start value `x and all elements in `s` going from right to left."
            },{
                "name":"abbreviateRight",
                "tparams":[],
                "fparams":[{
                    "name":"w",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Abbreviate the string `s` if it exceeds the width `w`.\n\n If the length of `s` exceeds `w` and `w >= 3\" then `s` is truncated and the last\n three characters are replaced with ellipses.\n\n If the length of `s` exceeds `w` and `w < 3\" then the empty string is returned."
            },{
                "name":"toArray",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Array[Char]",
                "effect":"Impure",
                "comment":"Returns the given string `s` as an array of characters."
            },{
                "name":"indices",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"List[Int32]",
                "effect":"Pure",
                "comment":"Returns the positions of the all the occurences of `sub` in `s`.\n\n Returns `Nil` if `sub` is the empty string."
            },{
                "name":"toList",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"List[Char]",
                "effect":"Pure",
                "comment":"Returns the given string `s` as a list of characters."
            },{
                "name":"trim",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns a copy of the string `s` without trailing and leading whitespaces.\n\n Returns a new empty string if there is no characters in `s`."
            },{
                "name":"countSubstring",
                "tparams":[],
                "fparams":[{
                    "name":"sub",
                    "type":"String"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Count the occurences of `sub` in string `s`."
            },{
                "name":"sliceRight",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"b",
                    "type":"Int32"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Get the substring of `s` to the right starting at index `b` (inclusive).\n\n `sliceRight == slice(s, b , length(s))`"
            },{
                "name":"splitOn",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                },{
                    "name":"sub",
                    "type":"String"
                }],
                "result":"List[String]",
                "effect":"Pure",
                "comment":"Split the string `s` on matches of `sub`."
            },{
                "name":"dropWhileLeft",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Bool"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the tail of string `s` after dropping all the initial chars\n that satisfy the predicate `f`.\n\n The function `f` must be pure."
            },{
                "name":"concat",
                "tparams":[],
                "fparams":[{
                    "name":"s1",
                    "type":"String"
                },{
                    "name":"s2",
                    "type":"String"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Returns the string `s1` followed by the string `s2`."
            },{
                "name":"mapWithIndex",
                "tparams":[{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"Char -> Int32 -> Char & a"
                },{
                    "name":"s",
                    "type":"String"
                }],
                "result":"String",
                "effect":"e",
                "comment":"Returns the result of applying `f` to every character in `s` along with that character's index."
            },{
                "name":"lineSeparator",
                "tparams":[],
                "fparams":[],
                "result":"String",
                "effect":"Pure",
                "comment":"Get the system line separator."
            }]
        },
        "Core.Io.OutputStream":{
            "defs":[{
                "name":"new",
                "tparams":[],
                "fparams":[{
                    "name":"f",
                    "type":"File"
                }],
                "result":"Result[OutputStream, IOError]",
                "effect":"Impure",
                "comment":"Opens the specified `File` into an `OutputStream`"
            },{
                "name":"flush",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"OutputStream"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Sends all bytes to the underlying resource of `s`."
            },{
                "name":"writeBuffer",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Array[Int8]"
                },{
                    "name":"s",
                    "type":"OutputStream"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Writes the buffer `b` into the `s` stream."
            },{
                "name":"writeBufferWithOffset",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Array[Int8]"
                },{
                    "name":"o",
                    "type":"Int32"
                },{
                    "name":"l",
                    "type":"Int32"
                },{
                    "name":"s",
                    "type":"OutputStream"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Writes `l` elements of the buffer `b` into the `s` stream, starting from index `o` in the buffer."
            },{
                "name":"writeByte",
                "tparams":[],
                "fparams":[{
                    "name":"b",
                    "type":"Int8"
                },{
                    "name":"s",
                    "type":"OutputStream"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Writes a single byte `b` into the `s` stream."
            },{
                "name":"close",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"OutputStream"
                }],
                "result":"Result[Unit, IOError]",
                "effect":"Impure",
                "comment":"Closes the underlying resource of `s`."
            }]
        },
        "Random":{
            "defs":[{
                "name":"nextBool",
                "tparams":[],
                "fparams":[{
                    "name":"r",
                    "type":"Random"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns the next pseudorandom boolean from the given random number generator `r`."
            },{
                "name":"newWithSeed",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"Int64"
                }],
                "result":"Random",
                "effect":"Impure",
                "comment":"Returns a fresh random number generator initialized with the given seed `s`."
            },{
                "name":"nextFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"r",
                    "type":"Random"
                }],
                "result":"Float32",
                "effect":"Impure",
                "comment":"Returns the next pseudorandom 32-bit floating point number from the given random number generator `r`."
            },{
                "name":"nextInt64",
                "tparams":[],
                "fparams":[{
                    "name":"r",
                    "type":"Random"
                }],
                "result":"Int64",
                "effect":"Impure",
                "comment":"Returns the next pseudorandom 64-bit integer value from the given random number generator `r`."
            },{
                "name":"nextNatWithMax",
                "tparams":[],
                "fparams":[{
                    "name":"r",
                    "type":"Random"
                },{
                    "name":"m",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Impure",
                "comment":"Returns the next pseudorandom 32-bit integer value between `0` and `m` (exclusive) using the given random number generator `r`."
            },{
                "name":"new",
                "tparams":[],
                "fparams":[],
                "result":"Random",
                "effect":"Impure",
                "comment":"Returns a fresh random number generator."
            },{
                "name":"choose",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"r",
                    "type":"Random"
                },{
                    "name":"a",
                    "type":"Array[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Returns a pseudorandom element from the given array `a` using the random number generator `r`.\n\n Returns `None` if the given array `a` is empty."
            },{
                "name":"nextGaussian",
                "tparams":[],
                "fparams":[{
                    "name":"r",
                    "type":"Random"
                }],
                "result":"Float64",
                "effect":"Impure",
                "comment":"Returns the next pseudorandom Gaussian distributed 64-bit floating point number."
            },{
                "name":"nextInt32",
                "tparams":[],
                "fparams":[{
                    "name":"r",
                    "type":"Random"
                }],
                "result":"Int32",
                "effect":"Impure",
                "comment":"Returns the next pseudorandom 32-bit integer value from the given random number generator `r`."
            },{
                "name":"nextFloat64",
                "tparams":[],
                "fparams":[{
                    "name":"r",
                    "type":"Random"
                }],
                "result":"Float64",
                "effect":"Impure",
                "comment":"Returns the next pseudorandom 64-bit floating point number from the given random number generator `r`."
            }]
        },
        "MutSet":{
            "defs":[{
                "name":"count",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Int32",
                "effect":"Impure",
                "comment":"Returns the number of elements in the mutable set `s` that satisfy the predicate function `f`.\n\n The function `f` must be pure."
            },{
                "name":"empty",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[],
                "result":"MutSet[a]",
                "effect":"Impure",
                "comment":"Returns a fresh empty set."
            },{
                "name":"clear!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes all elements from the mutable set `s`."
            },{
                "name":"__eq",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s1",
                    "type":"MutSet[a]"
                },{
                    "name":"s2",
                    "type":"MutSet[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if the mutable sets `s1` and `s2` are equal, i.e. they have the same elements."
            },{
                "name":"reduceLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Applies `f` to all elements in the mutable set `s` going from left to right until a single value `v` is obtained. Returns `Some(v)`.\n\n That is, the result is of the form: `Some(f(...f(f(x1, x2), x3)..., xn))`\n\n Returns `None` if `s` is the empty set."
            },{
                "name":"isSubsetOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s1",
                    "type":"MutSet[a]"
                },{
                    "name":"s2",
                    "type":"MutSet[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns true if and only if every element in the mutable set `s1` appears in the mutable set `s2`."
            },{
                "name":"reduce",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Alias for `reduceLeftOpt`."
            },{
                "name":"foreach",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a ~> Unit"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies `f` to every element of the mutable set `s`.\n\n The function `f` must be impure."
            },{
                "name":"toImmutable",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Set[a]",
                "effect":"Impure",
                "comment":"Returns the mutable set `s` as an immutable set."
            },{
                "name":"exists",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if at least one element in the mutable set `s` satisfies the predicate function `f`.\n\n Returns `false` if `s` is the empty set.\n\n The function `f` must be pure."
            },{
                "name":"transform!",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a & b"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Applies the function `f` to every element in the mutable set `s`."
            },{
                "name":"partition",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"(MutSet[a], MutSet[a])",
                "effect":"Impure",
                "comment":"Returns a pair of mutable sets `(s1, s2)` such that:"
            },{
                "name":"add!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Adds the element `x` to the mutable set `s`."
            },{
                "name":"addAll!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s1",
                    "type":"MutSet[a]"
                },{
                    "name":"s2",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Adds all elements in the mutable set `s1` to the mutable set `s2`."
            },{
                "name":"isEmpty",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns true if and only if `s` is the empty set."
            },{
                "name":"memberOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns true if and only if `x` is a member of the mutable set `s`."
            },{
                "name":"removeAll!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s1",
                    "type":"MutSet[a]"
                },{
                    "name":"s2",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes all elements in the mutable set `s1` from the mutable set `s2`."
            },{
                "name":"copy",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"MutSet[a]",
                "effect":"Impure",
                "comment":"Returns a shallow copy of the mutable set `s`."
            },{
                "name":"toMap",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                }],
                "fparams":[{
                    "name":"s",
                    "type":"MutSet[(a, b)]"
                }],
                "result":"Map[a, b]",
                "effect":"Impure",
                "comment":"Returns the association set `s` as a map.\n\n If `s` contains multiple mappings with the same key, `toMap` does not\n make any guarantees about which mapping will be in the resulting map."
            },{
                "name":"singleton",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                }],
                "result":"MutSet[a]",
                "effect":"Impure",
                "comment":"Returns the singleton set containing `x`."
            },{
                "name":"find",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Alias for `findLeft`.\n\n The function `f` must be pure."
            },{
                "name":"toList",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"List[a]",
                "effect":"Impure",
                "comment":"Returns the mutable set `s` as a list."
            },{
                "name":"forall",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns `true` if and only if all elements in the mutable set `s` satisfy the predicate function `f`.\n\n Returns `true` if `s` is the empty set.\n\n The function `f` must be pure."
            },{
                "name":"refine!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes all elements from the mutable set `s` that do not satisfy the predicate function `f`.\n\n The function `f` must be pure."
            },{
                "name":"reduceRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> a -> a & b"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Applies `f` to all elements in the mutable set `s` going from right to left until a single value `v` is obtained.  Returns `Some(v)`.\n\n That is, the result is of the form: `Some(f(x1, ...f(xn-2, f(xn-1, xn))...))`\n\n Returns `None` if `s` is the empty set."
            },{
                "name":"retainAll!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s1",
                    "type":"MutSet[a]"
                },{
                    "name":"s2",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes all elements from the mutable set `s2` that are not in the mutable set `s1`."
            },{
                "name":"fold",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Alias for `foldLeft`."
            },{
                "name":"remove!",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"x",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Removes the element `x` from the mutable set `s`."
            },{
                "name":"findLeft",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Optionally returns the first element of the mutable set `s` that satisfies the predicate function `f` when searching from left to right.\n\n The function `f` must be pure."
            },{
                "name":"foldLeft",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"b -> a -> b & c"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Applies `f` to a start value `i` and all elements in the mutable set `s` going from left to right.\n\n That is, the result is of the form: `f(...f(f(i, x1), x2)..., xn)`."
            },{
                "name":"foldRight",
                "tparams":[{
                    "name":"a"
                },{
                    "name":"b"
                },{
                    "name":"e"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> b -> b & c"
                },{
                    "name":"i",
                    "type":"a"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"b",
                "effect":"Impure",
                "comment":"Applies `f` to a start value `i` and all elements in the mutable set `s` going from right to left.\n\n That is, the result is of the form: `f(x1, ...f(xn-1, f(xn, i))...)`."
            },{
                "name":"replace!",
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
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Replaces the element `x` with the element `y` if `x` is in the mutable set `s`.\n\n The mutable set `s` is unchanged if the element `x` is not in it."
            },{
                "name":"isProperSubsetOf",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s1",
                    "type":"MutSet[a]"
                },{
                    "name":"s2",
                    "type":"MutSet[a]"
                }],
                "result":"Bool",
                "effect":"Impure",
                "comment":"Returns true if and only if every element in the mutable set `s1` appears in the mutable set `s2` and `s1 != s2`."
            },{
                "name":"findRight",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"f",
                    "type":"a -> Bool"
                },{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Option[a]",
                "effect":"Impure",
                "comment":"Optionally returns the first element of the mutable set `s` that satisfies the predicate function `f` when searching from right to left.\n\n The function `f` must be pure."
            },{
                "name":"size",
                "tparams":[{
                    "name":"a"
                }],
                "fparams":[{
                    "name":"s",
                    "type":"MutSet[a]"
                }],
                "result":"Int32",
                "effect":"Impure",
                "comment":"Returns the size of the mutable set `s`."
            }]
        },
        "Int64":{
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
                "effect":"Pure",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` right by `distance` bits."
            },{
                "name":"clampToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"minimum",
                    "type":"Int8"
                },{
                    "name":"maximum",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int8`.\n\n Returns `x` clamped within the Int8 range `minimum` to `maximum`."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the maximum number representable by an `Int64`."
            },{
                "name":"lowestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the distance between `x` and `y`.\n If this distance exceeds maxValue(), -1 is returned."
            },{
                "name":"tryToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Option[Int16]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int16]`.\n\n Returns `Some(x as Int16)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int16\n (i.e. -32768 to 32767)."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0).\n Considers the 6 rightmost bits of `position` (`position` mod 64).\n The bits of x have positions: 0 (rightmost bit) - 63 (leftmost bit)"
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the value obtained by reversing the bits in the\n two's complement binary representation of `x`."
            },{
                "name":"highestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"bitCount",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of one-bits in the two's complement binary\n representation of `x`."
            },{
                "name":"lowestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int64",
                "effect":"Pure",
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the logical right shift of `x` by `distance`.\n Only the rightmost 6 bits of `distance` are considered (ie. `distance % 64`).\n A zero is shifted into the leftmost position regardless of sign extension."
            },{
                "name":"clampToInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"minimum",
                    "type":"Int16"
                },{
                    "name":"maximum",
                    "type":"Int16"
                }],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int16`.\n\n Returns `x` clamped within the Int16 range `minimum` to `maximum`."
            },{
                "name":"numberOfLeadingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of zero bits preceding the\n highest-order/leftmost one-bit in `x`.\n Returns 64 if x=0."
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
                "effect":"Pure",
                "comment":"Returns the smaller of `x` and `y`."
            },{
                "name":"clampToInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                },{
                    "name":"minimum",
                    "type":"Int32"
                },{
                    "name":"maximum",
                    "type":"Int32"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Convert `x` to an `Int32`.\n\n Returns `x` clamped within the Int32 range `minimum` to `maximum`."
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` set (to 1).\n Considers the 6 rightmost bits of `position` (`position` mod 64).\n The bits of x have positions: 0 (rightmost bit) - 63 (leftmost bit)"
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` flipped.\n Considers the 6 rightmost bits of `position` (`position` mod 64).\n The bits of x have positions: 0 (rightmost bit) - 63 (leftmost bit)"
            },{
                "name":"tryToInt8",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Option[Int8]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int8]`.\n\n Returns `Some(x as Int8)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int8\n (i.e. -128 to 127)."
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the minimum number representable by an `Int64`."
            },{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` left by `distance` bits."
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Returns the absolute value of `x`.\n If the absolute value exceeds maxValue(), -1 is returned."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return a string representation of `x`."
            },{
                "name":"toFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Convert `x` to a Float32.\n\n Warning: The numeric value of `x` may lose precision."
            },{
                "name":"highestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the position of the highest-order/leftmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 63 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"numberOfTrailingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of zero bits following the\n lowest-order/rightmost one-bit in `x`.\n Returns 64 if x=0."
            },{
                "name":"tryToInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Option[Int32]",
                "effect":"Pure",
                "comment":"Convert `x` to an `Option[Int32]`.\n\n Returns `Some(x as Int32)` if the numeric value of `x` can be represented exactly.\n\n Returns `None` if the numeric value of `x` is outside the range of Int32\n (i.e. -2147483648 to 2147483647)."
            },{
                "name":"toFloat64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Convert `x` to a Float32.\n\n Warning: The numeric value of `x` may lose precision."
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
                "effect":"Pure",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n Considers the 6 rightmost bits of `position` (`position` mod 64).\n The bits of x have positions: 0 (rightmost bit) - 63 (leftmost bit)."
            },{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns 1 if x > 0, -1 if x < 0, and 0 if x = 0.\n The sign of x."
            },{
                "name":"toBigInt",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int64"
                }],
                "result":"BigInt",
                "effect":"Pure",
                "comment":"Convert `x` to a BigInt.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"fromString",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Result[Int64, String]",
                "effect":"Pure",
                "comment":"Parse the string `s` as an Int64, leading or trailing whitespace is trimmed.\n A successful parse is wrapped with `OK(x)`, a parse failure is indicated by `Err(_)`."
            }]
        },
        "Console.Color.Default":{
            "defs":[{
                "name":"toRGB",
                "tparams":[],
                "fparams":[{
                    "name":"c",
                    "type":"Default"
                }],
                "result":"(Int32, Int32, Int32)",
                "effect":"Pure",
                "comment":"Returns the RGB-triplet for the given color `c`."
            }]
        },
        "Console.StdErr":{
            "defs":[{
                "name":"flush",
                "tparams":[],
                "fparams":[],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Flushes the standard error stream."
            },{
                "name":"print",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Prints the given string `s` to the standard error stream."
            },{
                "name":"printLine",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Prints the given string `s` and a newline to the standard error stream."
            },{
                "name":"newLine",
                "tparams":[],
                "fparams":[],
                "result":"Unit",
                "effect":"Impure",
                "comment":"Prints a newline to the standard error stream."
            }]
        },
        "Int8":{
            "defs":[{
                "name":"size",
                "tparams":[],
                "fparams":[],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of bits used to represent an `Int8`."
            },{
                "name":"numberOfLeadingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of zero bits preceding the\n highest-order/leftmost one-bit in `x`.\n Returns 8 if x=0."
            },{
                "name":"toString",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"String",
                "effect":"Pure",
                "comment":"Return a string representation of `x`."
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the logical right shift of `x` by `distance`.\n Only the rightmost 5 bits of `distance` are considered (ie. `distance % 32`).\n A zero is shifted into the leftmost position regardless of sign extension."
            },{
                "name":"bitCount",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of one-bits in the two's complement binary\n representation of `x`."
            },{
                "name":"lowestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"highestOneBit",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Returns a value with at most a single one-bit, in the position\n of the highest-order/leftmost one-bit in `x`.\n Returns 0 if x=0."
            },{
                "name":"reverse",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Returns the value obtained by reversing the bits in the\n two's complement binary representation of `x`."
            },{
                "name":"fromString",
                "tparams":[],
                "fparams":[{
                    "name":"s",
                    "type":"String"
                }],
                "result":"Result[Int8, String]",
                "effect":"Pure",
                "comment":"Parse the string `s` as an Int8, leading or trailing whitespace is trimmed.\n A successful parse is wrapped with `OK(x)`, a parse failure is indicated by `Err(_)`."
            },{
                "name":"toFloat64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Float64",
                "effect":"Pure",
                "comment":"Convert `x` to a Float64.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"toInt16",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int16",
                "effect":"Pure",
                "comment":"Convert `x` to an Int16.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"toInt32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Convert `x` to an Int32.\n\n The numeric value of `x` is preserved exactly."
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the bit of `x` at `position` (either 0 or 1).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 7 (leftmost bit)"
            },{
                "name":"lowestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` flipped.\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 7 (leftmost bit)"
            },{
                "name":"signum",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` left by `distance` bits."
            },{
                "name":"toInt64",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int64",
                "effect":"Pure",
                "comment":"Convert `x` to an Int64.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"numberOfTrailingZeros",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the number of zero bits following the\n lowest-order/rightmost one-bit in `x`.\n Returns 8 if x=0."
            },{
                "name":"maxValue",
                "tparams":[],
                "fparams":[],
                "result":"Int8",
                "effect":"Pure",
                "comment":"Returns the maximum number representable by an `Int8`."
            },{
                "name":"highestOneBitPosition",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int32",
                "effect":"Pure",
                "comment":"Returns the position of the highest-order/leftmost one-bit in `x`.\n Possible return values: 0 (rightmost bit) - 7 (leftmost bit)\n                         -1 if x = 0"
            },{
                "name":"abs",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Int8",
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the larger of `x` and `y`."
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
                "effect":"Pure",
                "comment":"Returns `x` with the bit at position `position` cleared (to 0).\n Considers the 5 rightmost bits of `position` (`position` mod 32).\n The bits of x have positions: 0 (rightmost bit) - 7 (leftmost bit)"
            },{
                "name":"toFloat32",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"Float32",
                "effect":"Pure",
                "comment":"Convert `x` to a Float32.\n\n The numeric value of `x` is preserved exactly."
            },{
                "name":"toBigInt",
                "tparams":[],
                "fparams":[{
                    "name":"x",
                    "type":"Int8"
                }],
                "result":"BigInt",
                "effect":"Pure",
                "comment":"Convert `x` to a BigInt.\n\n The numeric value of `x` is preserved exactly."
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
                "effect":"Pure",
                "comment":"Returns the the value obtained by rotating the two's complement\n binary representation of `x` right by `distance` bits."
            },{
                "name":"minValue",
                "tparams":[],
                "fparams":[],
                "result":"Int8",
                "effect":"Pure",
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
                "effect":"Pure",
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
                "effect":"Pure",
                "comment":"Returns the smaller of `x` and `y`."
            }]
        }
    }
}