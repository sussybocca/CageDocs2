# CAGE III — The Tribunal

Passing the individual Courts creates only a candidate. The Tribunal is the final cross-law admission stage.

## Admission flow

```text
Courts passed
  ↓
🟨 candidate
  ↓
🧿 Tribunal
  ↓
🔏 admitted or ⛔ rejected
```

The Tribunal compares proof declarations against the actual program relationships. It checks that resource claims, ownership, capabilities, faults, state transitions, events, UI actions, lifecycle rules, and package evidence agree with each other.

A proof dossier can contain identity evidence, resource allocation, ownership and lifetime graphs, fault routing, state machines, effect graphs, concurrency schedules, temporal contracts, UI interaction graphs, invariants, termination claims, determinism declarations, dependency evidence, and an execution witness.

Admission issues a deterministic certificate tied to the admitted source and evidence. A runtime session can reject an old certificate after its source changes.
