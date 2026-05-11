import PageIcon from '../icons/pages-svgrepo-com'

interface CardProps {
  size: "sm" | "md" | "lg",
  title: string,
  image?: any,
  description: string,
  tags: string
}

const CardStyle = {backgroundColor:'#ecf6fd', width: '300px', border: "solid #81A6C6 1px", borderRadius:'10px', padding:'15px', boxShadow:'0px 0px 10px rgba(0, 0, 0, 0.3)', marginTop:'10px'}

function Card(props: CardProps) {
  return (
    <div style={CardStyle}>
      <div style={{display: "flex"}}>
        <PageIcon width='25px' height='30px'/>
        <p style={{margin: 0, alignItems:'center', display:"flex"}}>{props.title}</p>
      </div>
      {props.image ? <img src={props.image}></img>: null}
      <p>{props.description}</p>
      <p>{props.tags}</p>
    </div>
  )
}

export { Card }