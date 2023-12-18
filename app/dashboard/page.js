import React from 'react'
import EmailCampaign from './emailCampaign/page'
import { Toaster } from 'react-hot-toast'

const Dashboard = () => {
  return (
    <div className='w-full h-full'>
      <EmailCampaign />
      <Toaster />
      </div>
  )
}

export default Dashboard