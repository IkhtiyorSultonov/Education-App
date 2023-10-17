import {useState,useEffect} from "react"

export const useScrollY=():number=>{
    const isBrowers=typeof window !=="undefined"
    const [ScrollY, setScrollY] = useState<number>(0)


    const handeScrollY=():void=>{
        const currentScrollY=isBrowers?window.scrollY:0;

        setScrollY(currentScrollY)
    }


    useEffect(() => {
        window.addEventListener('scroll',handeScrollY,{passive:true})
        
      return () => window.removeEventListener("scroll",handeScrollY)
    }, [])
    

    return ScrollY
}