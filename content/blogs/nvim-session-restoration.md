---
title: Nvim Session Restoration
slug: nvim-session-restoration
description: Automatically restore nvim session with persistence.nvim
longDescription: How to configure nvim to automatically restore the session of the current working directory.
tags: ["nvim"]
timestamp: 2025-01-12T00:00:00+00:00
featured: true
---

```lua filename="~/.config/nvim/lua/config/autocmds.lua"
-- Restore the session automatically for cwd
vim.api.nvim_create_autocmd("VimEnter", {
  group = vim.api.nvim_create_augroup("Persistence", { clear = true }),
  callback = function()
    -- NOTE: Before restoring the session, check:
    -- 1. No arg passed when opening nvim, means no
    -- `nvim --some-arg ./some-path`
    -- 2. No pipe, e.g. `echo "Hello world" | nvim`
    if vim.fn.argc() == 0 and not vim.g.started_with_stdin then
      require("persistence").load()
    end
  end,
  -- HACK: need to enable `nested` otherwise the current buffer will not have
  -- a filetype(no syntax)
  nested = true,
})
```
