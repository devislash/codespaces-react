const Body = ()=>{
    const FetchMemes = async()=>{
        const data = await fetch('https://meme-api.com/gimme/20');
        const json = data.json();
        console.log(json);
    }
    return(

        <div>Body</div>
    );
}

export default Body;