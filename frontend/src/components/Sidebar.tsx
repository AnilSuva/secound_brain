import { BrainIcon } from "../icons/brain-svg"

const basicStyle: React.CSSProperties = {
  fontSize: '20px',
  color: '#14121a',
  cursor:'pointer',
  width: 'fit-content',
  margin: '5px 0px',
  padding: '5px',
}

function Sidebar() {
  return (
    <div className="sidebar" style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <p style={{ margin: 0, fontSize: '25px', fontFamily: 'cursive' }}>Secound Brain</p>
        <BrainIcon width="35px" />
      </div>

      <div style={{paddingLeft:'20px'}}>
        <p className='hoverEffect' style={basicStyle}>Twitter</p>
        <p className='hoverEffect' style={basicStyle}>Youtube</p>
        <p className='hoverEffect' style={basicStyle}>FaceBook</p>
        <p className='hoverEffect' style={basicStyle}>Instagram</p>
        <p className='hoverEffect' style={basicStyle}>Pinterest</p>
      </div>
    </div>
  ) 
}

export default Sidebar