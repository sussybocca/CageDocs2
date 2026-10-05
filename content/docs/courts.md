# The compiler Courts

The Courts are independent legality gates. Passing one Court does not imply the next Court will pass.

```text
SOURCE
 ↓
🧬 Glyph Court
 ↓
📐 Format Court
 ↓
🧱 Structure Court
 ↓
🧠 Type Court
 ↓
📦 Ownership Court
 ↓
🔐 Capability Court
 ↓
🎛 Resource Court
 ↓
🧵 Concurrency Court
 ↓
💥 Fault Court
 ↓
🔁 State and Event Court
 ↓
🎨 UI Court
 ↓
📦 Package Court
 ↓
🟨 Candidate
```

Later Courts may not run after an earlier rejection because their proof would be meaningless on an already-illegal source state. Studio should distinguish passed, failed, and not-yet-reached gates instead of collapsing everything into one generic Build Failed message.
