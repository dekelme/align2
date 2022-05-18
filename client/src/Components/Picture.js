

export default function Picture(props) {
    return (
      <div >
          {props.picture.length <= 0 ? <div>loading</div> :
              <div style={{display:'flex',justifyContent:'center',alignItems: 'center',flexDirection:'column'}}>
                      <img src={props.picture[0].download_url} width="400" height="500" alt="kkk"></img>
                  <div>{`Author ${props.picture[0].author} `}</div>
              </div>
          }
      </div>
    );
}
