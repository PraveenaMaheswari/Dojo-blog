const Home = () => {
    const handleClick= (e) =>{
        console.log('hello' ,e);
    }
    const handleClickAgain=(name)=>{
        console.log('hi' + name);
    }
    return ( 
    <div className="home">
        <h2>homepage</h2>
        <button onClick={handleClick}>Click Me!</button>
        <button onClick={()=>{
            handleClickAgain('praveena')
        }}>Click Me!</button>
    </div>
     );
}
 
export default Home;