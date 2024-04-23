import { useState, useEffect } from 'react';
import { resultStyle } from '../components/searchResult/style';
import { useMediaQuery } from '@material-ui/core';
import directRoutes from '../../data/jsons/cheapTripData/direct_routes.json';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TrainIcon from '@mui/icons-material/Train';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import SubwayIcon from '@mui/icons-material/Subway';

const useRouteCard = (route) => {
  const [travelInfo, setTravelInfo] = useState(null);
  const style = useMediaQuery('(max-width:650px)')
    ? resultStyle.sm
    : resultStyle.lg;
  const calculateTravelTime = (duration) => {
    if (!duration) return;
    const days = Math.floor(duration / (24 * 60));
    const hours = Math.floor((duration % (24 * 60)) / 60);
    const minutes = duration % 60;

    let displayTime = '';

    if (days > 0) displayTime += `${days}d`;
    if (hours > 0) displayTime += ` ${hours}h`;
    displayTime += ` ${minutes}min`;
    return displayTime;
  };

  const timeTravel = calculateTravelTime(route['duration_minutes']);
  const priceTravel = `€ ${route[`euro_price`]}`;

  
  useEffect(() => {
    if (!directRoutes) return;
    let tempKeys = route['direct_paths'];
    let temp = [];
    tempKeys.forEach((key) => {
      const routeItem = {
        route: key,
        ...directRoutes[key],
      };
      temp.push(routeItem);
    });
    setTravelInfo(temp);
  }, [directRoutes, route]);

  const selectTransportIcon = (transportType, style) => {
    switch (transportType) {
      case 'Flight':
        return <AirplanemodeActiveIcon sx={style} />;
      case 'Bus':
        return <DirectionsBusIcon sx={style} />;
      case 'Train':
        return <TrainIcon sx={style} />;
      case 'Car Drive':
        return <DirectionsCarIcon sx={style} />;
      case 'Taxi':
        return <LocalTaxiIcon sx={style} />;
      case 'Walk':
        return <DirectionsWalkIcon sx={style} />;
      case 'Town Car':
        return <DirectionsCarIcon sx={style} />;
      case 'Ride Share':
        return <ThumbUpIcon sx={style} />;
      case 'Shuttle':
        return <AirportShuttleIcon sx={style} />;
      case 'Ferry':
        return <DirectionsBoatIcon sx={style} />;
      case 'Subway':
        return <SubwayIcon sx={style} />;
      default:
        return <QuestionMarkIcon sx={style} />;
    }
  };

  return {
    style,
    timeTravel,
    priceTravel,
    travelInfo,
    calculateTravelTime,
    selectTransportIcon,
  };
};

export default useRouteCard;
