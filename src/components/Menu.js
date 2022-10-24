import { useStore } from '../hooks/useStore'

export const Menu = () => {
  const [saveWorld, resetWorld] = useStore((state) => [state.saveWorld, state.resetWorld])
  return ( <div className='menu absolute'>
    <button className="text" onClick={()  => saveWorld()}>Save</button>
    <button className="text" onClick={() => resetWorld()}>Reset</button>
  </div>)
}