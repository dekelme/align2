
import Thumbnail from './Thumbnail';

export default function PictureList(props) {

  console.log(props)
  if (props.thumbnail.length >= 1) {
    const mosh = props.thumbnail.slice(1);
    return (
        <div style={{display:"flex", alignContent:'center',justifyContent:"center"}}>
          { mosh.map((item) => {
            return <Thumbnail picture = {item}></Thumbnail>
          })}
        </div>
    );
  } else {
    return <div>loading</div>
  }
}
