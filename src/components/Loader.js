 import * as React from 'react';
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

const Loader = () => {
    return (
      <div className='loader'>
        <div className='loader-top'>
          <div className='loader-container'>
            <Box sx={{ width: 300 }}>
              <Skeleton width='60%' />
              <Skeleton width='35%' />
            </Box>
          </div>

          <div className='loader-container'>
            <Box sx={{ width: 300 }}>
              <Skeleton width='60%' />
              <Skeleton width='35%' />
            </Box>
          </div>

          <div className='loader-container'>
            <Box sx={{ width: 300 }}>
              <Skeleton width='60%' />
              <Skeleton width='35%' />
            </Box>
          </div>
        </div>
        <div className='loader-bottom'>
          <div className='loader-container'>
            <Box sx={{ width: 300 }}>
              <Skeleton width='60%' />
              <Skeleton width='35%' />
            </Box>
          </div>

          <div className='loader-container'>
            <Box sx={{ width: 300 }}>
              <Skeleton width='60%' />
              <Skeleton width='35%' />
            </Box>
          </div>

          <div className='loader-container'>
            <Box sx={{ width: 300 }}>
              <Skeleton width='60%' />
              <Skeleton width='35%' />
            </Box>
          </div>
        </div>
      </div>
    );
}

export default Loader