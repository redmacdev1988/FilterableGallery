import React, { useEffect, useState } from "react"

interface IProps {
    getItems: Function
}

function Gallery(props: IProps){
  
    /* Initial state of the items */
    const [arr, setArr] = useState([]);
  
    /* This hook sets the value of items if 
       getItems object changes */
    useEffect(() => {
        console.log("Fetching items");
        setArr(props.getItems());
    }, [props.getItems]); 
    
    // 1) we look at our parent component's getItems to see if we get a different array everytime.
    // because it's declared as a standard function INSIDE the component, it gets re-declared between renders.

    // 2) if our parent component's getItems is declared inside of a useCallback, it gets memoized, and thus
    // when a button is pressed to change state, getItems won't be re-rendered.

    // 3) If our parent component's getItems is declared outside of the function, then it only has that one reference
    // and called when needed.
    
    return <div>
        {arr.map(item => <div key={item}>
            url: {item}
        </div>)}
    </div>
}
export default Gallery;