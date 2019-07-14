---
to: src/components/<%=name%>/<%=name%>.js
---

import React from 'react'

export const <%= name %> = () => (
  <div className="<%= h.changeCase.paramCase(name) %>">
    New component!
  </div>
)

export default App;



