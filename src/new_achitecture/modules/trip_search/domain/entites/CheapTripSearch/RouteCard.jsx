import React from 'react';
import locations from '../..//../data/jsons/cheapTripData/locations.json';
import TravelInfo from './TravelInfo';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccordionDetails from '@mui/material/AccordionDetails';
import useRouteCard from '../../../presentation/hooks/useRouteCard';
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

function RouteCard({ route, setIsSearchListIsOpen }) {
  const { style, timeTravel, priceTravel, travelInfo, calculateTravelTime } = useRouteCard(route);
  const price = priceTravel + '.00';

  setIsSearchListIsOpen(true);

  return (
    <>
      {locations ? (
        <>
          <div style={style.routeCard}>
            {/*div*/}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                {travelInfo &&
                    travelInfo.length !== 0 &&
                    <Box style={style.transportIcons}>
                      {travelInfo.map((item, index) => (
                      <Box style={style.airplaneBox} key={index}>
                        <AirplanemodeActiveIcon sx={style.airplaneIcon}  />
                      </Box>
                      ))}
                    </Box>}
                <Box style={style.box}>
                  <Typography>
                    {travelInfo && travelInfo.length !== 0 && travelInfo.map((travelInformation, index) => (
                        <React.Fragment key={travelInformation.to}>
                          {index !== 0 && <ArrowForwardIcon
                              fontSize='small'
                              sx={style.arrowStyle}
                          />}
                          <span style={style.italicFont}>{locations[travelInformation.from].name}</span>
                        </React.Fragment>
                    ))}
                    <ArrowForwardIcon
                        fontSize='small'
                        sx={style.arrowStyle}
                    />
                    {locations[route.to] && (
                        <span style={style.italicFont}>{locations[route.to].name}</span>
                    )}
                  </Typography>
                  <Box style={style.bottomContainer}>
                    <Typography style={style.time}>{timeTravel}</Typography>
                    <Box style={style.priceContainer}>
                      <Typography style={style.price}>{price}</Typography>
                    </Box>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  {travelInfo &&
                    travelInfo.length !== 0 &&
                    travelInfo.map((travelInformation) => (
                      <TravelInfo
                        travelInfo={travelInformation}
                        key={travelInformation.to}
                        price={priceTravel}
                        timeTravel={calculateTravelTime}
                      />
                    ))}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  );
}

export default RouteCard;
