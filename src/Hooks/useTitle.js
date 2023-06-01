import { useEffect } from "react"

const useTitle = (title)=>{
    //console.log(title)
    useEffect(()=>{
        document.title = `Bistro Boss | ${title}  `
    },[title])
}


export default useTitle;