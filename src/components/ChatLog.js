import React from 'react';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, setLikedCallback, localSender }) => {
  // console.log('entrie: ', entries);

  const chatComponents = entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        id={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
        liked={chat.liked}
        setLikedCallback={setLikedCallback}
        localSender={localSender}
      />
    );
  });
  return (
    <div>
      <h2 className="chat-log">{chatComponents} </h2>
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;
