const API = async () => {

    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        //Jab pehli dafa request jaati hai data cache me store ho jata hai.
        // Agli dafa jab ham same API call karegain Next.js cache se serve karega (fresh request nahi bhejega).
        // Performance fast hogi lekin updated data turant nahi milega (jab tak ham revalidate ya manually 
        // refresh cache na kare).
        // cache: "force-cache"   

        cache: "no-store", // always fresh data
    });
    // console.log(await res.json())
    let data=await res.json()
    return (
        <div >
            <p className="text-white">TITLE FROM API IS : {data.title}</p>
        </div>
)
}


export default API
