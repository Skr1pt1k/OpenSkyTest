import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Spinner} from 'reactstrap';

import {flightsActions} from '../../store/flights';

const Info = () => {
  const flightsCount = useSelector(state => state.flights.data.states);
  const {loading} = useSelector(state => state.flights);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flightsActions.fetch());
  }, []);


  return (
    <div className='flights'>
      {!loading && <span>There are {flightsCount && flightsCount.length} flights now.</span>}
      {loading && <Spinner color="primary" />}
    </div>
  );
};

export default Info;
