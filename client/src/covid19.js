import React from 'react'
import './covid19.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Covid19() {
   
  return (
    <div class="card" style={{border: 'none'}}>
        <div class="container">
        <h1 class="header_font">We are here to help</h1>
        <br/>
        <h3 class="header_font_2">Government Travel Restrictions and Advisories</h3>
        <p class="content">Please check for travel restrictions before booking and travelling to an accommodation. Travel may be permitted only for certain purposes and in particular, touristic travel may not be allowed. To help you on your way, we included publicly available links to government websites for several countries around the world. Please note that not all countries are covered below. If a country is not included in this overview it doesn’t mean that no travel restrictions are in place and we recommend that you seek out information for any country you are planning to travel to. We are not responsible for the content of the public (government) websites linked below. Government responses continue to evolve, so please check back often for updates and rely on your national and local government for the most current information.</p>
        <center>
        <div class="col-4">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Travel Restrictions in Asia-Pacific</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li><a target="_blank" href='https://www.samoagovt.ws/'>Samoa</a></li>
              <li><a target="_blank" href='https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/coronavirus-covid-19-advice-for-travellers'>Australia</a></li>
              <li><a target="_blank" href='http://www.mohca.gov.bt/'>Bhutan</a></li>
              <li><a target="_blank" href='https://www.fmprc.gov.cn/mfa_eng/topics_665678/kjgzbdfyyq/'>China</a></li>
              <li><a target="_blank" href='https://www.mha.gov.in/notifications/circulars-covid-19'>India</a></li>
              <li><a target="_blank" href='https://www.japan.travel/en/coronavirus/'>Japan</a></li>
              <li><a target="_blank" href='https://www.pmo.gov.my/special-contents/2019-novel-coronavirus-2019-ncov/'>Malaysia</a></li>
              <li><a target="_blank" href='https://www.immigration.govt.nz/about-us/covid-19/coronavirus-update-inz-response'>New Zealand</a></li>
              <li><a target="_blank" href='http://www.immigration.gov.lk/web/index.php?option=com_content&view=article&id=337&lang=en'>Sri Lanka</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Travel Restrictions in Europe</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li><a target="_blank" href='https://www.sozialministerium.at/en.html'>Austria</a></li>
              <li><a target="_blank" href='https://www.info-coronavirus.be/'>Belgium</a></li>
              <li><a target="_blank" href='https://politi.dk/en/coronavirus-in-denmark/if-you-are-travelling-to-and-from-denmark'>Denmark</a></li>
              <li><a target="_blank" href='https://www.gov.uk/guidance/national-lockdown-stay-at-home'>England</a></li>
              <li><a target="_blank" href='https://www.gouvernement.fr/en/coronavirus-covid-19'>France</a></li>
              <li><a target="_blank" href='https://www.auswaertiges-amt.de/de/ReiseUndSicherheit/covid-19/2296762'>Germany</a></li>
              <li><a target="_blank" href='https://www.esteri.it/mae/en/ministero/normativaonline/decreto-iorestoacasa-domande-frequenti/focus-cittadini-italiani-in-rientro-dall-estero-e-cittadini-stranieri-in-italia.html'>Italy</a></li>
              <li><a target="_blank" href='https://www.government.nl/topics/coronavirus-covid-19'>Netherlands</a></li>
              <li><a target="_blank" href='http://government.ru/'>Russia</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Travel Restrictions in Middle East</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ul>
              <li><a target="_blank" href='https://www.gov.il/he/departments/topics/corona-main-sub'>Israel</a></li>
              <li><a target="_blank" href='https://www.petra.gov.jo/'>Jordan</a></li>
              <li><a target="_blank" href='https://www.moh.gov.om/ar/-/moh-alert-corona-virus-disease-covid-1-2'>Oman</a></li>
              <li><a target="_blank" href='https://www.moi.gov.ae/en/default.aspx'>United Arab Emirates</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </center>
                        <br/>    
                        <h3 class="header_font_2">Booking Conditions</h3>
                        <p class="content">For bookings made on or after 6 April 2020, we advise you to consider the risk of Coronavirus (COVID-19) and associated government measures. If you don’t book a flexible rate, you may not be entitled to a refund. Your cancellation request will be handled by the property based on your chosen policy and mandatory consumer law, where applicable. During times of uncertainty, we recommend booking an option with free cancellation. If your plans change, you can cancel free of charge until free cancellation expires.</p>
                    </div>  
                    </div>
  )
}

export default Covid19