import {useRef} from 'react'

export const useRenderCounter = () => {
 const renders = useRef(1) 
 console.log('renders: ', renders.current++)
}