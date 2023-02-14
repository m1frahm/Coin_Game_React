
function CoinImage(props) {
  const headImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8WGH5R7vPUEYqU75g659_cq7qWdSZ7zC7nUo8gK0hQoPV-gEK2Ho1AxwzXpax5ggtl0&usqp=CAU";
  const tailImage =
  "https://us.123rf.com/450wm/spideyspike/spideyspike2007/spideyspike200700006/spideyspike200700006.jpg?ver=6";
  if (props.coin === 0) {
    return <img src={headImage}/> // variables must always be in {} 
      } else {
        return <img src={tailImage}/>
      }
    }

    // add to line 9

export default CoinImage;

