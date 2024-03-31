import React from 'react';
import locations from '../../../data/jsons/cheapTripData/locations.json';
import { Box, Button, Link, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Modal from '@mui/material/Modal';
import s from './cheaptrip.module.css';
import useTravelInfo from '../../../presentation/hooks/useTravelInfo';
import {BOOKING_AFFILIATE, BUY_TICKET_AFFILIATE, HOSTEL_WORLD_AFFILIATE} from '../utils/constants/links';



function TravelInfo({ travelInfo, timeTravel }) {
  const {
    style,
    lessThan480,
    additionalInfoOpened,
    additionalInformation,
    setAddInfoOpen
  } = useTravelInfo(travelInfo);

  const handleOpenInfo = () => {
    setAddInfoOpen();
  };

  const priceOutput = (price) => {
    return '€ ' + price + '.00'
  }

  return (
    <div>
      {locations ? (
        <>
          <Box style={style.itemContainer}>
              <Box style={style.directions}>
              <Typography style={style.boldText}>
                {locations[travelInfo.from] && (
                    <span style={{padding: '0 2px'}}>{locations[travelInfo.from].name}</span>
                )}
                <ArrowForwardIcon
                    fontSize='small'
                    sx={style.arrowStyle}
                />
                {locations[travelInfo.to] && (
                    <span style={{padding: '0 2px'}}>{locations[travelInfo.to].name}</span>
                )}
              </Typography>
              {/*{defineIconOfTransport(data.transportation_type)}*/}
                <span>Flight</span>
              </Box>
            <Box style={style.directions}>
              <Typography sx={{ color: 'rgb(119, 87, 80)' }}>
                {timeTravel(travelInfo.duration)}
              </Typography>
              <Box
                  sx={
                    lessThan480
                        ? {
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }
                        : {}
                  }
                  style={style.btnByTicket}
              >
                <Link
                    href={BOOKING_AFFILIATE}
                    target='_blank'
                    rel='noreferrer'
                >
                  <Button
                      variant='outlined'
                      style={style.buyTicket}
                      type='button'
                  >
                    Booking.com
                  </Button>
                </Link>
                <Link
                    href={BUY_TICKET_AFFILIATE}
                    target='_blank'
                    rel='noreferrer'
                >
                  <Button
                      variant='outlined'
                      style={{...style.buyTicket, fontWeight: 800}}
                      type='button'
                  >
                    Buy ticket
                  </Button>
                </Link>
                <Link
                    href={HOSTEL_WORLD_AFFILIATE}
                    target='_blank'
                    rel='noreferrer'
                >
                  <Button
                      variant='outlined'
                      style={style.buyTicket}
                      type='button'
                  >
                    Hostelworld
                  </Button>
                </Link>
              </Box>
              <Typography style={style.price}>
                {priceOutput(travelInfo.price)}
              </Typography>
            </Box>
          </Box>

          {additionalInformation && additionalInfoOpened && (
            <Modal
              open={additionalInfoOpened}
              onClose={handleOpenInfo}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <div className={s.modal}>
                <h5>Additional information</h5>

                <h5>A test message</h5>

                <p>
                  <b>From: </b>
                </p>
                <p>Air code: {additionalInformation.from.air_code}</p>
                <p>Station: {additionalInformation.from.station}</p>
                <p>Latitude: {additionalInformation.from.coords.lat}</p>
                <p>Longtitude: {additionalInformation.from.coords.lon}</p>
                <p>
                  <b>To: </b>
                </p>
                <p>Air code: {additionalInformation.to.air_code}</p>
                <p>Station: {additionalInformation.to.station}</p>
                <p>Latitude: {additionalInformation.to.coords.lat}</p>
                <p>Longtitude: {additionalInformation.to.coords.lon}</p>
                <p>
                  <b>Info: </b>
                </p>
                <p>
                  Duration:{' '}
                  {Math.floor(additionalInformation.duration_min / 60)}h{' '}
                  {additionalInformation.duration_min % 60}m
                </p>
                <p>Distance: {additionalInformation.distance_km}km</p>
                {additionalInformation.frequency && (
                  <p>Frequency: {additionalInformation.frequency.info}</p>
                )}
              </div>
            </Modal>
          )}
        </>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default TravelInfo;
