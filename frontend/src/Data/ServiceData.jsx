import mblBankingLogo from "../Images/Services/mblBankingLogo.jpeg";
import mblBankingImage from "../Images/Services/mblBankingImage.jpeg";
import qrLogo from "../Images/Services/qrLogo.jpg";
import qrImage from "../Images/Services/qrImage.jpeg";
import smsImage from "../Images/Services/smsImage.jpeg";
import smsLogo from "../Images/Services/smsLogo.jpeg";
import others from "../Images/Services/others.png";


const Services = [

    {title:"Mobile Banking", image:mblBankingImage, headerImage:mblBankingLogo, description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolores quidem a, maiores voluptatum ipsa?",id:"1",link1:"https://play.google.com/store/apps/details?id=com.infodev.mSahas&pcampaignid=web_share",
        link2: "https://play.google.com/store/apps/details?id=com.infodev.dabali&pli=1"
    },
    {title:"SMS Service", image:smsImage, headerImage:smsLogo, description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolores quidem a, maiores voluptatum ipsa df sdsfsdf sdfsd s sdfs sd f?",id:"2"},
     {title:"QR Service", image:qrImage, headerImage:qrLogo, description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima dolores quidem a, maiores voluptatum ipsa?",id:"3"},
     {title:"Others", image:qrImage, headerImage:others, description:"..",id:"4"}
    
  ]
  export default Services;