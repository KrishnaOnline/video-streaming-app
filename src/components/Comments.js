import React from 'react'

const Comments = ({comments}) => {
    
    const x = comments?.snippet?.topLevelComment?.snippet?.textDisplay;

  return (
    <div>{x}</div>
  )
}

export default Comments;