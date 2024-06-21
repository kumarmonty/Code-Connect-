import React, { useState } from 'react';
import UserLikes from './UserLikes';
import UserTweets from './UserTweets';
import UserMedia from './UserMedia';
import UserReplies from './UserReplies';
import { Tabs, Tab, Typography, Box } from '@mui/material';

const TabComponent = () => {
  const [value, setValue] = useState(0);

  const handleOnChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section py-5>
            <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleOnChange} centered>
        <Tab label="Tweets" />
        <Tab label="Replies" />
        <Tab label="Media" />
        <Tab label="Likes" />
      </Tabs>
      <Typography component="div" sx={{ p: 3 }}>
        {value === 0 && <UserTweets/>}
        {value === 1 && <UserReplies/>}
        {value === 2 && <UserMedia/>}
        {value === 3 && <UserLikes/>}
      </Typography>
    </Box>
    </section>
  );
};

export default TabComponent;
