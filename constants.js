
import CampaignIcon from '@mui/icons-material/Campaign';
import InboxSharpIcon from '@mui/icons-material/InboxSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import InsightsSharpIcon from '@mui/icons-material/InsightsSharp';


export const sideBarData = [
    {
        path:'/dashboard/emailCampaign',
        name:'Email Campaign',
        icon:CampaignIcon
    },
    {
        path:'/dashboard/masterInbox',
        name:'Master Inbox',
        icon:InboxSharpIcon
    },
    {
        path:'/dashboard/emailAccounts',
        name:'Email Accounts',
        icon:EmailSharpIcon
    },
    {
        path:'/dashboard/integrations',
        name:'Integrations',
        icon:IntegrationInstructionsIcon
    },
    {
        path:'/dashboard/globalAnalytics',
        name:'Dashboard Analytics',
        icon:InsightsSharpIcon
    }
]


// {handleSideBar ? (
//     <Link href='/dashboard/emailCampaign'>
//     <li className="px-4 py-4 hover:bg-fadedBg text-center flex space-x-4">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" className="w-6 h-6">
//         <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//       </svg>
//       <div>Email Campaign</div>
//     </li>
//    </Link>
//   ) :(
//     <Link href='/dashboard/emailCampaign'>
//   <li className="px-4 py-4 hover:bg-fadedBg text-center flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" className="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//   </li>
//  </Link>
//   )}
//   <Link href='/dashboard/masterInbox'>
//   <li className="px-4 py-4 hover:bg-fadedBg flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" class="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//     <div>Master Inbox</div>
//   </li>
//   </Link>
//   <Link href='/dashboard/emailAccounts'>
//   <li className=" px-4 py-4 hover:bg-fadedBg flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" class="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//     <div>Email Accounts</div>
//   </li>
//   </Link>
//   <Link href='/dashboard/integrations'>
//   <li className="px-4 py-4 hover:bg-fadedBg flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" class="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//     <div>Integrations</div>
//   </li>
//   </Link>
//   <Link href='/dashboard/globalAnalytics'>
//   <li className="px-4 py-4 hover:bg-fadedBg flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" class="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//     <div>Global Analytics</div>
//   </li>
//   </Link>