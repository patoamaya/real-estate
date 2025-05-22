
const UseCaps = () => {
    const useCaps = (string)=>(
        string.charAt(0).toUpperCase(1) + string.slice(1) 
     )
    return {useCaps}
 }
 
 export default UseCaps