import { useState, useEffect } from 'react'

export const Load = () => {
  const [load, setLoad] = useState(true)

  useEffect(() => {
      const setLoadTimeout = setTimeout(() => {
        setLoad(false)
      }, 3000)
      setLoad(true);
      return () => clearTimeout(setLoadTimeout)
  }, [])

  return load === true ? (
      <div className="absolute centered load">
        <div className="absolute title centered">SandMine</div>
        <div className="absolute centered">
          <div className="loader"></div>
        </div>
      </div>
    )
    :
    (null)
}