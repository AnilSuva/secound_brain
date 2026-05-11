import Button from '../components/Button';
import ShareIcon from '../icons/share-svgrepo-com'
import PlusIcon from '../icons/plus-svgrepo-com'
import { Card } from '../components/Card';
import CreateContent from '../components/CreateContent';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

function Dashboard() {
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <div className='parent'>
      <Sidebar />
      <CreateContent open={createOpen} onClose={() => setCreateOpen(false)} />
      <div className='play-area'>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            variant='primary'
            size='lg'
            text='Add Content'
            startIcon={<PlusIcon width={20} height={20} />}
            onClick={() => { setCreateOpen(true) }}
          />
          <Button
            variant="secondary"
            size='lg'
            text='Share'
            startIcon={<ShareIcon width={20} height={20} fill="blue" />}
            onClick={() => { console.log("button clicked") }}
          />
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Card
            size="md"
            title='Coder'
            description='Anil is the greatest coder recevied by humanity'
            tags='#coderlife'
          />
          <Card
            size="md"
            title='DSA'
            description='DSA is the key to FAANG'
            tags='#coderlife'
          />
        </div>
      </div>


    </div>
  )
}

export default Dashboard;
