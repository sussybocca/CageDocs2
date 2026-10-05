# Types and values

CAGE types are explicit. `🧬` marks type structure; current grammar recognizes records with `🧬🧱`, enums with `🧬🎚️`, arrays and slices with `📚`, and references with `🔗`.

`📦` introduces a binding. Bindings can carry type, ownership, mutability, lifetime, and initialization evidence.

Strict CAGE avoids hidden conversions. Number-to-text, text-to-number, signedness changes, nullable changes, and ownership changes must be represented deliberately when the active law requires them.

Arithmetic behavior should also be defined rather than left undefined. Exact, checked, saturating, or explicitly wrapping policies can be part of a numeric contract.
