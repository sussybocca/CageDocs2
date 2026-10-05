# Packages and passports

Strict CAGE packages carry identity and compatibility evidence. A package passport can record the Constitution/compiler revision, declared resources, public import/export surface, diagnostic families, target, determinism class, and content identity.

A package that fails the required checks cannot silently become a valid dependency of another package. Dependency legality is transitive.

Reproducible builds also close over their inputs so source, compiler, dependencies, assets, target description, and project rules are part of the build identity rather than hidden environment assumptions.
