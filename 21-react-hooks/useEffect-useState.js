import React, { useEffect, useState } from 'react';

const Component = () => {
  const [value, setValue] = useState;

  // Vai ser executado uma vez quando o componente for criado na tela
  useEffect(() => {
    setValue(1);
  }, [])

  return (
    <div>
      {value}
    </div>
  )
}

export default Component;