import {set} from 'lodash'
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {Button, Typography} from 'antd'
import {requestPOST, GLOBAL_URL, requestGET} from '../../../../basic/basicApi'
import './style.scss'
import {useSelector} from 'react-redux'

const {Text} = Typography

const PostComment = props => {
  const {data} = props
  const [dataComment, setDataComment] = useState([])
  const {user} = useSelector(state => state.auth)
  
  console.log(data)
  useEffect(() => {
    const fetchDataComment = async () => {
      var res = await requestGET(`${GLOBAL_URL}/v1/comment/GetListComment?postId=${data.id}&page=0&perpage=20`)
      setDataComment(res.data)
    }
    fetchDataComment()
    return () => {}
  }, [props.load])

  const handleLike = async id => {
    var newLike = {
      postId: data.id,
      commentId: id,
      type: 'like',
    }
    var res = await requestPOST(`${GLOBAL_URL}/v1/reaction/CreateReaction`, newLike)
    props.setLoad(true)
  }
  const handleUnLike = async (id) => {
    var unLike = {
      postId: data.id,
      commentId: id,
    }
    var res = await requestPOST(`${GLOBAL_URL}/v1/reaction/DeleteReaction`, unLike)
    props.setLoad(true)
  }

  return (
    <div>
      {dataComment.map(item => {
        return (
          <div
            className='View CommentItem'
            style={{display: 'flex', flexDirection: 'row', padding: '10px 10px 0px 8px', backgroundColor: 'white'}}>
            <div className='symbol symbol-40 symbol-circle symbol-light-success mr-2'>
              <div className='symbol-label' style={{backgroundImage: 'url("/media/users/300_21.jpg")'}} />
            </div>
            <div className='View' style={{paddingLeft: '6px', paddingRight: '6px', flexShrink: 1, minWidth: '120px'}}>
              <div className='View d-flex flex-nowrap align-items-center flex-shrink-1'>
                <div
                  className='View'
                  style={{
                    padding: '6px 10px',
                    backgroundColor: 'rgb(239, 239, 239)',
                    borderRadius: '15px',
                    alignSelf: 'flex-start',
                    minWidth: '140px',
                    textAlign: 'left',
                    flex: '1 1 0%',
                  }}>
                  <NavLink
                    to={`/groups/${data.group.id}`}
                    className='TouchableOpacity d-flex flex-nowrap align-self-start align-items-center'>
                    <div
                      className='Text CommentItem-displayNameLabel d-flex text-left align-self-start'
                      style={{
                        fontSize: '1.0715em',
                        fontWeight: 'normal',
                      }}>
                      {item.user.fullName}
                    </div>
                  </NavLink>
                  <div className='Text' style={{fontSize: '0.9286em', flexWrap: 'wrap', textAlign: 'left', marginTop: '2px'}}>
                    {item.contentData}
                  </div>
                </div>
              </div>
              <div className='View d-flex align-items-center mt-1'>
                <div className='Text pt-1 pl-2 pr-2' style={{color: 'rgb(112, 112, 112)', fontSize: '0.8571em'}}>
                  25 phút
                </div>
                {data.reactions.findIndex(i => i.userId == user.id && i.commentId !== null) > -1 ? (
                  <div
                    onClick={() => {
                      handleUnLike(item.id)
                    }}
                    className='Text pt-1 pl-2 pr-2 likeButton'
                    style={{color: '#F64E60', fontSize: '0.8571em', fontWeight: 600}}>
                    Đã thích
                  </div>
                ) : (
                  <div
                    onClick={() => {
                      handleLike(item.id)
                    }}
                    className='Text pt-1 pl-2 pr-2 likeButton'
                    style={{color: 'rgb(112, 112, 112)', fontSize: '0.8571em', fontWeight: 600}}>
                    Thích
                  </div>
                )}
                <div className='Text pt-1 pl-2 pr-2' style={{fontSize: '0.8571em', fontWeight: 600, color: 'rgb(112, 112, 112)'}}>
                  Trả lời
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostComment
