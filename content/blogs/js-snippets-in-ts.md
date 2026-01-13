---
title: Nvim Javascript Snippets in Typescript Files
slug: js-snippets-in-ts
description: Configure nvim javascript snippets to work in typescript files
longDescription: How to configure nvim to enable javascript snippets in typescript files
tags: ["typescript", "javascript", "vim", "tailwind"]
timestamp: 2025-01-11T00:00:00+00:00
featured: true
---

```lua filename="~/.config/nvim/lua/plugins/mini-snippets.lua"
return {
  {
    "nvim-mini/mini.snippets",
    dependencies = {
      "rafamadriz/friendly-snippets",
    },
    event = "VeryLazy",
    config = function()
      local mini_snippets = require("mini.snippets")
      local gen_loader = mini_snippets.gen_loader

      -- Custom loader that loads JavaScript snippets for JS/TS files only
      local function load_js_snippets(context)
        local lang = context and context.lang or ""
        -- From docs: "To interactively check the current language with default
        -- context, execute :=MiniSnippets.default_prepare({}) and see data in
        -- the second table." For .tsx files, this returns "tsx", not
        -- typescriptreact
        if lang == "javascript"
          or lang == "javascriptreact"
          or lang == "typescript"
          or lang == "tsx"
        then
          return {
            -- This matches friendly-snippets and user-defined snippets in
            -- nvim/snippets/javascript
            gen_loader.from_runtime("javascript/*.json")(context),
          }
        end
        return {}
      end

      mini_snippets.setup({
        snippets = {
          -- Define a global snippets file if needed
          -- gen_loader.from_file("~/.config/nvim/snippets/global.json"),
          load_js_snippets,
          gen_loader.from_lang(),
        },
        mappings = {
          stop = "<Esc>",
        },
      })
    end,
  },
}
```
