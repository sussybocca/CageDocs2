# The CAGE Constitution

The Constitution is the versioned definition of what CAGE considers legal. It prevents compiler revisions from silently changing the meaning of a valid program.

## Core law families

CAGE law covers glyph identity, formatting, structure, identity, typing, mutability, ownership, capabilities, resources, concurrency, time, state, faults, visual UI, interaction, events, imports, exports, modules, targets, packages, and final execution authority.

A source can pass grammar and still fail a later law. The Constitution does not authorize automatic repair of missing terminators, malformed glyphs, undeclared capabilities, unhandled faults, dead controls, or incomplete resource evidence.

## Versioning

Strict V4 source selects a Constitution revision. Fault packets, proof evidence, package identity, and decoders can be tied to that revision so old tooling cannot silently reinterpret newer legality rules.
