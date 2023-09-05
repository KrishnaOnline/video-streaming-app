import React from 'react'

const Comments = ({comments}) => {
    const commentSnippet = comments?.snippet?.topLevelComment?.snippet;
    const comment = commentSnippet?.textOriginal.substring(0,90);
    const commenter = commentSnippet?.authorDisplayName;
    const commenterDp = commentSnippet?.authorProfileImageUrl;

  return (
    <div className='flex shadow-md p-5'>
      <img className='mr-5 rounded-full' src={commenterDp} alt='' />
      <div>
        <p className='font-medium'>{commenter}</p>
        <p className=''>{comment}</p>
      </div>
    </div>
  )
}

export default Comments;