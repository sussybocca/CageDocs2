# V4 glyph language

CAGE V4 uses canonical Unicode graphemes as source syntax. `④🧰` identifies V4, while `③` identifies the separately frozen V3 generation.

## Identifiers and numbers

V4 project and identifier names use glyph sequences. Keycap digits such as `0️⃣` through `9️⃣` form numeric notation after `🔢`. A glyph that appears in source is not automatically a keyword: many glyphs are project-chosen identifiers.

## Reserved core glyphs

The current lexer gives structural meaning to symbols such as `🏁` program, `🛠️` function, `📦` binding, `🤔` conditional, `🔁` loop, `↩️` return, `📞` call, `📥` import, and `📤` export. The grammar adds records, enums, ownership, effects, faults, capabilities, UI, networking, audio, storage, and other systems forms.

## Canonical source

CAGE can reject malformed grapheme sequences, replacement characters, noncanonical forms, or source that violates the active formatting law. It does not silently substitute the glyph it thinks the programmer intended.
