import React, {useState} from 'react';

const PostItem = function(props) {
	return(
		<div className='post'>
        	<div className='post__content'>
          		<strong>{props.post.id}.{props.post.title}</strong>
          		<div>
                  {props.post.description}
          		</div>
          	<div className="post_btns">
            		<button>Удалить</button>
          	</div>
        	</div>  
      </div>
		);
}

export default PostItem;