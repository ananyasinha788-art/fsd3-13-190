const Hello =() =>{
  return <h2>Welcome to React19</h2>;
};

const Book = () => {
  return(
  <>
  <h1>Let's React</h1>
  <h2>price:699</h2>
  <h3>rating:4.75</h3>
  </>

)
}



export default function App(){
  return (<>
    <h1 className="text-2xl text-center bg-black text-green-600 text-white my-2 p-2">Hello React</h1>
    <Hello/>
    </>
  );
}

