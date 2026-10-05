# Native compilation

CAGE source passes through frontend parsing, source-law checks, typed verification, control-flow analysis, optimization, and lowering before target generation.

The public source snapshot includes the CAGE lexer, Source Law, core verifier, Constitution, and resource-algebra modules so readers can inspect real language implementation code rather than only prose documentation.

CAGE also has target modules for x86-64, ARM64, and WASM. Strict build modes keep the compiler revision, target, Constitution, and other declared inputs tied to the resulting build identity.
