# Starship prompt

A [Starship](https://starship.rs/) prompt based on the *Pastel Powerline* preset,
reworked into self-contained segments so empty segments never leave a colored stub.

The bar shows the **directory** and, when inside a git repo, the **branch + status**
(flowing seamlessly out of the directory block). Command **duration** for slow
commands floats on the right. No OS glyph, no clock, no language version numbers.

## Two variants

| File | Separator style | Intended use |
|------|-----------------|--------------|
| `starship.toml`       | flame `` | default / personal |
| `starship-work.toml`  | rounded `` | work directories |

The two files are identical apart from the separator/end-cap glyphs, so a directory
tree can be given a distinct prompt shape.

> Requires a [Nerd Font](https://www.nerdfonts.com/) for the glyphs to render.

## Install

```sh
mkdir -p ~/.config
ln -sf "$PWD/starship.toml"      ~/.config/starship.toml
ln -sf "$PWD/starship-work.toml" ~/.config/starship-work.toml
```

Then, in `~/.zshrc` (after `eval "$(starship init zsh)"`):

```sh
command -v starship >/dev/null && eval "$(starship init zsh)"
```

## Optional: switch shape by directory

Point `STARSHIP_CONFIG` at the work variant inside a chosen directory tree, and back
to the default everywhere else. Add to `~/.zshrc` and adjust the `work` path:

```sh
_starship_variant() {
  case "$PWD/" in
    "$HOME"/work/*) export STARSHIP_CONFIG="$HOME/.config/starship-work.toml" ;;  # rounded
    *)              export STARSHIP_CONFIG="$HOME/.config/starship.toml" ;;        # flame
  esac
}
autoload -Uz add-zsh-hook
add-zsh-hook chpwd _starship_variant
_starship_variant
```

## Customizing

- **Colors** live in the `[palettes.pastel]` block.
- **Folder shortcuts**: add entries under `[directory.substitutions]`.
- **Git status icons**: the `[git_status]` block (`modified`, `staged`, `untracked`, …).
