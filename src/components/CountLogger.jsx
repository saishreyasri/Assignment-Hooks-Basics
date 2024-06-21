
import React, { useEffect, useState } from "react";

function CountLogger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count has changed: ${count}`);
  }, [count]);

  return null;
}

export default CountLogger;
